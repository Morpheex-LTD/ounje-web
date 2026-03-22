"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MoveRight } from "lucide-react";
import {
  AnimateOnScroll,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animate-on-scroll";

const categories = {
  proteins: {
    title: "Proteins",
    subtitle: "Beef, Poultry, Fish",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCr9fgE2TdUZzIo_1Qa2_NYkXe4m_XvqHIJV6yNRTD4IRE0u3zIef7fQzFiF2eaHWQeC5zT5ol2wwWGicPKMglXmS_24_BYryy6UpOPfaMCxjDrjeekS3z0Dq-U3ooDWc5VoAATUp7unjYB6rpo8A57AH5ErhE3HuM2atTlEEoNKNaBk4lduC8CCbkAdCW3WvnrT13KfztAVKXTzJKKImlAfasimiKWejfyPK2ePQPNKAAMYuhQOgXKZtXefX4ZIJPhPiwfENpgn_E",
  },
  oilsSpices: {
    title: "Oils & Spices",
    subtitle: "Palm Oil, Maggi, Pepper",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBNx0srmwedDL2HBmvlV9Wil6RssJTj_MGKCk-V9nxlJqSdU3ie-h443GkKnVd_anAPSmS_I_Nbwmr3QCGmTLkgl_nSDc0nYX7VkzbW5rll6t8XMCa3b4EhJDCz3xrZ609ororHeNUhYPalOgpk8PKiKwBaqjb9zkpUTlVPw4nDIiXzPTJPN_KpRcxdPevlZnOij25XpFIpkWjONWdTRtzWBMtPfjJ_tlFms8De187sPid2uM19tZaPGwBF9TYscMwE_5BiLOem95A",
  },
};

export function CategoryGrid() {
  return (
    <section id="categories" className="max-w-7xl mx-auto px-6 py-20">
      <AnimateOnScroll variant="fadeUp">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
              Browse the Harvest
            </h2>
            <p className="text-muted-foreground mt-2 font-medium">
              Curated selections for every Nigerian home.
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Large Card - Grains & Tubers */}
        <StaggerItem className="md:col-span-2 md:row-span-2">
          <div className="bg-card p-8 rounded-2xl shadow-sm border border-border/10 flex flex-col justify-between group cursor-pointer overflow-hidden relative h-full">
            <img
              alt="Grains and tubers"
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhv4u0Pre7IbzDzoncIGC87En3d8DclkZzR4jKjGxjoJuCbCuikacPQEeSId8Of2PHdmodGCemg5qbo0dSFIo7KjJl-KB-6sgU5DNcwWZa4zXqNDLCRvbjallEJTZR6Vd4GVun4CDUMBF7rDgDuYy5B0r4cAedtVrPBRTLOUT5oW8utQDA9FFGh7HeMP7LAy4d_N5KRatQDTpmwYM1PLN8yOTrI8HxMrVirNxrooxscLP-xrjZMUlAwobqP_ZtE5QqR6yUwhmdCNI"
            />
            <div className="relative z-10">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                Essential
              </span>
              <h3 className="text-3xl font-extrabold text-primary mt-4">
                Grains & Tubers
              </h3>
              <p className="text-muted-foreground mt-2 max-w-xs">
                The foundation of every meal. Rice, Yam, Garri and more.
              </p>
            </div>
            <div className="relative z-10 mt-8 flex items-center gap-2 text-primary font-bold">
              Shop Now
              <ArrowRight className="size-4" />
            </div>
          </div>
        </StaggerItem>

        {/* Protein Card */}
        <StaggerItem>
          <div className="bg-ounje-secondary-container/80 p-6 rounded-2xl shadow-sm flex flex-col justify-between group cursor-pointer h-64 overflow-hidden relative">
            <img
              alt="Fresh Proteins"
              className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-110 transition-transform duration-700"
              src={categories.proteins.image}
            />
            <div className="relative z-10">
              <h3 className="text-xl font-extrabold text-ounje-on-secondary-fixed">
                {categories.proteins.title}
              </h3>
            </div>
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-ounje-on-secondary-fixed font-medium">
                {categories.proteins.subtitle}
              </span>
              <MoveRight className="size-5 text-ounje-on-secondary-fixed" />
            </div>
          </div>
        </StaggerItem>

        {/* Oils & Spices Card */}
        <StaggerItem>
          <div className="bg-ounje-tertiary-fixed p-6 rounded-2xl shadow-sm flex flex-col justify-between group cursor-pointer h-64 overflow-hidden relative">
            <img
              alt="Spices and Oils"
              className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-110 transition-transform duration-700"
              src={categories.oilsSpices.image}
            />
            <div className="relative z-10">
              <h3 className="text-xl font-extrabold text-ounje-on-tertiary-fixed">
                {categories.oilsSpices.title}
              </h3>
            </div>
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-ounje-on-tertiary-fixed font-medium">
                {categories.oilsSpices.subtitle}
              </span>
              <MoveRight className="size-5 text-ounje-on-tertiary-fixed" />
            </div>
          </div>
        </StaggerItem>

        {/* Fresh Produce Card */}
        <StaggerItem className="md:col-span-2">
          <div className="bg-ounje-primary-container p-8 rounded-2xl shadow-sm flex flex-col md:flex-row justify-between items-center gap-6 group cursor-pointer">
            <div className="text-left flex-1">
              <h3 className="text-2xl font-extrabold text-ounje-on-primary-container">
                Fresh Produce
              </h3>
              <p className="text-ounje-on-primary-container/80 mt-2">
                Farm-to-table vegetables and fruits delivered at peak freshness.
              </p>
              <Button className="mt-6 bg-card text-primary px-6 py-2 rounded-xl font-bold hover:bg-card/90">
                Explore Market
              </Button>
            </div>
            <img
              alt="Fresh Vegetables"
              className="w-40 h-40 object-cover rounded-2xl shadow-lg rotate-3 group-hover:rotate-0 transition-transform"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmcw5uuq6qHghau81QqFcV8xINNrWRVCMKmBVq-g6HRIgVY-FyuoW2a91ffJOs5p_Wkqo3fQfQmo4UgoWu2HYWNY5iFmISxdCjIIy3yQLGQasUb112WU4xapvN3X56PvO_067CV3dU4enx9Ox_Bmvbgm9bkwdhXvu3f6XOtFHpr1kNaRqiuGkEjm7RDpAu8sUWmL1Vs8N0IYKjLnjPl5BUtwiS-v8j17gAl_3-KxPEZu_xmjjktzu9C-ONDxD1iCQ5JJM1iA7eG0Q"
            />
          </div>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}
