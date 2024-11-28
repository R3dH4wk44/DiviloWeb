import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Política de Privacidad - Divilo</title>
        <meta name="description" content="Política de privacidad de Divilo. Información sobre el manejo de tus datos." />
      </Head>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Política de Privacidad</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Introducción</h2>
          <p>
            En <strong>Divilo</strong>, valoramos y respetamos tu privacidad. Esta política de privacidad describe
            cómo recopilamos, utilizamos y protegemos tus datos personales cuando utilizas nuestra aplicación y sitio web.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Información que Recopilamos</h2>
          <p>
            Recopilamos la siguiente información cuando usas nuestra aplicación o sitio web:
          </p>
          <ul className="list-disc pl-6">
            <li>Datos de contacto, como tu nombre y correo electrónico.</li>
            <li>Información sobre cómo usas nuestra aplicación, como datos de transacciones y preferencias.</li>
            <li>Datos de ubicación si has permitido el acceso a la ubicación en tu dispositivo.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Uso de la Información</h2>
          <p>
            Usamos la información que recopilamos para los siguientes propósitos:
          </p>
          <ul className="list-disc pl-6">
            <li>Proporcionar y mejorar nuestros servicios.</li>
            <li>Comunicarte con respecto a actualizaciones, soporte y otras necesidades de servicio.</li>
            <li>Realizar análisis y estudios para mejorar nuestra aplicación y experiencia de usuario.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Protección de Datos</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos personales contra el acceso no autorizado, la alteración, divulgación o destrucción.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Derechos del Usuario</h2>
          <p>
            Tienes los siguientes derechos sobre tus datos personales:
          </p>
          <ul className="list-disc pl-6">
            <li>Acceder a los datos personales que tenemos sobre ti.</li>
            <li>Solicitar la corrección de datos inexactos o incompletos.</li>
            <li>Solicitar la eliminación de tus datos personales en determinadas circunstancias.</li>
            <li>Optar por no recibir comunicaciones de marketing directo.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Cookies</h2>
          <p>
            Utilizamos cookies para mejorar la experiencia de usuario en nuestro sitio web. Las cookies son pequeños archivos que se almacenan en tu dispositivo y nos permiten recordar tus preferencias y comportamientos de navegación.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Cambios en esta Política</h2>
          <p>
            Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Cualquier cambio será publicado en esta página con la fecha de revisión actualizada.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Contacto</h2>
          <p>
            Si tienes preguntas o inquietudes acerca de nuestra política de privacidad, no dudes en contactarnos a través de nuestro correo electrónico: <strong>contacto@divilo.com</strong>.
          </p>
        </section>
      </div>
    </>
  );
}
