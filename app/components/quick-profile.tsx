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
              <h2 id="profile-dialog-title">CARLOS ALBERTO CERDA SIERRA</h2>
              <p className="profile-degree">Ingeniería en Sistemas Computacionales</p>
            </div>

            <dl className="profile-facts">
              <div>
                <dt>Perfil híbrido</dt>
                <dd>Software · IT · Datos · Infraestructura</dd>
              </div>
              <div>
                <dt>Experiencia</dt>
                <dd>Esoft<br />TE Connectivity</dd>
              </div>
              <div>
                <dt>Enfoque</dt>
                <dd>
                  Analizar, conectar y construir soluciones que funcionen en
                  situaciones reales.
                </dd>
              </div>
            </dl>

            <div className="profile-dialog-actions">
              <a className="action action-software" href="/software">
                Explorar Software <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a className="action action-systems" href="/sistemas">
                Explorar Sistemas <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a className="dialog-secondary" href={githubUrl} target="_blank" rel="noreferrer">
                GitHub <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <a className="dialog-secondary" href={linkedinUrl} target="_blank" rel="noreferrer">
                LinkedIn <ArrowUpRight size={15} aria-hidden="true" />
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
