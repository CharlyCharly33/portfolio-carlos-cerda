import { ArrowLeft } from "lucide-react";
import { QuickProfileProvider } from "./quick-profile";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function ProjectPlaceholder({ name }: { name: string }) {
  return (
    <QuickProfileProvider>
      <SiteHeader />
      <main className="project-placeholder">
        <div>
          <p>PLANO EN PREPARACIÓN</p>
          <h1>{name}</h1>
          <p>El caso completo se construirá en la siguiente etapa.</p>
          <a href="/software">
            <ArrowLeft size={17} aria-hidden="true" /> Volver a Software
          </a>
        </div>
      </main>
      <SiteFooter />
    </QuickProfileProvider>
  );
}
