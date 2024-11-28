import Image from "next/image";
export default function Reviews() {
    return (
        <section className="bg-gray-50 py-16" id="testimonios">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-semibold text-gray-800 mb-10">Lo que dicen nuestros usuarios</h2>
    <p className="text-lg text-gray-600 mb-12">¡Únete a miles de usuarios satisfechos que han simplificado sus gastos con Divilo!</p>

    <div className="flex flex-wrap justify-center gap-10">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm">
        <div className="flex justify-center mb-5">
          <Image className="w-16 h-16 rounded-full object-cover" height={50} width={50} src="https://randomuser.me/api/portraits/men/10.jpg" alt="Usuario 1" />
        </div>
        <p className="text-sm text-gray-600 mb-4">&quot;¡Una app increíble! Ahora puedo dividir los gastos con mis amigos al instante, y la interfaz es muy fácil de usar. ¡Totalmente recomendada!&quot;</p>
        <h4 className="text-xl font-semibold text-gray-800">Carlos Pérez</h4>
        <p className="text-sm text-gray-500">Desarrollador Web</p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm">
        <div className="flex justify-center mb-5">
          <Image className="w-16 h-16 rounded-full object-cover" height={50} width={50} src="https://randomuser.me/api/portraits/women/50.jpg" alt="Usuario 2" />
        </div>
        <p className="text-sm text-gray-600 mb-4">&quot;Divilo ha cambiado la forma en que manejo los gastos en mi familia. La sincronización en la nube es muy útil y confiable.&quot;</p>
        <h4 className="text-xl font-semibold text-gray-800">Ana González</h4>
        <p className="text-sm text-gray-500">Empresaria</p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm">
        <div className="flex justify-center mb-5">
          <Image className="w-16 h-16 rounded-full object-cover" height={50} width={50} src="https://randomuser.me/api/portraits/men/20.jpg" alt="Usuario 3" />
        </div>
        <p className="text-sm text-gray-600 mb-4">&quot;Lo mejor es la opción de exportar los datos. ¡Puedo llevar todo mi control de gastos a Excel cuando lo necesito!&quot;</p>
        <h4 className="text-xl font-semibold text-gray-800">Luis Martínez</h4>
        <p className="text-sm text-gray-500">Estudiante</p>
      </div>
    </div>
  </div>
</section>

    );
}