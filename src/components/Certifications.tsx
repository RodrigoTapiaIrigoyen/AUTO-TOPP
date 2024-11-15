import React from 'react';
import { Award, Shield, CheckCircle } from 'lucide-react';

export default function Certifications() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certificaciones y Alianzas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Respaldados por las mejores certificaciones y en colaboración con las principales aseguradoras
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-xl text-center">
            <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Certificación Cesvi</h3>
            <p className="text-gray-600">
              Certificados por el Centro de Experimentación y Seguridad Vial México
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl text-center">
            <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Aseguradoras</h3>
            <p className="text-gray-600">
              Colaboramos con las principales aseguradoras como Crabi y Chubb
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl text-center">
            <CheckCircle className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Garantía de Calidad</h3>
            <p className="text-gray-600">
              Todos nuestros servicios cuentan con garantía por escrito
            </p>
          </div>
        </div>

        <div className="bg-blue-600 rounded-xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">¿Necesitas ayuda con tu seguro?</h3>
          <p className="text-xl mb-8">
            Te asesoramos en todo el proceso con tu aseguradora
          </p>
          <a
            href="tel:+527204690624"
            className="inline-flex items-center px-8 py-3 border-2 border-white rounded-full text-lg font-medium hover:bg-white hover:text-blue-600 transition"
          >
            Llámanos ahora
          </a>
        </div>
      </div>
    </section>
  );
}