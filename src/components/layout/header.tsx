"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X } from "lucide-react";

// Asumo que tienes estos componentes ya creados
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/toggle-mode"; // Asegúrate de que esta ruta es correcta

const navItems = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proyectos", href: "#proyectos" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  const logoSrc =
    theme === "dark"
      ? "/logos/harkaysoft-light.webp" // Logo claro para fondo oscuro
      : "/logos/harkaysoft-dark.webp"; // Logo oscuro para fondo claro

  return (
    <header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo - Oculto en móvil para centrar el otro */}
        <div className="hidden md:flex">
          <Link href="/" className="flex items-center">
            <img
              src={logoSrc}
              alt="Harkaysoft Logo"
              width="180"
              height="42"
              loading="eager"
            />
          </Link>
        </div>

        {/* Menú de Navegación para Escritorio */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Logo Centrado y Botón de Menú para Móvil */}
        <div className="md:hidden flex-1 flex justify-center">
          <Link href="/" className="flex items-center">
            <img
              src={logoSrc}
              alt="Harkaysoft Logo"
              width="160"
              height="37"
              loading="eager"
            />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <Button asChild>
              <Link href="/contacto">Contáctanos</Link>
            </Button>
          </div>
          <ThemeToggle />
          <div className="md:hidden">
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="outline"
              size="icon"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Menú desplegable para móvil */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-center font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="w-full mt-2">
              <Link href="#contacto" onClick={() => setIsMenuOpen(false)}>
                Contáctanos
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
