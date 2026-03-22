"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const faqs = [
  {
    question: "What is Ounje Credit?",
    answer:
      "Ounje Credit is our specialized \"Buy Now, Pay Later\" solution designed exclusively for Nigerian salary earners. It allows you to purchase essential food staples and bulk groceries today, while spreading the payment until your next payday. It's our way of ensuring every home remains stocked without financial strain.",
  },
  {
    question: "How do I qualify for Ounje Credit?",
    answer:
      "To qualify, you need to be a verified salary earner in Nigeria. During sign-up, you'll provide basic details like your work information and BVN. Our automated system verifies your status almost instantly, giving you a credit limit tailored to your income level.",
  },
  {
    question: "What are the repayment terms?",
    answer:
      "Repayments are designed to be stress-free. Payments are typically deducted automatically from your account once your salary is credited. We offer transparent, flat-rate service fees with no hidden interest spikes, ensuring you know exactly what you're paying from day one.",
  },
  {
    question: "What are the typical delivery times?",
    answer:
      "We pride ourselves on \"Harvest-Speed\" delivery. For orders within major cities like Lagos, Abuja, and Port Harcourt, you can expect your delivery within 24 to 48 hours. Fresh produce is sourced and dispatched daily to ensure maximum shelf life in your pantry.",
  },
];

export function FAQSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-5 gap-16">
        {/* Left Sidebar */}
        <AnimateOnScroll variant="fadeLeft" className="md:col-span-2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Everything you need to know about the Ounje harvest credit system
            and our farm-to-table delivery.
          </p>
          <div className="bg-ounje-secondary-fixed p-6 rounded-2xl border border-secondary/20">
            <p className="font-bold text-ounje-on-secondary-fixed">
              Still have questions?
            </p>
            <p className="text-ounje-on-secondary-fixed/80 text-sm mt-1">
              Chat with our harvest support team today.
            </p>
            <Button className="mt-4 bg-secondary text-secondary-foreground px-6 py-2 rounded-xl font-bold text-sm">
              Contact Support
            </Button>
          </div>
        </AnimateOnScroll>

        {/* Accordion */}
        <AnimateOnScroll variant="fadeRight" delay={0.2} className="md:col-span-3">
          <Accordion defaultValue={[0]}>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={index}
                className="bg-card rounded-2xl border border-border/10 mb-4 px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-xl font-bold py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
