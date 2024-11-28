import Header from "./components/header/header";
import BeneficiosClave from "./components/beneficios_clave/BeneficiosClave";
import TablaComparativa from "./components/tabla_comparativa/TablaComparativa";
import CaracteristicasPrincipales from "./components/caracteristicas_principales/CaracteristicasPrincipales";
import Reviews from "./components/reviews/Reviews";
import LandingCTA from "./components/LandingCTA/LandingCTA";
import Footer from "./components/footer/Footer";
export default function Home() {
  return (
    <main>
      <Header />
      <BeneficiosClave />
      <TablaComparativa />
      <CaracteristicasPrincipales />
      <Reviews />
      <LandingCTA />
      <Footer />      
    </main>
  );
}
