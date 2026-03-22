"use client";

import { useState, useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Get the Ounje app",
    description:
      "Download from the App Store or Google Play. Create your account and verify your salary in minutes.",
  },
  {
    number: "02",
    title: "Fill your basket",
    description:
      "Browse grains, proteins, oils, fresh produce, and more — all from verified vendors at bulk prices.",
  },
  {
    number: "03",
    title: "Checkout on credit",
    description:
      "Pay with Ounje Credit. Instant approval for verified salary earners. No paperwork, no hidden fees.",
  },
  {
    number: "04",
    title: "Receive & restock",
    description:
      "Get harvest-speed delivery to your door. Repay automatically when your salary lands. Zero wahala.",
  },
];

const featurePills = [
  "Fresh farm produce",
  "Buy now, pay later",
  "Live delivery tracking",
  "Verified vendors",
  "24/7 support",
  "Quick onboarding",
  "Bulk savings",
  "Salary-backed credit",
];

const phoneNotifications = [
  { title: "Order confirmed!", subtitle: "Your 25kg rice is being packed" },
  { title: "Rider on the way", subtitle: "Arriving in 15 minutes" },
  { title: "Items delivered", subtitle: "Rate your experience" },
  { title: "New harvest alert", subtitle: "Fresh yams just arrived" },
  { title: "Payment received", subtitle: "₦15,000 credit applied" },
];

const STEP_DURATION = 5000;

export function PlaceOrder() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef(Date.now());

  const startTimer = (stepIndex: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setActiveStep(stepIndex);
    setProgress(0);
    startTimeRef.current = Date.now();

    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min((elapsed / STEP_DURATION) * 100, 100);
      setProgress(pct);

      if (elapsed >= STEP_DURATION) {
        const next = (stepIndex + 1) % steps.length;
        startTimer(next);
      }
    }, 50);
  };

  useEffect(() => {
    startTimer(0);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (i: number) => {
    startTimer(i);
  };

  return (
    <section className="bg-primary py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary-foreground tracking-tight mb-16">
          Get started in {steps.length}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Step list */}
          <div className="space-y-2">
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => handleClick(i)}
                className="w-full text-left cursor-pointer"
              >
                <div
                  className={`flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 ${
                    i === activeStep
                      ? "bg-ounje-secondary-container"
                      : "hover:bg-card/5"
                  }`}
                >
                  <span
                    className={`text-sm font-bold shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      i === activeStep
                        ? "bg-primary text-primary-foreground"
                        : "bg-card/10 text-primary-foreground/50"
                    }`}
                  >
                    {step.number}
                  </span>
                  <span
                    className={`text-lg font-bold transition-colors duration-300 ${
                      i === activeStep
                        ? "text-primary"
                        : "text-primary-foreground/70"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>

                {i === activeStep && (
                  <div className="mx-5 mt-1 h-0.5 bg-primary/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{
                        width: `${progress}%`,
                        transition: "width 50ms linear",
                      }}
                    />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Right: Active step content */}
          <div className="bg-ounje-secondary-container rounded-[2.5rem] p-8 md:p-12 min-h-[360px] flex flex-col justify-center relative overflow-hidden">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`transition-opacity duration-500 ${
                  i === activeStep
                    ? "opacity-100"
                    : "opacity-0 absolute inset-0 p-8 md:p-12 pointer-events-none"
                }`}
              >
                <span className="text-7xl font-extrabold text-primary/15">
                  {step.number}
                </span>
                <h3 className="text-3xl md:text-4xl font-extrabold text-primary mt-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-primary/70 text-lg mt-4 leading-relaxed max-w-md">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ounje has you covered */}
        <div className="grid md:grid-cols-2 gap-8 mt-20 items-start">
          <h3 className="text-4xl md:text-5xl font-extrabold text-primary-foreground leading-tight">
            Ounje has<br />you covered
          </h3>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            What do you need? Bulk rice for the month? Last-minute protein
            restock? Supplies for the week? Download Ounje and let&apos;s deliver
            freshness to your doorstep in minutes.
          </p>
        </div>
      </div>

      {/* Scrolling feature pills */}
      <div className="mt-20 overflow-hidden">
        <div className="flex gap-4 animate-marquee">
          {[...featurePills, ...featurePills].map((pill, i) => (
            <span
              key={i}
              className="shrink-0 bg-card/10 border border-primary-foreground/20 text-primary-foreground px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>

      {/* Phone mockups */}
      <div className="mt-12 overflow-hidden py-10">
        <div className="flex items-end gap-6 phone-marquee">
          {[...phoneNotifications, ...phoneNotifications].map((notif, i) => (
            <div
              key={i}
              className={`shrink-0 w-[220px] md:w-[260px] bg-ounje-primary-container rounded-[2rem] p-3 shadow-2xl ${
                i % 2 === 0 ? "" : "-translate-y-10"
              }`}
            >
              <div className="bg-card rounded-[1.5rem] overflow-hidden aspect-[9/19] relative">
                <div className="absolute inset-0 bg-linear-to-b from-ounje-primary-fixed/40 to-ounje-primary-container/60" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur p-3 rounded-xl shadow-lg border border-white/40 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <span className="text-primary-foreground text-[10px] font-bold">
                        O
                      </span>
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold text-primary truncate">
                        {notif.title}
                      </p>
                      <p className="text-[9px] text-muted-foreground truncate">
                        {notif.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
