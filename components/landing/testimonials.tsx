"use client";

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Star, ShieldCheck, Lock, Truck } from "lucide-react";
import {
  AnimateOnScroll,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animate-on-scroll";

const testimonials = [
  {
    quote:
      "Ounje saved my family this month. With school fees and rent due, the credit option meant we didn't have to compromise on food.",
    name: "Adesuwa A.",
    role: "Civil Servant, Lagos",
    initials: "AA",
  },
  {
    quote:
      "The delivery is so fast and the rice quality is premium. I love that I can buy in bulk and pay slowly.",
    name: "Chinedu O.",
    role: "Banker, Abuja",
    initials: "CO",
  },
  {
    quote:
      "Finally, a service that understands the Nigerian salary earner. Transparent rates and great customer support.",
    name: "Fatima T.",
    role: "Educator, Kaduna",
    initials: "FT",
  },
];

const trustBadges = [
  { icon: ShieldCheck, label: "CBN Compliant" },
  { icon: Lock, label: "Bank-Grade Security" },
  { icon: Truck, label: "Fast Home Delivery" },
];

function StarRating() {
  return (
    <div className="flex gap-1 text-secondary mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-secondary" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <AnimateOnScroll variant="fadeUp">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
            Voices of the Harvest
          </h2>
        </div>
      </AnimateOnScroll>

      <StaggerContainer className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <StaggerItem key={t.name}>
            <Card className="bg-card border-border/10 shadow-sm rounded-2xl">
              <CardContent className="pt-8">
                <StarRating />
                <p className="text-foreground text-lg leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </CardContent>
              <CardFooter className="bg-transparent border-0 px-4 pb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-primary">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Trust Badges */}
      <AnimateOnScroll variant="fadeIn" delay={0.3}>
        <div className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-60">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all"
            >
              <badge.icon className="size-7" />
              <span className="font-bold">{badge.label}</span>
            </div>
          ))}
        </div>
      </AnimateOnScroll>
    </section>
  );
}
