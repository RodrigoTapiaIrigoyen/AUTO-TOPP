import React from 'react';
import { FaPaintBrush, FaShieldAlt, FaTools, FaTint } from 'react-icons/fa';

export default function PaintShop() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hojalatería y Pintura
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Contamos con el mejor equipo y tecnología para garantizar acabados
            perfectos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_2X_656263-MLM79114869736_092024-F.webp"
              alt="Cabina de pintura"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Cabina de Pintura
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <FaPaintBrush className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    Zona de Preparación
                  </h4>
                  <p className="text-gray-600">
                    Área especializada para la preparación de superficies
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <FaTint className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    Laboratorio de Color
                  </h4>
                  <p className="text-gray-600">
                    Sistema computarizado de igualación de color AXALTA
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <FaTools className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    Equipo Profesional
                  </h4>
                  <p className="text-gray-600">
                    Pistolas SATA, lámparas infrarrojas y más
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <FaShieldAlt className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Garantía de 1 Año</h4>
                  <p className="text-gray-600">
                    En todos nuestros trabajos de pintura
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Línea de Repintado AXALTA
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <img
                src="https://www.bhp.com.mx/hubfs/Sitio_web/Preparacion-y-acabado-de-superficies/v2/preparacion-y-acabado-de-superficies-alto-rendimiento.jpg"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h4 className="font-bold text-gray-900">Preparación</h4>
            </div>
            <div className="text-center">
              <img
                src="https://www.quicklane.com/content/dam/quicklane-global/mx/images/blog/home/que-tipos-servicio-mecanico-existen/quick-lane-quicklane-mexico-servicio-automotriz-tipos-menor-mayor.jpg"
                alt="Aplicación de pintura"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h4 className="font-bold text-gray-900">Aplicación</h4>
            </div>
            <div className="text-center">
              <img
                src="https://www.axalta.com/content/axalta_blog_mx/es_ES/repintado-automotriz/gestion-talleres/tips-aumentar-produccion-taller-automotriz/_jcr_content/parMainContent/layoutcontainer/parMainContentLayout/col12/parMainContent/mediateaser.axFitIn.mediaTeaser_desktop_x1.png/1583793637031/tips-aumentar-produccion-taller-automotriz.png"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h4 className="font-bold text-gray-900">Acabado</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
