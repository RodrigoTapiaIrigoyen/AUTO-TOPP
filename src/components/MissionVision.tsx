import React from 'react';
import { Target, Eye, Shield } from 'lucide-react';

export default function MissionVision() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Misión</h3>
            <p className="text-gray-600">
              Ser un equipo de técnicos especializados comprometidos con ofrecer servicios
              automotrices de la más alta calidad, garantizando la satisfacción total de
              nuestros clientes.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Eye className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visión</h3>
            <p className="text-gray-600">
              Ser reconocidos a nivel nacional como el centro de reparación automotriz más
              confiable y recomendado, destacando por nuestra excelencia en servicio y
              atención al cliente.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Honestidad y transparencia</li>
              <li>• Compromiso con la calidad</li>
              <li>• Mejora continua</li>
              <li>• Precios justos</li>
              <li>• Responsabilidad social</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}