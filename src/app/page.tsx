"use client";
import React from "react";

export default function Home() {
  const phone = "50496624751";

  const wa = (msg: string, origin: string, service: string) =>
    `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`
    + `&utm_source=web&utm_medium=cta&utm_campaign=${service}_${origin}`;

  const waMsgImplantes = "Hola Advance. Motivo: Evaluación de implantes 3D\nNombre:\nTeléfono:";

  return (
    <main style={{ fontFamily: "system-ui, Arial", color: "#0A2540", padding: "20px" }}>
      {/* Header */}
      <header style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "12px 0", borderBottom: "1px solid #e2e8f0"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src="/logo.svg" alt="Advanced Dental Center" height={48} />
          <strong>Advanced Dental Center</strong>
        </div>
        <nav style={{ display: "flex", gap: 16 }}>
          <a href="#implantes">Implantes</a>
          <a href="#endodoncia">Endodoncia</a>
          <a href="#estetica">Estética</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      {/* Hero */}
      <section style={{ padding: "48px 0 24px" }}>
        <h1 style={{ fontSize: 36, marginBottom: 8 }}>Odontología avanzada en Tegucigalpa</h1>
        <p style={{ fontSize: 18, marginBottom: 20, color: "#334155" }}>
          Implantes 3D, estética y endodoncia con diagnóstico honesto y mínima intervención.
        </p>
        <a
          href={wa(waMsgImplantes, "hero", "implantes")}
          target="_blank"
          rel="noopener"
          style={{
            display: "inline-block",
            background: "#0A2540",
            color: "#fff",
            padding: "12px 18px",
            borderRadius: 12,
            fontWeight: 700,
            textDecoration: "none"
          }}
        >
          Agenda evaluación (respondemos &lt;15 min)
        </a>
      </section>

      {/* Cards */}
      <section style={{
        display: "grid",
        gap: 20,
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))"
      }}>
        <div id="implantes" style={{ border: "1px solid #e2e8f0", borderRadius: 12, padding: 16 }}>
          <h3>Implantes con guía 3D</h3>
          <p>Planeación digital y cirugía guiada para resultados precisos y recuperaciones más cómodas.</p>
          <a
            href={wa(waMsgImplantes, "card_implantes", "implantes")}
            target="_blank"
            rel="noopener"
            style={{
              display: "inline-block",
              background: "#0A2540",
              color: "#fff",
              padding: "10px 14px",
              borderRadius: 10,
              fontWeight: 700,
              textDecoration: "none",
              marginTop: 8
            }}
          >
            Quiero mi evaluación
          </a>
        </div>

        <div id="endodoncia" style={{ border: "1px solid #e2e8f0", borderRadius: 12, padding: 16 }}>
          <h3>Endodoncia sin drama</h3>
          <p>Diagnóstico honesto y mínima intervención. Tratamientos con magnificación y anestesia efectiva.</p>
        </div>

        <div id="estetica" style={{ border: "1px solid #e2e8f0", borderRadius: 12, padding: 16 }}>
          <h3>Estética que se nota</h3>
          <p>Carillas, blanqueamiento y diseño de sonrisa priorizando la salud y la mordida.</p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" style={{ marginTop: 40, paddingTop: 20, borderTop: "1px solid #e2e8f0", color: "#475569" }}>
        <p>📍 Col. Alameda, Edificio Paviole, local #2, a media cuadra de Radio América, Tegucigalpa, Honduras</p>
        <p>📞 Tel: 9662-4751</p>
        <a
          href={wa("Hola Advance. Quiero una cita.\nNombre:\nTeléfono:", "footer", "general")}
          target="_blank"
          rel="noopener"
          style={{
            display: "inline-block",
            background: "#0A2540",
            color: "#fff",
            padding: "10px 14px",
            borderRadius: 10,
            fontWeight: 700,
            textDecoration: "none",
            marginTop: 12
          }}
        >
          Escribir por WhatsApp
        </a>
      </footer>
    </main>
  );
  }
