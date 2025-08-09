"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        // Si la respuesta del servidor no es exitosa, lanza un error
        throw new Error("Error en la respuesta del servidor.");
      }

      // Si todo va bien...
      toast.success("Mensaje enviado correctamente", {
        description:
          "Gracias por tu mensaje. Te hemos enviado una confirmación por correo.",
      });
      event.currentTarget.reset(); // Limpia el formulario
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      toast.error("Error al enviar el mensaje", {
        description:
          "Por favor, inténtalo de nuevo o contáctanos por otro medio.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-background">
      <div className="container mx-auto px-4 py-24 sm:py-32">
        <div className="text-center mb-16">
          <h1 className="font-pop font-bold text-4xl md:text-5xl tracking-tighter">
            Hablemos de tu Proyecto
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground tracking-wide">
            ¿Tienes una idea o necesitas una solución digital? Completa el
            formulario o contáctanos directamente. Estamos listos para ayudarte
            a construir el futuro de tu negocio.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 lg:mt-4">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-xl">Correo Electrónico</h3>
                <p className="text-muted-foreground tracking-wide mt-1">
                  La mejor forma de enviarnos detalles sobre tu proyecto.
                </p>
                <a
                  href="mailto:jhangmez.pe@gmail.com"
                  className="text-primary font-medium hover:underline mt-2 inline-block"
                >
                  jhangmez.pe@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-xl">Ubicación</h3>
                <p className="text-muted-foreground tracking-wide mt-1">
                  Nuestra base de operaciones.
                </p>
                <p className="font-medium mt-2">Chiclayo, Perú</p>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre Completo</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Tu nombre"
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Número de Teléfono</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Ej: 911 111 321"
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Asunto</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Ej: Cotización de una app móvil"
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  required
                  rows={5}
                  disabled={isLoading}
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar Mensaje"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
