import type { Metadata } from "next";
import "./globals.css";

const themeScript = `
  (() => {
    try {
      const saved = localStorage.getItem("cc-theme");
      const preferred = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      document.documentElement.dataset.theme =
        saved === "light" || saved === "dark" ? saved : preferred;
    } catch {
      document.documentElement.dataset.theme = "dark";
    }
  })();
`;

export const metadata: Metadata = {
  title: "Carlos Cerda | Software, IT e Infraestructura",
  description:
    "Portafolio profesional de Carlos Cerda, Ingeniero en Sistemas con experiencia en desarrollo de software, IT, datos, automatización e infraestructura.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
