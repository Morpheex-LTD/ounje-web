"use client";

import { Globe, Share2 } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const footerLinks = [
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Support", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "FAQ", href: "#" },
];

const socialLinks = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: Share2, href: "#", label: "Share" },
];

export function Footer() {
  return (
    <footer className="w-full rounded-t-[2rem] mt-12 bg-ounje-surface-container-high">
      <AnimateOnScroll variant="fadeUp">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 gap-6 max-w-7xl mx-auto">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold text-primary">Ounje</span>
            <p className="text-muted-foreground text-sm text-center md:text-left">
              &copy; 2024 Ounje Credit Marketplace. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all"
                aria-label={social.label}
              >
                <social.icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </footer>
  );
}
