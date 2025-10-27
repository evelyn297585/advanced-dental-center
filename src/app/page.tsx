'use client'

import React from 'react'

const adcLogo = '/adc-logo.png'
const dentoLogo = '/dento-logo.png'

const services = [
  { title: 'Odontología general', description: 'Cuidado dental integral para mantener tu salud bucal.' },
  { title: 'Endodoncia', description: 'Tratamientos de conducto para salvar y conservar tu diente.' },
  { title: 'Cirugía oral y Maxilofacial', description: 'Procedimientos quirúrgicos para tratar problemas de boca y mandíbula.' },
  { title: 'Periodoncia', description: 'Prevención y tratamiento de enfermedades de las encías.' },
  { title: 'Ortodoncia', description: 'Corrección de la posición de los dientes y mordida.' },
  { title: 'Rehabilitación', description: 'Restauración funcional y estética de las piezas dentales.' },
  { title: 'Odontopediatría', description: 'Atención especializada para los más pequeños.' },
  { title: 'Prostodoncia', description: 'Prótesis dentales fijas y removibles adaptadas a cada caso.' },
  { title: 'Patología oral', description: 'Diagnóstico y tratamiento de lesiones bucales.' },
  { title: 'Estética dental', description: 'Carillas, blanqueamientos y diseño de sonrisa.' }
]

const technology = [
  { title: 'Tomógrafo dental 3D (CBCT)', description: 'Diagnóstico preciso mediante imagen tridimensional.' },
  { title: 'Radiografías panorámicas y cefalométricas', description: 'Estudios de alta calidad en segundos.' },
  { title: 'Escáner intraoral', description: 'Digitalización exacta de la boca sin moldes físicos.' },
  { title: 'Impresión 3D SHINING 3D', description: 'Modelos, guías quirúrgicas y restauraciones personalizadas.' },
  { title: 'Fotografía clínica', description: 'Registros profesionales intra y extraorales.' }
]

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center px-6 py-10">
      <img src={adcLogo} alt="Advance Dental Center logo" className="w-48 mb-4" />
      <h1 className="text-4xl font-bold mb-2 text-gray-800">Advanced Dental Center</h1>
      <p className="text-lg mb-10 text-gray-600">
        Tecnología, precisión y calidez humana al servicio de tu sonrisa.
      </p>

      <section className="max-w-5xl w-full mb-12">
        <h2 className="text-2xl font-semibold mb-4">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <div key={i} className="p-4 border rounded-xl shadow-sm bg-white">
              <h3 className="font-bold text-gray-800 mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl w-full mb-12">
        <img src={dentoLogo} alt="DentoImagen 3D logo" className="w-32 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold mb-4">Tecnología DentoImagen 3D</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {technology.map((t, i) => (
            <div key={i} className="p-4 border rounded-xl shadow-sm bg-white">
              <h3 className="font-bold text-gray-800 mb-2">{t.title}</h3>
              <p className="text-gray-600 text-sm">{t.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-12 text-gray-600 text-sm">
        <p>
          📍 Colonia Alameda, edificio Paviole, local #2, Tegucigalpa, Honduras
        </p>
        <p>
          📞 <a href="tel:+50496624751">+504 9662-4751</a> | 
          <a href="mailto:advancedcenterhn@gmail.com">advancedcenterhn@gmail.com</a>
        </p>
        <p className="mt-2">© {new Date().getFullYear()} Advanced Dental Center</p>
      </footer>
    </main>
  )
}
