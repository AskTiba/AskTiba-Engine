
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left flex-grow px-6">
      <div className="md:w-1/2 animate-fadeIn md:h-full flex flex-col justify-center">
        <h1 className="text-6xl font-bold mb-4">Tony</h1>
        <p className="text-xl text-muted-foreground mb-8">
          A passionate developer building modern web experiences.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <Button asChild>
            <Link href="/portfolio">View My Work</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center items-center md:h-full">
        <Image
          src="/undraw_typing-code_6t2b.svg"
          alt="Typing code illustration"
          width={500}
          height={377}
          className="object-contain"
        />
      </div>
    </section>
  );
}

