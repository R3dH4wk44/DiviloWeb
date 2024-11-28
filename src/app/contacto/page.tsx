"use client";

import { useState, useEffect } from "react";
import Head from "next/head";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contacto() {
  const [isClient, setIsClient] = useState(false);

  // Asegúrate de que el contenido solo se renderice en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData: FormData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    console.log(formData);
    // Aquí podrías enviar el formulario a un servicio de API o procesarlo de alguna forma.
  };

  if (!isClient) {
    return null; // Evita la renderización hasta que sea el cliente
  }

  return (
    <>
      <Head>
        <title>Contacto - Divilo</title>
        <meta
          name="description"
          content="Ponte en contacto con el equipo de Divilo para obtener soporte o hacer consultas."
              />
        <meta name="next-size-adjust" content="100vw" />

      </Head>

      <div className="max-w-3xl mx-auto p-6 h-screen flex justify-center items-center">
        <div>
          <h1 className="text-3xl font-bold text-center mb-6">Contáctanos</h1>

          <p className="text-lg mb-6 text-center">
            Si tienes alguna pregunta o necesitas asistencia, no dudes en
            ponerte en contacto con nosotros.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                rows={5}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-emerald-500 text-white font-semibold rounded-md hover:bg-emerald-600 transition"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
