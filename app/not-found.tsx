import type { Metadata } from "next";
import Link from "next/link";
import { QuickProfileProvider } from "./components/quick-profile";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

export const metadata: Metadata = {
  title: "Ruta no encontrada | Carlos Cerda",
  description: "La página solicitada no existe dentro del portafolio de Carlos Cerda.",
};

export default function NotFound() {
  return (
    <QuickProfileProvider>
      <SiteHeader />
      <main className="not-found">
        <div>
          <p>ERROR 404 / RUTA NO ENCONTRADA</p>
          <h1>Esta ruta no forma parte del plano.</h1>
          <p>
            La página que buscas no existe o cambió de ubicación. Puedes regresar al inicio o
            continuar explorando el portafolio.
          </p>
          <nav aria-label="Navegación de error">
            <Link href="/">Volver al inicio</Link>
            <Link href="/software">Explorar Software</Link>
            <Link href="/sistemas">Explorar Sistemas</Link>
          </nav>
        </div>
      </main>
      <SiteFooter />
    </QuickProfileProvider>
  );
}
