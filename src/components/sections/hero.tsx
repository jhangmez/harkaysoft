import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="pt-32 pb-20 text-center bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h1 className="font-pop font-bold text-4xl md:text-6xl lg:text-7xl tracking-tighter">
          Desarrollo de Software <br className="hidden md:block" /> a tu Escala
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground tracking-wide">
          En Harkaysoft, transformamos tus ideas en soluciones digitales
          robustas y eficientes. Potenciamos tu negocio con tecnología de
          vanguardia y un equipo comprometido con tu éxito.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#contacto">Inicia tu Proyecto</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#proyectos">Ver Portafolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
