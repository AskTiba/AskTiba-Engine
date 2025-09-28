
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center text-center h-[calc(100vh-8rem)]">
      <h1 className="text-5xl font-bold mb-4">Tony</h1>
      <p className="text-xl text-muted-foreground mb-8">
        A passionate developer building modern web experiences.
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/portfolio">View My Work</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </section>
  );
}

