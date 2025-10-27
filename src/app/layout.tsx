import './globals.css';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head />
      <body className="bg-black text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
