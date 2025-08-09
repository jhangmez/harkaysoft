import Link from "next/link";
import proyectos from "@/data/proyectos.json";
import { Proyecto } from "@/types/proyectos";

export function Portfolio() {
  let proyectosData: Proyecto[] = proyectos as Proyecto[];
  try {
    // Intentamos cargar los proyectos. Si el JSON está vacío o malformado, el catch lo manejará.
    proyectosData = proyectos;
  } catch (error) {
    console.error("Error al cargar los proyectos:", error);
    // proyectosData se mantiene como un array vacío.
  }

  // Condición: si no hay proyectos, muestra un mensaje de "Próximamente".
  if (!proyectosData || proyectosData.length === 0) {
    return (
      <section id="proyectos" className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-pop font-bold text-3xl md:text-4xl">
            Nuestros Proyectos Recientes
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground tracking-wide">
            Estamos preparando nuestro portafolio con los mejores casos de
            éxito. ¡Vuelve pronto!
          </p>
          <div className="mt-8 h-64 flex items-center justify-center bg-gray-100 dark:bg-gray-800/50 rounded-lg">
            <p className="font-semibold text-muted-foreground">
              Próximamente...
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Si hay proyectos, muestra el grid.
  return (
    <section id="proyectos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-pop font-bold text-3xl md:text-4xl">
            Nuestros Proyectos Recientes
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground tracking-wide">
            Casos de éxito que demuestran nuestra capacidad para entregar
            resultados excepcionales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectosData.map((proyecto) => (
            <Link
              href={`/proyectos/${proyecto.url}`}
              key={proyecto.id}
              className="group block overflow-hidden rounded-lg border hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                {/* Se usa <img> con object-cover para llenar el contenedor y loading="lazy" para optimizar la carga */}
                <img
                  src={proyecto.imagen_banner}
                  alt={`Banner del proyecto ${proyecto.nombre}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6 bg-card">
                <h3 className="font-pop font-semibold text-xl">
                  {proyecto.nombre}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2 tracking-wide">
                  {proyecto.descripcion}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-primary group-hover:underline">
                  Ver detalles del proyecto &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
