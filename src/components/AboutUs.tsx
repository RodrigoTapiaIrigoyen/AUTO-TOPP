import React from 'react';
import { History, Users, Award } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sobre Nosotros
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Clinicars S.A. de C.V. es una empresa líder en el sector automotriz
            desde 2020
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <History className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Nuestra Historia
            </h3>
            <p className="text-gray-600">
              Fundada en 2020, hemos crecido hasta convertirnos en un referente
              en el sector automotriz, manteniendo siempre nuestro compromiso
              con la excelencia.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Nuestro Equipo
            </h3>
            <p className="text-gray-600">
              Contamos con técnicos altamente capacitados y certificados,
              comprometidos con brindar el mejor servicio a nuestros clientes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Compromiso</h3>
            <p className="text-gray-600">
              Nos dedicamos a ofrecer servicios de la más alta calidad, con
              precios justos y transparentes para todos nuestros clientes.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <img
            src="public/assets/auto-top.jpeg"
            alt="Equipo AutoTop"
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
