import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bike, Users, Phone, Wallet, BotMessageSquare, CheckCircle } from "lucide-react";

const services = [
  {
    icon: <Wallet className="h-8 w-8 text-blue-600" />,
    title: "Top Up E-Wallet",
    description: "Isi saldo DANA, GoPay, OVO, dan ShopeePay dengan cepat.",
  },
  {
    icon: <Phone className="h-8 w-8 text-blue-600" />,
    title: "Convert Pulsa",
    description: "Ubah pulsa berlebih jadi saldo E-Wallet. Rate dijamin bersaing.",
  },
];

const transactionMethods = [
    {
        icon: <Users className="h-8 w-8 text-green-600"/>,
        title: "Datang ke Kelas Kami",
        description: "Kamu bisa langsung samperin kami di kelas sesuai jadwal yang tersedia."
    },
    {
        icon: <Bike className="h-8 w-8 text-green-600"/>,
        title: "Cash on Delivery (COD)",
        description: "Kami yang akan mendatangi kelas kamu untuk proses transaksi. Praktis!"
    }
]

const admins = [
  { name: "Admin 1", whatsapp: "6281234567890" },
  { name: "Admin 2", whatsapp: "6281234567891" },
  { name: "Admin 3", whatsapp: "6281234567892" },
  { name: "Admin 4", whatsapp: "6281234567893" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="hero" className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-20 md:py-32">
          <div className="container mx-auto max-w-5xl px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
              Solusi Cepat & Murah untuk Kebutuhan Digitalmu
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Topup E-Wallet dan Convert Pulsa dengan biaya admin paling terjangkau. Transaksi aman, mudah, dan terpercaya.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a href="#layanan">
                <Button size="lg">Lihat Layanan</Button>
              </a>
              <a href="#kontak">
                <Button size="lg" variant="outline">Hubungi Admin</Button>
              </a>
            </div>
          </div>
        </section>

        <section id="layanan" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Layanan Kami</h2>
              <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                Kami menyediakan dua layanan utama untuk mempermudah transaksi digital Anda di lingkungan sekolah.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <Card key={service.title} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {service.icon}
                    <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="cara-transaksi" className="py-16 md:py-24 bg-slate-50">
           <div className="container mx-auto max-w-5xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Cara Transaksi Super Mudah</h2>
              <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                Pilih metode transaksi yang paling nyaman untukmu.
              </p>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {transactionMethods.map((method) => (
                     <Card key={method.title} className="bg-white">
                        <CardHeader>
                            <div className="flex items-center gap-4 mb-2">
                                {method.icon}
                                <CardTitle className="text-xl">{method.title}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-600">{method.description}</p>
                        </CardContent>
                    </Card>
                ))}
             </div>
           </div>
        </section>

        <section id="kontak" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Hubungi Admin</h2>
              <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                Punya pertanyaan atau siap untuk transaksi? Hubungi salah satu admin kami melalui WhatsApp.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {admins.map((admin) => (
                <Card key={admin.name} className="p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                   <a href={`https://wa.me/${admin.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3">
                     <div className="bg-green-100 rounded-full p-3">
                         <BotMessageSquare className="h-8 w-8 text-green-600" />
                     </div>
                     <p className="font-semibold text-slate-800">{admin.name}</p>
                     <Button variant="ghost" className="text-green-700 font-bold w-full">Chat WA</Button>
                   </a>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 border-t bg-slate-50">
        <div className="container mx-auto max-w-5xl px-4 text-center text-slate-500">
            <p>&copy; {new Date().getFullYear()} Topup XTE 2. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
      }
