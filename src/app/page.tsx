"use client";
import React from "react";

const phone = "50496624751";
const wa = (msg: string, origin: string, service: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(msg)}&utm_source=web&utm_medium=cta&utm_campaign=${service}_${origin}`;

const waMsgImplantes = "Hola Advance. Motivo: Evaluación de implantes 3D\nNombre:\nTeléfono:";

export default function Home() {
  return (
    <main className="font-sans text-[#0A2540]">
      <header className="container flex items-center justify-between py-3 border-b border-slate-200">
        <a href="/" className="flex items-center gap-3" aria-label="Advanced Dental Center">
          <img src="/logo.svg" alt="Advanced Dental Center" className="h-11" />
          <strong>Advanced Dental Center</strong>
        </a>
        <nav className="flex gap-4 text-sm">
          <a href="#implantes">Implantes</a>
          <a href="#endodoncia">Endodoncia</a>
          <a href="#estetica">Estética</a>
          <a href="#contacto">Contacto</a>
        </nav>
    </header>

      <section className="container py-12">
        <h1 className="text-4xl font-semibold mb-2">Odontología avanzada en Tegucigalpa</h1>
        <p className="text-lg text-slate-600 mb-5">
          Implantes 3D, estética y endodoncia con diagnóstico honesto y mínima intervención.
        </p>
        <a
          href={wa(waMsgImplantes, "hero", "implantes")}
          target="_blank"
          rel="noopener"
          className="inline-block bg-[#0A2540] text-white font-semibold px-5 py-3 rounded-xl shadow hover:opacity-90"
          data-cta="whatsapp"
          data-service="implantes"
          data-origin="hero"
        >
          Agenda evaluación (respondemos &lt;15 min)
        </a>

        <div className="grid gap-4 mt-7 sm:grid-cols-2 lg:grid-cols-3">
          <div id="implantes" className="border border-slate-200 rounded-xl p-4">
            <h3 className="font-semibold mb-1">Implantes con guía 3D</h3>
            <p>Planeación digital y cirugía guiada para resultados precisos y recuperaciones más cómodas.</p>
            <a
              href={wa(waMsgImplantes, "card_implantes", "implantes")}
              target="_blank" rel="noopener"
              className="inline-block mt-3 bg-[#0A2540] text-white font-semibold px-4 py-2 rounded-lg hover:opacity-90"
              data-cta="whatsapp" data-service="implantes" data-origin="card"
            >
              Quiero mi evaluación
            </a>
          </div>

          <div id="endodoncia" className="border border-slate-200 rounded-xl p-4">
            <h3 className="font-semibold mb-1">Endodoncia sin drama</h3>
            <p>Diagnóstico honesto y mínima intervención. Tratamientos con magnificación y anestesia efectiva.</p>
          </div>

          <div id="estetica" className="border border-slate-200 rounded-xl p-4">
            <h3 className="font-semibold mb-1">Estética que se nota</h3>
            <p>Carillas, blanqueamiento y diseño de sonrisa priorizando la salud y la mordida.</p>
          </div>
        </div>
      </section>

      <footer id="contacto" className="container mt-10 pt-6 border-t border-slate-200 text-slate-600 text-sm">
        <p>📍 Col. Alameda, Edificio Paviole, local #2, a media cuadra de Radio América, Tegucigalpa, Honduras</p>
        <p>📞 Tel: 9662-4751</p>
        <a
          href={wa("Hola Advance. Quiero una cita.\nNombre:\nTeléfono:", "footer", "general")}
          target="_blank" rel="noopener"
          className="inline-block mt-3 bg-[#0A2540] text-white font-semibold px-4 py-2 rounded-lg hover:opacity-90"
          data-cta="whatsapp" data-service="general" data-origin="footer"
        >
          Escribir por WhatsApp
        </a>
      </footer>
    </main>
  );
}
