"use client";

import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] overflow-hidden flex flex-col items-center">
      <Image
        src="/images/hero-illustration-main.png"
        alt="Ounje hero illustration"
        fill
        className="object-cover object-top after:absolute after:inset-0 after:bg-background/50 after:z-0"
        priority
        unoptimized
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl pt-12 md:pt-32">
        <AnimateOnScroll variant="fadeDown" duration={0.8}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-black leading-[1.05] tracking-tight drop-shadow-sm">
            The Smart Way to <span className="text-secondary">Stock</span> Your
            Pantry.
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Button className="signature-gradient text-primary-foreground h-14 px-10 rounded-2xl font-bold text-lg hover:scale-[0.98] transition-transform shadow-lg shadow-primary/10">
              Download on Google Play
            </Button>
            <Button
              variant="outline"
              className="h-14 px-10 rounded-2xl font-bold text-lg text-primary border-border/20 bg-card/80 backdrop-blur-sm hover:bg-card"
            >
              Download on App Store
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
