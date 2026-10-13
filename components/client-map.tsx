"use client";

import { useEffect, useRef, useState } from "react";
import type { Map as LeafletMap } from "leaflet";
import "leaflet/dist/leaflet.css";
import { serviceAreaPolygon } from "@/lib/site";

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

        const polygon = L.polygon(
          serviceAreaPolygon.map(([lat, lng]) => [lat, lng] as [number, number]),
          {
            className: "service-area-fill",
            fillColor: "#6b7f5c",
            fillOpacity: 0.22,
            color: "#4f5f44",
            weight: 2,
            opacity: 0.7,
          },
        ).addTo(map);

        map.fitBounds(polygon.getBounds(), { padding: [36, 36], maxZoom: 11 });

        window.setTimeout(() => {
          map?.invalidateSize();
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
          aria-label="Map of Shine and Clean service area in Cleveland"
        />
      )}
    </div>
  );
}
