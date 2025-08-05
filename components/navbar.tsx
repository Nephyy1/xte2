"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#layanan", label: "Layanan" },
    { href: "#cara-transaksi", label: "Cara Transaksi" },
    { href: "#kontak", label: "Kontak" },
  ];

  return (
    // Perubahan ada di baris di bawah ini, z-50 dihapus
    <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/icon.svg" alt="Topup XTE 2 Logo" width={24} height={24} className="text-purple-600"/>
          <span className="font-bold text-xl text-gray-800">Topup XTE 2</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-600 hover:text-purple-600 transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <div className={twMerge(
        "fixed inset-0 z-50 bg-white md:hidden",
        isOpen ? "flex flex-col" : "hidden"
      )}>
        <div className="flex justify-between items-center p-4 border-b">
           <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
            <Image src="/icon.svg" alt="Topup XTE 2 Logo" width={24} height={24} className="text-purple-600"/>
            <span className="font-bold text-xl text-gray-800">Topup XTE 2</span>
          </Link>
          <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 space-y-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-2xl text-gray-800 hover:text-purple-600" onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
