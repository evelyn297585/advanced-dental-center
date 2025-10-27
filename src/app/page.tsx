import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Calendar, MessageCircle, ChevronRight, Star, Shield, Zap, Sparkles } from "lucide-react";

// ⚙️ CONFIG — AJUSTA ESTOS TOKENS A TU MARCA
const BRAND = {
  name: "Advance Dental Center",
  phone: "9662-4751",
  whatsapp: "https://wa.me/50496624751",
  email: "advancedcenterhn@gmail.com",
  address: "Colonia Alameda, edificio Paviole, local #2, a media cuadra de Radio América, Tegucigalpa, Honduras",
  facebook: "https://www.facebook.com/AdvancedCenterHn",
  instagram: "https://www.instagram.com/advanceddentalcenterhn/",
  primary: "#0EA5E9",
  secondary: "#111827",
  accent: "#22D3EE",
  light: "#F8FAFC",
};

const Section = ({ children, className = "" }) => (
  <section className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
);

function CTAButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={BRAND.whatsapp}
        className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-base font-semibold bg-white text-black hover:bg-white/90 shadow-lg shadow-black/10 transition"
      >
        <MessageCircle className="h-5 w-5" />
        Solicitar cita por WhatsApp
      </a>
      <a
        href="#agenda"
        className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-base font-semibold bg-black/80 text-white border border-white/20 hover:bg-black"
      >
        <Calendar className="h-5 w-5" />
        Formulario rápido
      </a>
      <a
        href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
        className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-base font-semibold border border-white/40 text-white hover:bg-white hover:text-black transition"
      >
        <Phone className="h-5 w-5" />
        Llamar
      </a>
    </div>
  );
}

