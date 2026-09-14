import { ArrowLeft, FileClock } from "lucide-react";
import { MotionEffects } from "../motion-effects";
import { QuickProfileProvider } from "./quick-profile";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function CasePlaceholder({ name, context }: { name: string; context: string }) {
  return (
    <QuickProfileProvider>
      <div className="case-placeholder">
        <SiteHeader />
        <main>
          <div className="case-placeholder-panel reveal">
            <FileClock size={32} strokeWidth={1.3} aria-hidden="true" />
            <p>DOSSIER EN PREPARACIÓN / {context}</p>
            <h1>{name}</h1>
            <p>La vista completa se documentará en una siguiente etapa. El resumen público ya está disponible en el explorador de Sistemas.</p>
            <a href="/sistemas#systems-cases"><ArrowLeft size={17} aria-hidden="true" /> Volver a Sistemas</a>
          </div>
        </main>
        <SiteFooter />
        <MotionEffects />
      </div>
    </QuickProfileProvider>
  );
}
