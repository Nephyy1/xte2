import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Topup XTE 2 - Cepat, Murah, Terpercaya",
  description: "Jasa topup e-wallet dan convert pulsa dengan biaya admin termurah.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn("bg-white text-slate-900 antialiased", poppins.className)}>
        {children}
      </body>
    </html>
  );
  }
