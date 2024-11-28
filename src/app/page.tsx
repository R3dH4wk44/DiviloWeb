import Header from "./components/header/header";
import BeneficiosClave from "./components/beneficios_clave/BeneficiosClave";
import TablaComparativa from "./components/tabla_comparativa/TablaComparativa";
import CaracteristicasPrincipales from "./components/caracteristicas_principales/CaracteristicasPrincipales";
import Reviews from "./components/reviews/Reviews";
import LandingCTA from "./components/LandingCTA/LandingCTA";
import Footer from "./components/footer/Footer";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Divilo - Simplifique sus gastos</title>
        <meta name="description" content="Divilo es una app de gestión de gastos que te permite dividir tus cuentas con amigos al instante." />
        <meta name="next-size-adjust" content="100vw" />
      </Head>
      <main>
        <Header />
        <BeneficiosClave />
        <TablaComparativa />
        <CaracteristicasPrincipales />
        <Reviews />
        <LandingCTA />
        <Footer />        
      </main>
    </>
  );
}
