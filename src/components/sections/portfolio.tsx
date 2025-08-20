import Link from "next/link";
import proyectos from "@/data/proyectos.json";
import { Proyecto } from "@/types/proyectos";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Asegúrate de que la ruta es correcta
import { Badge } from "@/components/ui/badge"; // Importa el componente Badge

export function Portfolio() {
  let proyectosData: Proyecto[] = proyectos as Proyecto[];

  try {
    proyectosData = proyectos;
  } catch (error) {
    console.error("Error al cargar los proyectos:", error);
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
              className="group block"
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={proyecto.imagen_banner}
                    alt={`Banner del proyecto ${proyecto.nombre}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* Badge "NUEVO" condicional */}
                  {proyecto.esNuevo && (
                    <Badge className="absolute top-2 right-2 bg-primary/80 text-primary-foreground">
                      NUEVO
                    </Badge>
                  )}
                </div>

                <div className="flex flex-col flex-grow">
                  <CardHeader>
                    <CardTitle className="font-pop font-semibold text-xl">
                      {proyecto.nombre}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground line-clamp-2 tracking-wide">
                      {proyecto.descripcion}
                    </p>
                  </CardContent>

                  <CardFooter>
                    <span className="text-sm font-medium text-primary group-hover:underline pt-2">
                      Ver detalles del proyecto &rarr;
                    </span>
                  </CardFooter>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
