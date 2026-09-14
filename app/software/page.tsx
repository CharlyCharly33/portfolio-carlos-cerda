import { ArrowLeft } from "lucide-react";
import { QuickProfileProvider } from "../components/quick-profile";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export default function SoftwarePage() {
  return (
    <QuickProfileProvider>
      <SiteHeader />
      <main className="route-placeholder route-software">
        <div>
          <p>01 / SOFTWARE + PRODUCTO</p>
          <h1>Software + Producto</h1>
          <p>El sistema de proyectos será construido en la siguiente etapa.</p>
          <a className="route-back" href="/">
            <ArrowLeft size={17} aria-hidden="true" /> Volver al inicio
          </a>
        </div>
      </main>
      <SiteFooter />
    </QuickProfileProvider>
  );
}
