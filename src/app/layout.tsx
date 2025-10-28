import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advanced Dental Center | Odontología avanzada en Tegucigalpa",
  description:
    "Implantes 3D, estética dental y endodoncia con diagnóstico honesto y mínima intervención. Agenda por WhatsApp.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Advanced Dental Center",
    description: "Tecnología real, resultados medibles y atención cercana.",
    images: ["/og-image.jpg"],
    type: "website",
    url: "https://advanceddentalcenter.hn/"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
