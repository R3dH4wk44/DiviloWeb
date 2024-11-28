
export default function TablaComparativa() {
    return (
    <section className="bg-gray-100 py-10">
  <div className="container mx-auto text-center rounded-xl">
    <h2 className="text-2xl font-semibold text-gray-800 mb-5">¿Por qué elegir Divilo?</h2>
    <p className="text-lg text-gray-600 mb-8">Compara nuestra app con otras soluciones disponibles.</p>
    
    <div className="overflow-x-auto rounded-xl">
      <table className="table-auto w-full text-left border-collapse">
        <thead>
          <tr className="bg-emerald-500 text-white">
            <th className="px-6 py-4">Característica</th>
            <th className="px-6 py-4">Divilo</th>
            <th className="px-6 py-4">Otras Apps</th>
            <th className="px-6 py-4">Hojas de Cálculo</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white text-gray-600">
            <td className="px-6 py-4">Dividir gastos fácilmente</td>
            <td className="px-6 py-4 text-center">✅</td>
            <td className="px-6 py-4 text-center">⚠️</td>
            <td className="px-6 py-4 text-center">❌</td>
          </tr>
          <tr className="bg-gray-50 text-gray-600">
            <td className="px-6 py-">Creación de grupos</td>
            <td className="px-6 py-4 text-center">✅</td>
            <td className="px-6 py-4 text-center">✅</td>
            <td className="px-6 py-4 text-center">⚠️</td>
          </tr>
          <tr className="bg-white text-gray-600">
            <td className="px-6 py-4">Sincronización en la nube</td>
            <td className="px-6 py-4 text-center">✅</td>
            <td className="px-6 py-4 text-center">✅</td>
            <td className="px-6 py-4 text-center">❌</td>
          </tr>
          <tr className="bg-gray-50 text-gray-600">
            <td className="px-6 py-4">Reportes visuales</td>
            <td className="px-6 py-4 text-center">✅</td>
            <td className="px-6 py-4 text-center">⚠️</td>
            <td className="px-6 py-4 text-center">❌</td>
          </tr>
          <tr className="bg-white text-gray-600">
            <td className="px-6 py-4">Importación/exportación de datos</td>
            <td className="px-6 py-4 text-center">✅</td>
            <td className="px-6 py-4 text-center">✅</td>
            <td className="px-6 py-4 text-center">✅</td>
          </tr>
          <tr className="bg-gray-50 text-gray-600">
            <td className="px-6 py-4">Interfaz fácil de usar</td>
            <td className="px-6 py-4 text-center">✅</td>
            <td className="px-6 py-4 text-center">⚠️</td>
            <td className="px-6 py-4 text-center">⚠️</td>
          </tr>
          <tr className="bg-white text-gray-600">
            <td className="px-6 py-4">Accesibilidad desde móvil</td>
            <td className="px-6 py-4 text-center">✅</td>
            <td className="px-6 py-4 text-center">✅</td>
            <td className="px-6 py-4 text-center">❌</td>
          </tr>
          <tr className="bg-gray-50 text-gray-600">
            <td className="px-6 py-4">Gratuito o bajo costo</td>
            <td className="px-6 py-4 text-center">✅</td>
            <td className="px-6 py-4 text-center">⚠️</td>
            <td className="px-6 py-4 text-center">✅</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

    )
};