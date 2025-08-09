import { Hero } from "@/components/sections/hero";
import { Portfolio } from "@/components/sections/portfolio";
import { ContactUs } from "@/components/sections/contact-us";
import { ComingSoon } from "@/components/sections/coming-soon";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Portfolio />
        <ContactUs />
        <ComingSoon />
      </main>
    </>
  );
}
