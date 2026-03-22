"use client";

import { Bell, Wheat, CakeSlice } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export function DownloadApp() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <AnimateOnScroll variant="scaleUp">
        <div className="bg-ounje-surface-container-high rounded-[3rem] p-8 md:p-20 flex flex-col md:flex-row items-center gap-12 md:gap-24 relative overflow-hidden">
          {/* Decorative icons */}
          <div className="absolute top-10 right-10 opacity-10 rotate-12 pointer-events-none">
            <Wheat className="size-28 text-primary" />
          </div>
          <div className="absolute bottom-10 left-10 opacity-10 -rotate-12 pointer-events-none">
            <CakeSlice className="size-28 text-primary" />
          </div>

          <AnimateOnScroll variant="fadeLeft" className="flex-1 space-y-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight">
              Your Pantry in Your Pocket.
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-lg">
              Manage your food credit, browse fresh farm harvests, and track your
              deliveries directly from your phone. The Ounje app makes eating well
              easier than ever.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#"
                className="h-[60px] flex items-center gap-3 bg-foreground text-background px-6 rounded-2xl hover:scale-[1.02] transition-transform shadow-xl"
              >
                <svg viewBox="0 0 24 24" className="size-8 fill-current">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="flex flex-col leading-none">
                  <span className="text-[10px] uppercase font-medium opacity-80">
                    Download on the
                  </span>
                  <span className="text-xl font-bold">App Store</span>
                </div>
              </a>

              <a
                href="#"
                className="h-[60px] flex items-center gap-3 bg-foreground text-background px-6 rounded-2xl hover:scale-[1.02] transition-transform shadow-xl"
              >
                <svg viewBox="0 0 24 24" className="size-8 fill-current">
                  <path d="M3.18 23.76c.34.41.85.5 1.31.24l17.02-9.76c.49-.28.49-.97 0-1.25L4.49.23C4.03-.03 3.52.06 3.18.47c-.21.25-.18.41-.18.67v22.08c0 .26-.03.42.18.54zM5 3.18l9.05 8.84L5 20.86V3.18z" />
                </svg>
                <div className="flex flex-col leading-none">
                  <span className="text-[10px] uppercase font-medium opacity-80">
                    Get it on
                  </span>
                  <span className="text-xl font-bold">Google Play</span>
                </div>
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fadeRight" delay={0.3} className="flex-1 relative">
            <div className="relative z-10 bg-ounje-primary-container p-4 rounded-[2.5rem] shadow-2xl rotate-3 max-w-[320px] mx-auto group hover:rotate-0 transition-transform duration-500">
              <div className="bg-card rounded-[2rem] overflow-hidden aspect-[9/19] relative">
                <div className="absolute inset-0 bg-gradient-to-b from-ounje-primary-fixed to-ounje-primary-container" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent flex flex-col justify-end p-6">
                  <div className="bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/40">
                    <p className="text-xs font-bold text-primary uppercase">
                      Market Update
                    </p>
                    <p className="text-sm font-bold text-foreground mt-1">
                      New Yam Harvest Just Arrived!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-ounje-secondary-container p-4 rounded-2xl shadow-xl z-20 -rotate-12">
              <Bell className="size-7 text-white" />
            </div>
          </AnimateOnScroll>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
