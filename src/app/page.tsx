export default function Home() {
  // Use environment variables for contact methods when available.
  // Fall back to placeholders if not defined. These values are injected at build time by Vercel.
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '50400000000';
  const callNumber = process.env.NEXT_PUBLIC_CALL_NUMBER ?? '50400000000';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const callLink = `tel:${callNumber}`;

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-charcoal text-bone flex flex-col items-center justify-center py-24 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-champagne text-center">
          Precisión estética. Sin ansiedad.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl text-center mb-10">
          Odontología digital, precisión milimétrica y cuidado humano. Cada diagnóstico se diseña con tecnología
          DentoImagen 3D.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={whatsappLink}
            className="bg-champagne text-charcoal px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition"
          >
            Agenda por WhatsApp
          </a>
          <a
            href={callLink}
            className="border-2 border-champagne text-champagne px-8 py-4 rounded-full font-semibold hover:bg-champagne hover:text-charcoal transition"
          >
            Llamar ahora
          </a>
        </div>
      </section>

      {/* Bridge Section */}
      <section className="bg-techblue text-bone py-12 px-4 text-center">
        <p className="text-xl md:text-2xl max-w-4xl mx-auto">
          Cada diagnóstico, cada diseño y cada tratamiento en Advance Dental Center se respalda con la precisión de DentoImagen 3D.
        </p>
      </section>

      {/* Technology Section */}
      <section className="bg-charcoal text-bone py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">Tecnología DentoImagen 3D</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-techblue rounded-2xl shadow-lg flex flex-col">
            <h3 className="text-2xl font-semibold mb-2 text-champagne">Tomografías CBCT</h3>
            <p className="text-gray-300 flex-grow">
              Diagnóstico de alta precisión con tomografía de haz cónico para planificar cada tratamiento de manera segura.
            </p>
          </div>
          <div className="p-6 bg-techblue rounded-2xl shadow-lg flex flex-col">
            <h3 className="text-2xl font-semibold mb-2 text-champagne">Escaneo Intraoral</h3>
            <p className="text-gray-300 flex-grow">
              Registro digital sin molestias: reemplaza las impresiones tradicionales por escaneos 3D inmediatos y precisos.
            </p>
          </div>
          <div className="p-6 bg-techblue rounded-2xl shadow-lg flex flex-col">
            <h3 className="text-2xl font-semibold mb-2 text-champagne">Impresión 3D</h3>
            <p className="text-gray-300 flex-grow">
              Producción rápida de guías quirúrgicas y prototipos con impresión 3D de alta resolución para resultados predecibles.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-techblue text-bone py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">Servicios</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-charcoal rounded-2xl shadow-lg text-center">
            <h3 className="text-xl font-bold text-champagne mb-2">Carillas Estéticas</h3>
            <p className="text-gray-300">Sonrisas naturales con mínima invasión.</p>
          </div>
          <div className="p-6 bg-charcoal rounded-2xl shadow-lg text-center">
            <h3 className="text-xl font-bold text-champagne mb-2">Implantes Dentales</h3>
            <p className="text-gray-300">Implantes respaldados digitalmente para precisión y durabilidad.</p>
          </div>
          <div className="p-6 bg-charcoal rounded-2xl shadow-lg text-center">
            <h3 className="text-xl font-bold text-champagne mb-2">Ortodoncia y Aligners</h3>
            <p className="text-gray-300">Alineación discreta y cómoda con planificación digital.</p>
          </div>
          <div className="p-6 bg-charcoal rounded-2xl shadow-lg text-center">
            <h3 className="text-xl font-bold text-champagne mb-2">Endodoncia</h3>
            <p className="text-gray-300">Tratamientos de conducto sin dolor asistidos por microscopía.</p>
          </div>
          <div className="p-6 bg-charcoal rounded-2xl shadow-lg text-center">
            <h3 className="text-xl font-bold text-champagne mb-2">Extracción de Cordales</h3>
            <p className="text-gray-300">Procedimientos sin ansiedad con planificación 3D y sedación.</p>
          </div>
          <div className="p-6 bg-charcoal rounded-2xl shadow-lg text-center">
            <h3 className="text-xl font-bold text-champagne mb-2">Blanqueamiento Dental</h3>
            <p className="text-gray-300">Resultados rápidos y seguros con tecnología de luz fría.</p>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="bg-charcoal text-bone py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">Casos Clínicos</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="w-full h-64 bg-gray-700 rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-champagne mb-1">Caso 1</h3>
            <p className="text-gray-300">Rehabilitación con carillas de porcelana.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-full h-64 bg-gray-700 rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-champagne mb-1">Caso 2</h3>
            <p className="text-gray-300">Ortodoncia invisible con planificación digital.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
