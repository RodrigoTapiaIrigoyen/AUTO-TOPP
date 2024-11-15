import React from 'react';
import { FaWarehouse, FaWrench, FaCar, FaClock, FaTools } from 'react-icons/fa';

const facilities = [
  {
    image:
      'https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&q=80&w=1000',
    title: 'Área Techada',
    description: '2500 metros cuadrados de espacio techado',
  },
  {
    image:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLdyk9ZETdta5-yh6L_FJ-1SvUPIFJj71oqogkbgXAAJVtJk_Up7Up9xzWhOwjJKHJOtN2YM2ytqiUPVLkxCSGLlYOGxPZHuW0cSEQGYolUoo1iz-eevS98w0UcER9VMSQMlB-che9IlUB/s1600/bahia+de+un+taller.jpg',
    title: 'Patio',
    description: '7500 metros cuadrados de patio',
  },
  {
    image:
      'https://http2.mlstatic.com/D_NQ_NP_868144-MLM79114860020_092024-O.webp',
    title: 'Cabina de Pintura',
    description: 'Equipamiento de última generación',
  },
];

export default function Facilities() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestras Instalaciones
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Contamos con instalaciones modernas y equipadas con la última
            tecnología para brindar el mejor servicio a tu vehículo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {facility.title}
                </h3>
                <p className="text-gray-200">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-gray-50 p-6 rounded-xl">
            <FaWarehouse className="h-8 w-8 text-blue-600 mb-4" />
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              Amplias Instalaciones
            </h4>
            <p className="text-gray-600">
              10,000 m² totales de espacio de trabajo
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <FaWrench className="h-8 w-8 text-blue-600 mb-4" />
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              Equipo Moderno
            </h4>
            <p className="text-gray-600">Tecnología de última generación</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <FaCar className="h-8 w-8 text-blue-600 mb-4" />
            <h4 className="text-lg font-bold text-gray-900 mb-2">Capacidad</h4>
            <p className="text-gray-600">
              Atención simultánea de múltiples vehículos
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <FaClock className="h-8 w-8 text-blue-600 mb-4" />
            <h4 className="text-lg font-bold text-gray-900 mb-2">24/7</h4>
            <p className="text-gray-600">Recepción de vehículos las 24 horas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
