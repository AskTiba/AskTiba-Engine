
import { Resend } from "resend";
import { z } from "zod";
import ContactEmail from "@/components/ContactEmail";



const contactFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = contactFormSchema.parse(body);

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable");
      return new Response(JSON.stringify({ error: "Email service not configured" }), { 
        status: 503,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "anthonyngisiro@gmail.com",
      subject: `New message from ${name}`,
      react: ContactEmail({ name, email, message }),
    });

    return new Response(JSON.stringify({ success: true }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("Contact API Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
