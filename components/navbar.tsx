"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#layanan", label: "Layanan" },
    { href: "#cara-transaksi", label: "Cara Transaksi" },
    { href: "#kontak", label: "Kontak" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b z-30">
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
            <button onClick={() => setIsOpen(true)} aria-label="Open Menu">
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>
      
      <div
        className={`fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-xl transform transition-transform md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="font-bold">Menu</span>
          <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-gray-800 hover:text-purple-600 py-2 px-3 rounded-md text-lg"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