export default function LandingADC() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 bg-black/50 backdrop-blur border-b border-white/10">
        <Section className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-white/90 text-black grid place-content-center font-black">AD</div>
            <div className="leading-tight">
              <p className="font-semibold">{BRAND.name}</p>
              <p className="text-xs text-white/60">Odontología avanzada en Tegucigalpa</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#servicios" className="hover:text-white">Servicios</a>
            <a href="#tecnologia" className="hover:text-white">Tecnología</a>
            <a href="#equipo" className="hover:text-white">Equipo</a>
            <a href="#reseñas" className="hover:text-white">Reseñas</a>
            <a href="#contacto" className="hover:text-white">Contacto</a>
            <a href={BRAND.whatsapp} className="ml-2 inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2 font-semibold">
              <MessageCircle className="h-4 w-4" /> Contactar
            </a>
          </nav>
        </Section>
      </header>

      {/* HERO */}
      <div className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <video
            className="h-[70vh] w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1588771930290-24e3e6c2a267?q=80&w=2000&auto=format&fit=crop"
          >
            <source src="" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </div>

        <Section className="h-[70vh] flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-6xl font-black leading-[1.05] tracking-tight">
              Estética y salud dental<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">con tecnología que cuida tu postura.</span>
            </h1>
            <p className="mt-5 text-lg text-white/80 max-w-2xl">
              Diagnóstico digital, tratamientos mínimamente invasivos y una experiencia humana, clara y sin rodeos. Tu sonrisa, respaldada por datos.
            </p>
            <div className="mt-7">
              <CTAButtons />
            </div>
            <div className="mt-6 text-xs text-white/60">Solo tratamientos necesarios. Sin “opciones de pago” engañosas.</div>
          </motion.div>
        </Section>
      </div>

      {/* LOGOS */}
      <Section className="py-10">
        <p className="text-center text-sm uppercase tracking-[0.2em] text-white/50">Confiado por profesionales y pacientes exigentes</p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-6 opacity-70">
          {["Aligners", "Implantes", "Endodoncia", "Ortodoncia", "Cirugía"].map((t, i) => (
            <div key={i} className="h-14 rounded-2xl border border-white/10 grid place-content-center text-white/70">{t}</div>
          ))}
        </div>
      </Section>

      {/* WHY US */}
      <Section className="py-14">
        <h2 className="text-3xl sm:text-5xl font-black text-center mb-10">¿Por qué {BRAND.name.split(" ")[0]}?</h2>
        <div className="grid md:grid-cols-4 gap-5">
          {[
            { icon: <GlobeIcon />, title: "La clínica más recomendada", desc: "Resultados consistentes, atención cercana y protocolos claros." },
            { icon: <ErgoIcon />, title: "Ergonomía primero", desc: "Microscopía y postura neutra: procedimientos precisos que cuidan tu cuello." },
            { icon: <Shield className="h-6 w-6" />, title: "Garantía honesta", desc: "Seguimiento post-tratamiento y mantenimiento preventivo." },
            { icon: <Zap className="h-6 w-6" />, title: "Flujo digital completo", desc: "CBCT, escaneo intraoral, impresión 3D y guías quirúrgicas propias." },
          ].map((c, i) => (
            <div key={i} className="rounded-3xl p-6 bg-white/5 border border-white/10 shadow-xl">
              <div className="mb-3 opacity-90">{c.icon}</div>
              <p className="font-semibold text-lg">{c.title}</p>
              <p className="text-sm text-white/70 mt-1">{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICIOS */}
      <Section id="servicios" className="py-14">
        <h2 className="text-3xl sm:text-5xl font-black text-center">Servicios principales</h2>
        <p className="text-center text-white/70 mt-2">Centro de odontología en Tegucigalpa • Profesionales especializados en salud y estética • Alta tecnología en nuestros tratamientos</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Diseño de sonrisa y estética",
              img: "https://images.unsplash.com/photo-1598257006466-0e5d9f04fca7?q=80&w=1600&auto=format&fit=crop",
              bullets: ["Carillas minimamente invasivas", "Blanqueamiento seguro", "Corrección de forma y proporción"],
            },
            {
              title: "Implantes con guía 3D",
              img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop",
              bullets: ["Planificación CBCT", "Guías quirúrgicas impresas", "Carga inmediata cuando es viable"],
            },
            {
              title: "Endodoncia microscópica",
              img: "https://images.unsplash.com/photo-1606811850350-3a4d3f2d81f6?q=80&w=1600&auto=format&fit=crop",
              bullets: ["Más conservación de estructura", "Menor molestia post-operatoria", "Protocolos estandarizados"],
            },
            {
              title: "Ortodoncia digital",
              img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600&auto=format&fit=crop",
              bullets: ["Alineadores y brackets de baja fricción", "Escaneo y simulación", "Controles predecibles"],
            },
          ].map((card, i) => (
            <article key={i} className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 shadow-2xl">
              <img src={card.img} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:scale-105 transition" />
              <div className="relative p-6 sm:p-8">
                <h3 className="text-2xl font-extrabold drop-shadow">{card.title}</h3>
                <ul className="mt-3 space-y-1 text-white/85">
                  {card.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2"><Sparkles className="h-4 w-4 mt-1" /> {b}</li>
                  ))}
                </ul>
                <a href="#agenda" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2 font-semibold">
                  Ver opciones <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* TECNOLOGÍA */}
      <Section id="tecnologia" className="py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black">Tecnología que ves y sientes</h2>
            <p className="mt-4 text-white/80">Diagnóstico digital con CBCT, escaneo intraoral, fotografía clínica y planificación guiada. Todo enfocado en ser mínimamente invasivos, rápidos y precisos. Menos citas, más resultados.</p>
            <div className="mt-5 flex gap-3">
              <a href="#servicios" className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2 font-semibold">Ver tratamientos <ArrowRight className="h-4 w-4" /></a>
              <a href={BRAND.whatsapp} className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-4 py-2">Solicitar por WhatsApp</a>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop" alt="CBCT" className="w-full h-full object-cover" />
          </div>
        </div>
      </Section>

      {/* RESEÑAS */}
      <Section id="reseñas" className="py-16">
        <h2 className="text-3xl sm:text-5xl font-black text-center">Opiniones reales</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-3xl p-6 bg-white/5 border border-white/10">
              <div className="flex items-center gap-1 text-cyan-300">{Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}</div>
              <p className="mt-3 text-white/80">“Atención impecable, diagnóstico claro y resultados que se notan. Recomiendo {BRAND.name} con los ojos cerrados.”</p>
              <p className="mt-3 text-white/60 text-sm">— Paciente verificado</p>
            </div>
          ))}
        </div>
      </Section>

      {/* AGENDA */}
      <Section id="agenda" className="py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black">Solicita tu cita</h2>
            <p className="mt-3 text-white/80">Escríbenos por WhatsApp y un asistente médico coordina tu cita en SIGA. También puedes llamarnos directamente.</p>
            <div className="mt-6"><CTAButtons /></div>
            <p className="mt-4 text-sm text-white/60">Horario: L–V 8:00–18:00 • Sáb 9:00–13:00</p>
          </div>
          <div className="rounded-3xl p-6 bg-white/5 border border-white/10 grid grid-cols-1 gap-4">
            <p className="text-white/70">Teléfono: <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="underline">{BRAND.phone}</a></p>
            <p className="text-white/70">WhatsApp: <a href={BRAND.whatsapp} className="underline">{BRAND.whatsapp}</a></p>
            <p className="text-white/70">Email: <a href={`mailto:${BRAND.email}`} className="underline">{BRAND.email}</a></p>
            <p className="text-white/70">Dirección: {BRAND.address}</p>
            <p className="text-white/70">Facebook: <a href={BRAND.facebook} className="underline">@AdvancedCenterHn</a></p>
            <p className="text-white/70">Instagram: <a href={BRAND.instagram} className="underline">@advanceddentalcenterhn</a></p>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer id="contacto" className="border-t border-white/10 bg-black/80">
        <Section className="py-10 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="h-9 w-9 rounded-full bg-white/90 text-black grid place-content-center font-black">AD</div>
            <p className="mt-3 text-white/70">{BRAND.name}. De lo analógico a lo digital, sin perder lo humano.</p>
          </div>
          <div>
            <p className="font-semibold mb-3">Contacto</p>
            <p className="text-white/70">Tel: <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="underline">{BRAND.phone}</a></p>
            <p className="text-white/70">WhatsApp: <a href={BRAND.whatsapp} className="underline">Escríbenos</a></p>
            <p className="text-white/70">Email: <a href={`mailto:${BRAND.email}`} className="underline">{BRAND.email}</a></p>
            <p className="text-white/70">{BRAND.address}</p>
          </div>
          <div>
            <p className="font-semibold mb-3">Servicios</p>
            <ul className="space-y-1 text-white/70">
              <li>Estética dental</li>
              <li>Implantes</li>
              <li>Endodoncia</li>
              <li>Ortodoncia</li>
              <li>Cirugía oral</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-3">Redes</p>
            <p className="text-white/70"><a href={BRAND.facebook} className="underline" target="_blank" rel="noreferrer">Facebook</a></p>
            <p className="text-white/70"><a href={BRAND.instagram} className="underline" target="_blank" rel="noreferrer">Instagram</a></p>
          </div>
        </Section>
        <Section className="pb-10 text-xs text-white/40">© {new Date().getFullYear()} {BRAND.name}. Todos los derechos reservados.</Section>
      </footer
