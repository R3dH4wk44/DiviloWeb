
export default function CaracteristicasPrincipales() {
    return (
        <section className="bg-white py-16">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-semibold text-gray-800 mb-10">Características Principales</h2>
    <p className="text-lg text-gray-600 mb-12">Con Divilo, gestionar tus gastos nunca fue tan fácil.</p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      <div className="bg-emerald-500 text-white p-8 rounded-lg shadow-lg">
        <div className="mb-5">
          <i className="fas fa-users fa-3x"></i>
        </div>
        <h3 className="text-xl font-bold mb-3">Divide Gastos al Instante</h3>
        <p className="text-sm">Ya no más cálculos complicados. Divide tus gastos de manera automática y fácil.</p>
      </div>
      
      <div className="bg-sky-500 text-white p-8 rounded-lg shadow-lg">
        <div className="mb-5">
          <i className="fas fa-cloud fa-3x"></i>
        </div>
        <h3 className="text-xl font-bold mb-3">Sincronización en la Nube</h3>
        <p className="text-sm">Accede a tus gastos desde cualquier dispositivo, ¡sin perderte nada!</p>
      </div>

      <div className="bg-emerald-600 text-white p-8 rounded-lg shadow-lg">
        <div className="mb-5">
          <i className="fas fa-chart-line fa-3x"></i>
        </div>
        <h3 className="text-xl font-bold mb-3">Reportes Visuales</h3>
        <p className="text-sm">Visualiza tus gastos en gráficos claros y detallados para un mejor entendimiento.</p>
      </div>

      <div className="bg-sky-600 text-white p-8 rounded-lg shadow-lg">
        <div className="mb-5">
          <i className="fas fa-users-cog fa-3x"></i>
        </div>
        <h3 className="text-xl font-bold mb-3">Creación de Grupos</h3>
        <p className="text-sm">Crea grupos con amigos, familiares o compañeros de trabajo para compartir y controlar gastos.</p>
      </div>

      <div className="bg-emerald-700 text-white p-8 rounded-lg shadow-lg">
        <div className="mb-5">
          <i className="fas fa-download fa-3x"></i>
        </div>
        <h3 className="text-xl font-bold mb-3">Exportación de Datos</h3>
        <p className="text-sm">Exporta tus datos de manera rápida para tener un respaldo o analizarlos en otras plataformas.</p>
      </div>

      <div className="bg-sky-700 text-white p-8 rounded-lg shadow-lg">
        <div className="mb-5">
          <i className="fas fa-mobile-alt fa-3x"></i>
        </div>
        <h3 className="text-xl font-bold mb-3">Disponible en Móvil</h3>
        <p className="text-sm">Accede a tus cuentas desde tu móvil en cualquier lugar y en cualquier momento.</p>
      </div>
    </div>
  </div>
</section>

    )
};