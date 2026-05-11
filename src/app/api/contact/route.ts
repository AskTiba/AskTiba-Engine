
import { Resend } from "resend";
import { z } from "zod";
import ContactEmail from "@/components/ContactEmail";

// Initialize Resend inside the POST handler to avoid build-time errors when API key is missing
const getResend = () => new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = contactFormSchema.parse(body);

    const resend = getResend();
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "anthonyngisiro@gmail.com", // Updated to your real email
      subject: `New message from ${name}`,
      react: ContactEmail({ name, email, message }),
    });

    return new Response(null, { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(null, { status: 500 });
  }
}
