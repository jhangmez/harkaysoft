import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-pop font-semibold text-lg">Harkaysoft</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Soluciones de software a la medida de tu empresa.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Navegación</h4>
            <ul className="mt-2 space-y-1">
              <li>
                <Link
                  href="#nosotros"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#proyectos"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Legal</h4>
            <ul className="mt-2 space-y-1">
              <li>
                <Link
                  href="/privacidad"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Términos de Servicio
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Harkaysoft. Hecho con ❤️ en
            Chiclayo, Perú.
          </p>
        </div>
      </div>
    </footer>
  );
}
