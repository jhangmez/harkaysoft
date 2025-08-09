import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface EmailToClientProps {
  username?: string;
}

const logoUrl =
  "https://qh2ensep0f.ufs.sh/f/tJ39KzeM4kyTXoprYY0wxs1icKOyevZ73Hzq48BVanX6PMoI";

export const EmailToClient = ({
  username = "futuro cliente",
}: EmailToClientProps) => {
  const previewText = `Hemos recibido tu mensaje, ${username}!`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[20px]">
              <Img
                src={logoUrl}
                width="160"
                alt="Harkaysoft Logo"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Gracias por contactar con <strong>Harkaysoft</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hola {username},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Hemos recibido tu mensaje y estamos muy emocionados de conocer tu
              proyecto. Uno de nuestros especialistas se pondrá en contacto
              contigo en las próximas 24 horas hábiles.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Mientras tanto, puedes explorar nuestros últimos proyectos en
              nuestro sitio web.
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href="https://harkaysoft.com/#proyectos" // Cambia esto por tu dominio real
              >
                Ver Portafolio
              </Button>
            </Section>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              Este correo fue enviado porque llenaste el formulario de contacto
              en nuestro sitio web.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailToClient;
