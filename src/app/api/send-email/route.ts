import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailToClient } from '@/components/emails/email-to-client';
import { EmailToOwner } from '@/components/emails/email-to-owner';

const fromEmail = 'Contacto Harkaysoft <onboarding@harkaysoft.com>'; // ¡REVISA ESTO!
const ownerEmail = 'jhangmez.pe@gmail.com'; 

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  // --- PASO DE DEPURACIÓN ---
  // Esto nos dirá si la variable de entorno se está cargando.
  console.log('Usando Resend API Key:', apiKey ? `${apiKey.substring(0, 5)}...` : '¡¡¡UNDEFINED!!!');
  // -------------------------

  if (!apiKey) {
    console.error('Error: La variable de entorno RESEND_API_KEY no está definida.');
    return NextResponse.json({ error: 'Configuración del servidor incompleta.' }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json({ error: 'Faltan campos requeridos.' }, { status: 400 });
    }

    // Usaremos la desestructuración que muestra la documentación de Resend
    const { data: ownerData, error: ownerError } = await resend.emails.send({
      from: fromEmail,
      to: ownerEmail,
      subject: `Nuevo Mensaje de ${name}: ${subject}`,
      react: EmailToOwner({ name, email, phone, subject, message }),
    });

    // Si hubo un error enviando el correo al dueño, regístralo y retorna el error.
    if (ownerError) {
      console.error('Error al enviar correo al dueño:', ownerError);
      return NextResponse.json({ error: ownerError.message }, { status: 500 });
    }

    const { data: clientData, error: clientError } = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'Confirmación de Contacto - Harkaysoft',
      react: EmailToClient({ username: name }),
    });

    // Si hubo un error enviando el correo al cliente, regístralo y retorna el error.
    if (clientError) {
      console.error('Error al enviar correo al cliente:', clientError);
      return NextResponse.json({ error: clientError.message }, { status: 500 });
    }

    // Si ambos correos se envían, retorna éxito.
    return NextResponse.json({ success: true, message: 'Correos enviados con éxito.' });

  } catch (error: any) {
    console.error('Error general en la API:', error);
    return NextResponse.json({ error: error.message || 'Hubo un error al procesar tu solicitud.' }, { status: 500 });
  }
}