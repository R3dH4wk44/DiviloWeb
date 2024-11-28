export default function Footer() {
    return (
         <footer className="bg-gray-800 text-white py-16 ">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Información de la empresa */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 mb-2">Divilo App</h3>
            <p className="text-lg text-gray-200">
              Gestiona tus gastos y ahorra con facilidad. Empieza hoy mismo.
            </p>
          </div>

          {/* Enlaces importantes */}
          <div className="flex flex-col md:flex-row md:space-x-12 text-center md:text-left mb-8 md:mb-0">
            <a href="#caracteristicas" className="text-lg text-gray-200 hover:text-sky-500 transition-colors py-2">
              Características
            </a>
            <a href="#testimonios" className="text-lg text-gray-200 hover:text-sky-500 transition-colors py-2">
              Testimonios
            </a>
            <a href="#preguntas-frecuentes" className="text-lg text-gray-200 hover:text-sky-500 transition-colors py-2">
              Preguntas frecuentes
            </a>
            <a href="/contacto" className="text-lg text-gray-200 hover:text-sky-500 transition-colors py-2">
              Contacto
            </a>
            <a href="/privacidad" className="text-lg text-gray-200 hover:text-sky-500 transition-colors py-2">
              Política de privacidad
            </a>
          </div>
        </div>
      </div>

      {/* Derechos de autor */}
      <div className="bg-gray-900 text-center py-4 mt-8">
        <p className="text-sm text-gray-100">&copy; 2024 Divilo. Todos los derechos reservados.</p>
      </div>
    </footer>                                                        
    );
}