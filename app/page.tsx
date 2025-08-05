import { Wallet, Smartphone, Users, MessageSquare, Phone, GraduationCap } from 'lucide-react';

export default function Home() {
  const admins = [
    { name: 'Kalvin', class: 'XTE 2', number: '+62 877-8894-5246', waLink: 'https://wa.me/6287788945246' },
    { name: 'Bintang', class: 'XTE 2', number: '+62 815-3333-1355', waLink: 'https://wa.me/6281533331355' },
    { name: 'Nabil', class: 'XTE 2', number: '+62 813-2527-8459', waLink: 'https://wa.me/6281325278459' },
    { name: 'Muhammad', class: 'XTE 2', number: '+62 851-6885-9292', waLink: 'https://wa.me/6285168859292' },
    { name: 'Fauzi', class: 'XTO 1', number: '+62 858-7706-1152', waLink: 'https://wa.me/6285877061152' },
  ];

  return (
    <>
      <section className="text-center py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Jasa Topup X TE 2 & TO 1
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Solusi cepat dan mudah untuk semua kebutuhan topup e-wallet dan convert pulsa dengan <span className="font-semibold text-purple-600">biaya admin termurah</span>.
        </p>
        
        <div className="inline-flex items-center gap-x-2 bg-purple-100 text-purple-800 text-sm font-semibold px-4 py-2 rounded-full mt-6">
          <GraduationCap className="h-5 w-5" />
          <span>Khusus Siswa/i SMK N2 Banyumas</span>
        </div>

        <div className="mt-8">
          <a href="#kontak" className="inline-block bg-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105">
            Hubungi Admin
          </a>
        </div>
      </section>

      <section id="layanan" className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Layanan Kami</h2>
          <p className="text-gray-500 mb-12 max-w-lg mx-auto">Kami menyediakan berbagai layanan untuk memudahkan transaksi digital Anda.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 border rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 text-blue-600 rounded-full p-3 inline-block mb-4">
                <Wallet size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Top Up E-Wallet</h3>
              <p className="text-gray-600">Isi saldo Dana, GoPay, OVO, dan ShopeePay dengan cepat dan biaya admin sangat rendah.</p>
            </div>
            <div className="p-8 border rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-green-100 text-green-600 rounded-full p-3 inline-block mb-4">
                <Smartphone size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Convert Pulsa</h3>
              <p className="text-gray-600">Ubah pulsa berlebih Anda menjadi saldo e-wallet dengan rate terbaik di kelas.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="cara-transaksi" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Cara Transaksi</h2>
          <p className="text-gray-500 mb-12 max-w-lg mx-auto">Proses transaksi sangat fleksibel, bisa dilakukan langsung di kelas.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div className="flex items-start space-x-4 p-6 border rounded-xl bg-white">
              <div className="bg-purple-100 text-purple-600 rounded-full p-3">
                <Users size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Datangi Admin</h3>
                <p className="text-gray-600">Anda bisa langsung menemui salah satu admin di ruang kelas sesuai jadwal kami.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 border rounded-xl bg-white">
              <div className="bg-yellow-100 text-yellow-600 rounded-full p-3">
                <MessageSquare size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Admin Menghampiri</h3>
                <p className="text-gray-600">Atau, hubungi kami dan kami yang akan mendatangi Anda di kelas Anda.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="kontak" className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Hubungi Admin</h2>
          <p className="text-gray-500 mb-12 max-w-lg mx-auto">Siap bertransaksi? Klik salah satu admin di bawah ini untuk chat via WhatsApp.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {admins.map((admin) => (
              <a
                key={admin.name}
                href={admin.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 border rounded-2xl text-center flex flex-col items-center justify-start transition-all duration-300 hover:shadow-purple-200 hover:shadow-lg hover:border-purple-300 hover:-translate-y-2"
              >
                <div className="bg-purple-100 text-purple-600 rounded-full p-3 mb-4">
                  <Phone size={28}/>
                </div>
                <h4 className="font-bold text-xl text-gray-800">{admin.name}</h4>
                <p className="text-gray-500 font-medium mb-2">{admin.class}</p>
                <p className="text-gray-600 text-sm">{admin.number}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
 }
