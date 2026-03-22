"use client";

import { ShoppingBasket, Banknote, CalendarSync } from "lucide-react";
import {
  AnimateOnScroll,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animate-on-scroll";

const steps = [
  {
    icon: ShoppingBasket,
    title: "1. Shop Items",
    description:
      "Fill your cart with premium groceries and essential staples from verified vendors.",
    bgClass: "bg-card",
    iconClass: "text-primary",
    rotation: "rotate-6 hover:rotate-0",
  },
  {
    icon: Banknote,
    title: "2. Get Credit",
    description:
      "Checkout with Ounje Credit. Instant approval for verified salary earners.",
    bgClass: "bg-ounje-secondary-container/80",
    iconClass: "text-ounje-on-secondary-fixed",
    rotation: "-rotate-6",
  },
  {
    icon: CalendarSync,
    title: "3. Repay on Payday",
    description:
      "Small, automated deductions when your salary arrives. Zero stress.",
    bgClass: "bg-ounje-primary-container",
    iconClass: "text-ounje-on-primary-container",
    rotation: "rotate-3",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-muted py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <AnimateOnScroll variant="fadeUp">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-16 tracking-tight">
            Your Journey from Field to Table
          </h2>
        </AnimateOnScroll>

        <StaggerContainer className="grid md:grid-cols-3 gap-12 relative">
          {steps.map((step) => (
            <StaggerItem
              key={step.title}
              className="flex flex-col items-center space-y-6 relative z-10"
            >
              <div
                className={`w-20 h-20 rounded-[2rem] ${step.bgClass} shadow-xl flex items-center justify-center ${step.rotation} transition-transform`}
              >
                <step.icon className={`size-9 ${step.iconClass}`} />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
