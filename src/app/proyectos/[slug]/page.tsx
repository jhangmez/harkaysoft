import { notFound } from "next/navigation";
import Link from "next/link";
import proyectos from "@/data/proyectos.json";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

// 1. El tipo de 'Props' ahora debe reflejar que 'params' es una Promise.
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

// Función para obtener los datos del proyecto (se mantiene igual)
function getProjectData(slug: string) {
  const project = proyectos.find((p) => p.url === slug);
  return project;
}

// 2. La función 'generateMetadata' ahora es `async` y debe usar `await` para obtener los params.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // Se resuelve la Promise
  const project = getProjectData(slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado",
      description: "La página que buscas no existe.",
    };
  }

  return {
    title: `${project.nombre} | Harkaysoft`,
    description: project.descripcion,
  };
}

// La función generateStaticParams se mantiene igual
export async function generateStaticParams() {
  return proyectos.map((proyecto) => ({
    slug: proyecto.url,
  }));
}

// 3. El componente de página AHORA DEBE SER `async`.
export default async function ProjectPage({ params }: Props) {
  // 4. Usamos `await` para resolver la Promise y obtener el slug.
  const { slug } = await params;
  const project = getProjectData(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="pt-20">
      <div className="relative h-64 md:h-96 w-full">
        <img
          src={project.imagen_banner}
          alt={`Banner de ${project.nombre}`}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
          <h1 className="font-pop font-bold text-4xl md:text-6xl text-white text-center tracking-tighter">
            {project.nombre}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-pop font-semibold text-2xl mb-4">
              Descripción del Proyecto
            </h2>
            <p className="text-muted-foreground leading-relaxed tracking-wide">
              {project.descripcion}
            </p>
          </div>
          <div>
            <div className="border rounded-lg p-6 bg-card">
              <h3 className="font-pop font-semibold text-xl mb-4">
                Características Clave
              </h3>
              <ul className="space-y-3">
                {project.caracteristicas.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full mt-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visitar Sitio Web <ArrowUpRight className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <Button asChild variant="outline">
            <Link href="/#proyectos"> &larr; Volver a Proyectos</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
