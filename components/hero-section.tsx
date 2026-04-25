import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, ShoppingBag } from "lucide-react";

export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-24 grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <Badge className="bg-ounje-secondary-container text-ounje-on-secondary-fixed h-auto px-4 py-1.5 rounded-full font-bold text-sm gap-2">
          <ShieldCheck className="size-4" />
          Verified Salary Earners Only
        </Badge>

        <h1 className="text-5xl md:text-7xl font-extrabold text-primary leading-[1.1] tracking-tight">
          The Smart Way to{" "}
          <span className="text-secondary">Stock</span> Your Pantry.
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-md leading-relaxed">
          E kaabo! Experience a harvest of savings. Buy your bulk food items
          today and pay when your salary lands. No stress, just fresh staples.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="signature-gradient text-primary-foreground h-14 px-10 rounded-2xl font-bold text-lg hover:scale-[0.98] transition-transform shadow-lg shadow-primary/10">
            Start Your Harvest
          </Button>
          <Button
            variant="outline"
            className="h-14 px-8 rounded-2xl font-bold text-primary border-border/20 hover:bg-muted"
          >
            View Marketplace
          </Button>
        </div>
      </div>

      <div className="relative">
        <div className="aspect-square bg-ounje-primary-fixed/30 rounded-[3rem] absolute -inset-4 -rotate-3 -z-10" />
        <img
          alt="Nigerian food staples basket"
          className="w-full aspect-square object-cover rounded-[2.5rem] shadow-2xl"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtx7hDouOPbYKgpQhICqznmF6XjiAh_X5eaKUWZf6lu3ae6PHtBDNLG6PX4p51zK14kq1ocr_k1QlkxsooqwEsAZKQr2sIpVavvTd-uWJkrWB2CgdQz2xISFjz-DGJkLn3uIYInkVaIi-fF7gbZp4oTrHXhgyEtk7IQZFqKNy2X9QTp8ZAODAHUFnvjCaWPCk5x5ekCg3A37Fa0Ifs9NcVtgcPyj9xjrnBNpSGDF6yCfm0sS5mAacnxUX-RcF3bCpvYXfbqt6HtPU"
        />

        <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-white/40">
          <div className="w-12 h-12 rounded-full bg-ounje-secondary-container flex items-center justify-center">
            <ShoppingBag className="size-5 text-white" />
          </div>
          <div>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
              O dara! Popular Pick
            </p>
            <p className="text-lg font-bold text-primary">25kg Parboiled Rice</p>
          </div>
        </div>
      </div>
    </section>
  );
}
