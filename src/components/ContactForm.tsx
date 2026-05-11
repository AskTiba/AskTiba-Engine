"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";

const formSchema = z.z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Failed to send message");

      toast.success("Message sent successfully! I'll get back to you soon.");
      form.reset();
    } catch {
      toast.error("Something went wrong. Please try again later or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground font-mono text-xs uppercase tracking-widest">Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="John Doe" 
                    className="glass-card border-border/50 focus:border-electric/50 transition-colors bg-background/50 h-12" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground font-mono text-xs uppercase tracking-widest">Email</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="john@example.com" 
                    className="glass-card border-border/50 focus:border-electric/50 transition-colors bg-background/50 h-12" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-400" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground font-mono text-xs uppercase tracking-widest">Subject</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Inquiry about project..." 
                  className="glass-card border-border/50 focus:border-electric/50 transition-colors bg-background/50 h-12" 
                  {...field} 
                />
              </FormControl>
              <FormMessage className="text-xs text-red-400" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground font-mono text-xs uppercase tracking-widest">Message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="How can I help you?" 
                  className="glass-card border-border/50 focus:border-electric/50 transition-colors bg-background/50 min-h-[150px] resize-none" 
                  {...field} 
                />
              </FormControl>
              <FormMessage className="text-xs text-red-400" />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full h-12 bg-electric hover:bg-electric-light text-white transition-colors gap-2 group"
        >
          {isSubmitting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              Send Message
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};
