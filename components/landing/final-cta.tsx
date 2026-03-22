"use client";

import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export function FinalCTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <AnimateOnScroll variant="scaleUp">
        <div className="signature-gradient rounded-[2.5rem] p-8 md:p-16 text-center text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32" />

          <AnimateOnScroll variant="fadeUp" delay={0.2}>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 relative z-10 tracking-tight">
              Start Your Harvest Today
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fadeUp" delay={0.4}>
            <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed">
              Join thousands of Nigerians stocking their homes with ease. Your
              pantry deserves the best.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fadeUp" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Button className="bg-secondary text-secondary-foreground h-16 px-12 rounded-2xl font-extrabold text-xl shadow-xl hover:scale-105 transition-transform">
                Create Free Account
              </Button>
              <Button
                variant="ghost"
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white h-16 px-12 rounded-2xl font-bold text-xl hover:bg-white/20"
              >
                Contact Sales
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
