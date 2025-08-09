import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface EmailToOwnerProps {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const EmailToOwner = ({
  name,
  email,
  phone,
  subject,
  message,
}: EmailToOwnerProps) => {
  const previewText = `Nuevo mensaje de ${name}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="bg-white border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Nueva Consulta desde la Web
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Has recibido un nuevo mensaje a través del formulario de contacto.
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Section>
              <Text className="text-[14px] leading-[20px]">
                <strong>Nombre:</strong> {name}
              </Text>
              <Text className="text-[14px] leading-[20px]">
                <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
              </Text>
              <Text className="text-[14px] leading-[20px]">
                <strong>Teléfono:</strong> {phone}
              </Text>
              <Text className="text-[14px] leading-[20px]">
                <strong>Asunto:</strong> {subject}
              </Text>
              <Hr className="border border-solid border-[#eaeaea] my-[16px] mx-0 w-full" />
              <Text className="text-[14px] leading-[24px]">
                <strong>Mensaje:</strong>
              </Text>
              <Text className="bg-gray-50 p-4 rounded-md text-black text-[14px] leading-[24px]">
                {message}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailToOwner;
