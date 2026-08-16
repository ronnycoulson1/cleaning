import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { StickyCta } from "@/components/sticky-cta";
import { site } from "@/lib/site";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cleanandshine.example"),
  title: {
    default: `${site.name} — Cleaning in ${site.city}`,
    template: `%s · ${site.name}`,
  },
  description: site.tagline,
  openGraph: {
    title: `${site.name} — Cleaning in ${site.city}`,
    description: site.tagline,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunitoSans.variable} ${nunito.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased">
        <JsonLd />
        <Header />
        <div className="flex flex-1 flex-col pb-20 md:pb-0">{children}</div>
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
