"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, WalletCards } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Layanan", href: "#layanan" },
  { name: "Cara Transaksi", href: "#cara-transaksi" },
  { name: "Kontak", href: "#kontak" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2 font-bold text-lg">
          <WalletCards className="h-6 w-6 text-blue-600" />
          Topup XTE 2
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-slate-700 transition-colors hover:text-blue-600"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a href="#kontak" className="hidden md:block">
            <Button>Hubungi Kami</Button>
        </a>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Buka menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 pt-10">
                <a href="#" className="flex items-center gap-2 font-bold text-lg mb-4">
                  <WalletCards className="h-6 w-6 text-blue-600" />
                  Topup XTE 2
                </a>
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="font-medium text-slate-700 transition-colors hover:text-blue-600 text-lg"
                  >
                    {link.name}
                  </a>
                ))}
                 <a href="#kontak" className="mt-4">
                    <Button className="w-full">Hubungi Kami</Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
