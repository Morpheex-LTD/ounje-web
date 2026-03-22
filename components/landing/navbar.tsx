"use client";

import { Button } from "@/components/ui/button";
import { Menu, ShoppingBag, User, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Company", href: "#" },
  { label: "Vendors", href: "#categories" },
  { label: "Riders", href: "#how-it-works" },
  { label: "Products", href: "#" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="bg-primary text-primary-foreground rounded-full font-extrabold tracking-tight flex items-center justify-center px-4 h-[45px] gap-1">
          <Image src="/ounje-icon.svg" alt="Ounje" width={28} height={28} />
          <span className="text-xl mt-1 leading-0">Ounje</span>
        </div>

        <div className="hidden md:flex items-center gap-6 bg-card border border-border/20 px-6 py-2 rounded-full">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3 bg-card border border-border/20 px-4 py-2 rounded-full">
          <span className="text-sm font-medium text-foreground cursor-pointer hover:text-primary transition-colors">
            More
          </span>
          <Button variant="ghost" size="icon-sm" className="rounded-full">
            <User className="size-4" />
          </Button>
          <Button variant="ghost" size="icon-sm" className="rounded-full">
            <ShoppingBag className="size-4" />
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </Button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-foreground font-medium py-2 text-sm"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
