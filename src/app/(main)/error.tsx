"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Opcional: Puedes registrar el error en un servicio de monitoreo
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen flex-col items-center justify-center text-center bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-pop text-3xl font-bold">¡Ups! Algo salió mal</h2>
        <p className="mt-4 text-muted-foreground tracking-wide">
          Parece que hemos encontrado un error inesperado. Puedes intentar
          recargar la página.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button onClick={() => reset()} size="lg">
            Intentar de nuevo
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/">Volver al Inicio</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
