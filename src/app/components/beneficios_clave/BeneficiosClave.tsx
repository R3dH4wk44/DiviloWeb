
export default function BeneficiosClave()   {    
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-20">
                {/* Título */}
                <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8">
                    Por qué amarás Divilo
                </h2>

                {/* Beneficios */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Beneficio 1 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-emerald-100 text-emerald-500 rounded-full mb-4">
                            {/* Ícono */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h11M9 21V3m0 18l6-6-6-6" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Fácil de Usar</h3>
                        <p className="text-gray-600">Interfaz intuitiva que cualquiera puede manejar.</p>
                    </div>

                    {/* Beneficio 2 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-emerald-100 text-emerald-500 rounded-full mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a4 4 0 00-8 0v2a4 4 0 008 0zm0 0v6a4 4 0 01-8 0v-6m-4 6a4 4 0 01-8 0" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Grupos Ilimitados</h3>
                        <p className="text-gray-600">Crea y gestiona grupos para cualquier ocasión.</p>
                    </div>

                    {/* Beneficio 3 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-emerald-100 text-emerald-500 rounded-full mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 21H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1zM9 12l2 2 4-4" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Reportes Claros</h3>
                        <p className="text-gray-600">Obtén un desglose visual de tus gastos.</p>
                    </div>
                </div>

                {/* CTA Opcional */}
                <div className="text-center mt-12">
                    <a href="#features" className="inline-block px-4 py-2 md:px-6 md:py-3 bg-emerald-500 text-white rounded-lg shadow-md hover:bg-emerald-700 transition">
                        Descubre más funcionalidades
                    </a>
                </div>
            </div>
        </section>
    )
}