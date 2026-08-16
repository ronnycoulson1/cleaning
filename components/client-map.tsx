"use client";

import { useEffect, useRef, useState } from "react";
import type { Map as LeafletMap, Marker } from "leaflet";
import "leaflet/dist/leaflet.css";
import { clientPins } from "@/lib/site";

type ClientMapProps = {
  className?: string;
};

export function ClientMap({ className = "" }: ClientMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let map: LeafletMap | null = null;

    async function init() {
      try {
        const el = containerRef.current;
        if (!el) return;

        if ("_leaflet_id" in el) {
          delete (el as unknown as { _leaflet_id?: number })._leaflet_id;
          el.innerHTML = "";
        }

        const L = (await import("leaflet")).default;
        if (cancelled || !containerRef.current) return;

        map = L.map(el, {
          scrollWheelZoom: false,
          zoomControl: true,
        });

        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          maxZoom: 18,
        }).addTo(map);

        const regularIcon = L.divIcon({
          className: "client-pin",
          html: `<span class="client-pin-dot"></span>`,
          iconSize: [16, 16],
          iconAnchor: [8, 8],
        });

        const featuredIcon = L.divIcon({
          className: "client-pin client-pin--featured",
          html: `<span class="client-pin-dot client-pin-dot--featured"></span>
            <span class="client-pin-label">2696 Cranlyn Rd</span>`,
          iconSize: [140, 44],
          iconAnchor: [12, 12],
        });

        const points = clientPins.map(
          (pin) => [pin.lat, pin.lng] as [number, number],
        );

        let featuredMarker: Marker | null = null;

        clientPins.forEach((pin) => {
          const isFeatured = "featured" in pin && pin.featured;
          const marker = L.marker([pin.lat, pin.lng], {
            icon: isFeatured ? featuredIcon : regularIcon,
            zIndexOffset: isFeatured ? 1000 : 0,
          }).addTo(map!);

          marker.bindPopup(
            `<strong>${pin.area}</strong><br/><span style="color:#5a6e6c">${pin.address}</span>`,
          );

          if (isFeatured) featuredMarker = marker;
        });

        map.fitBounds(points, { padding: [48, 48], maxZoom: 12 });

        window.setTimeout(() => {
          map?.invalidateSize();
          featuredMarker?.openPopup();
          if (!cancelled) setReady(true);
        }, 200);
      } catch {
        if (!cancelled) setError(true);
      }
    }

    void init();

    return () => {
      cancelled = true;
      map?.remove();
      map = null;
    };
  }, []);

  return (
    <div
      className={`relative overflow-hidden border border-line bg-surface ${className}`}
    >
      {!ready && !error ? (
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-surface text-sm text-muted">
          Loading map…
        </div>
      ) : null}
      {error ? (
        <div className="flex h-[360px] items-center justify-center px-6 text-center text-sm text-muted sm:h-[460px]">
          Map couldn&apos;t load. Check your connection and refresh.
        </div>
      ) : (
        <div
          ref={containerRef}
          className="client-map h-[360px] w-full sm:h-[460px]"
          aria-label="Map of client locations in Cleveland"
        />
      )}
    </div>
  );
}
