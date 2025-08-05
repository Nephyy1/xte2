import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Topup XTE 2 - Cepat, Murah, Terpercaya",
  description: "Jasa topup e-wallet dan convert pulsa dengan biaya admin termurah untuk siswa XTE 2.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={poppins.className}>
        <Navbar />
        <main>{children}</main>
        <footer className="text-center p-4 border-t mt-16">
          <p className="text-sm text-gray-500">© 2025 Topup XTE 2. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
