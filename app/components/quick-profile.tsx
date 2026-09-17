"use client";

import { ArrowUpRight, X } from "lucide-react";
import {
  createContext,
  type ReactNode,
  useContext,
  useRef,
} from "react";

const githubUrl = "https://github.com/CharlyCharly33";
const linkedinUrl =
  "https://www.linkedin.com/in/carlos-alberto-cerda-sierra-266604256/";

const QuickProfileContext = createContext<(() => void) | null>(null);

export function QuickProfileProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  function openProfile() {
    triggerRef.current = document.activeElement as HTMLElement | null;
    dialogRef.current?.showModal();
  }

  function closeProfile() {
    dialogRef.current?.close();
  }

  function restoreFocus() {
    triggerRef.current?.focus();
  }

  return (
    <QuickProfileContext.Provider value={openProfile}>
      {children}
      <dialog
        className="profile-dialog"
        ref={dialogRef}
        aria-labelledby="profile-dialog-title"
        onClose={restoreFocus}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeProfile();
        }}
      >
        <div className="profile-dialog-panel">
          <header className="profile-dialog-header">
            <p>PERFIL / 60 SEGUNDOS</p>
            <button
              className="dialog-close"
              type="button"
              onClick={closeProfile}
              aria-label="Cerrar perfil rápido"
              autoFocus
            >
              <X size={18} aria-hidden="true" />
            </button>
          </header>

          <div className="profile-dialog-content">
            <div>
              <h2 id="profile-dialog-title">CARLOS CERDA</h2>
              <p className="profile-degree">Estudiante de Ingeniería en Sistemas Computacionales con experiencia en Software + Producto e IT + Sistemas.</p>
              <p className="profile-location">Querétaro, México</p>
            </div>

            <section aria-labelledby="profile-education-title">
              <h3 id="profile-education-title">FORMACIÓN</h3>
              <p>Ingeniería en Sistemas Computacionales<br />UVM<br />En curso</p>
            </section>

            <section aria-labelledby="profile-experience-title">
              <h3 id="profile-experience-title">EXPERIENCIA</h3>
              <dl className="profile-facts">
                <div>
                  <dt>Actualmente</dt>
                  <dd>eSoft<br />Experiencia profesional en Software</dd>
                </div>
                <div>
                  <dt>1 año</dt>
                  <dd>TE Connectivity<br />Intern RSD/IT</dd>
                </div>
              </dl>
            </section>

            <section aria-labelledby="profile-areas-title">
              <h3 id="profile-areas-title">DOS ÁREAS</h3>
              <div className="profile-areas">
                <article>
                  <h4>SOFTWARE + PRODUCTO</h4>
                  <ul>
                    <li>Aplicaciones web</li>
                    <li>Interfaces</li>
                    <li>APIs y datos</li>
                    <li>Arquitectura de producto</li>
                    <li>Experiencia de usuario</li>
                  </ul>
                </article>
                <article>
                  <h4>IT + SISTEMAS</h4>
                  <ul>
                    <li>Soporte y operación IT</li>
                    <li>Dispositivos e identidad</li>
                    <li>Redes y servicios</li>
                    <li>Dashboards</li>
                    <li>Automatización</li>
                  </ul>
                </article>
              </div>
            </section>

            <section aria-labelledby="profile-method-title">
              <h3 id="profile-method-title">FORMA DE TRABAJO</h3>
              <p>Entender el contexto, separar el problema por capas, construir una solución verificable y documentar lo necesario para mantenerla.</p>
            </section>

            <section aria-labelledby="profile-work-title">
              <h3 id="profile-work-title">TRABAJO DESTACADO</h3>
              <ul className="profile-work">
                <li><a href="/proyectos/kivonex"><strong>KIVONEX</strong><span>Producto full stack</span></a></li>
                <li><a href="/proyectos/habittrack"><strong>HABITTRACK</strong><span>Experiencia web</span></a></li>
                <li><a href="/casos/it-support"><strong>IT SUPPORT</strong><span>Operación y soporte</span></a></li>
                <li><a href="/casos/automatizacion"><strong>AUTOMATIZACIÓN + OCR</strong><span>Prototipo funcional</span></a></li>
              </ul>
            </section>

            <div className="profile-dialog-actions">
              <a className="action action-software" href="/software">
                Explorar Software + Producto <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a className="action action-systems" href="/sistemas">
                Explorar IT + Sistemas <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a className="dialog-secondary" href={githubUrl} target="_blank" rel="noreferrer">
                GitHub <ArrowUpRight size={15} aria-hidden="true" />
                <span className="sr-only">(se abre en otra pestaña)</span>
              </a>
              <a className="dialog-secondary" href={linkedinUrl} target="_blank" rel="noreferrer">
                LinkedIn <ArrowUpRight size={15} aria-hidden="true" />
                <span className="sr-only">(se abre en otra pestaña)</span>
              </a>
              <button className="dialog-text-close" type="button" onClick={closeProfile}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </QuickProfileContext.Provider>
  );
}

export function QuickProfileTrigger({
  className,
  children = "Perfil rápido",
}: {
  className?: string;
  children?: ReactNode;
}) {
  const openProfile = useContext(QuickProfileContext);

  if (!openProfile) {
    throw new Error("QuickProfileTrigger must be used inside QuickProfileProvider");
  }

  return (
    <button className={className} type="button" onClick={openProfile}>
      {children}
    </button>
  );
}
