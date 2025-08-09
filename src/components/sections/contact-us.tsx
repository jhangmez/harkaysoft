import { Button } from "@/components/ui/button";

export function ContactUs() {
  return (
    <section id="contacto" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-pop font-bold text-3xl md:text-4xl">
          ¿Listo para Empezar?
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
          Hablemos sobre tu próximo gran proyecto. Estamos aquí para ayudarte a
          encontrar la mejor solución tecnológica.
        </p>
        <Button asChild size="lg" className="mt-8">
          <a href="mailto:jhangmez.pe@gmail.com">Contáctanos por Email</a>
        </Button>
      </div>
    </section>
  );
}
