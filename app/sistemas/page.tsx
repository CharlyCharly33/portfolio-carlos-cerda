import { ArrowLeft } from "lucide-react";
import { QuickProfileProvider } from "../components/quick-profile";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export default function SystemsPage() {
  return (
    <QuickProfileProvider>
      <SiteHeader />
      <main className="route-placeholder route-systems">
        <div>
          <p>02 / IT + SISTEMAS</p>
          <h1>IT + Sistemas</h1>
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
