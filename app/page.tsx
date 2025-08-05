import { Wallet, Smartphone, Users, MessageSquare, Phone } from 'lucide-react';

export default function Home() {
  return (
    <>
      <section className="text-center py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          Topup XTE 2
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Solusi cepat dan mudah untuk semua kebutuhan topup e-wallet dan convert pulsa dengan <span className="font-semibold text-purple-600">biaya admin termurah</span>.
        </p>
        <a href="#layanan" className="mt-8 inline-block bg-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105">
          Lihat Layanan
        </a>
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
          <p className="text-gray-500 mb-12 max-w-lg mx-auto">Siap bertransaksi? Hubungi salah satu admin di bawah ini.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="p-4 border rounded-xl text-center">
              <Phone className="mx-auto mb-2 text-purple-600" size={28}/>
              <h4 className="font-semibold text-lg">Admin 1</h4>
              <p className="text-gray-500 text-sm">(Nomor akan datang)</p>
            </div>
            <div className="p-4 border rounded-xl text-center">
              <Phone className="mx-auto mb-2 text-purple-600" size={28}/>
              <h4 className="font-semibold text-lg">Admin 2</h4>
              <p className="text-gray-500 text-sm">(Nomor akan datang)</p>
            </div>
            <div className="p-4 border rounded-xl text-center">
              <Phone className="mx-auto mb-2 text-purple-600" size={28}/>
              <h4 className="font-semibold text-lg">Admin 3</h4>
              <p className="text-gray-500 text-sm">(Nomor akan datang)</p>
            </div>
            <div className="p-4 border rounded-xl text-center">
              <Phone className="mx-auto mb-2 text-purple-600" size={28}/>
              <h4 className="font-semibold text-lg">Admin 4</h4>
              <p className="text-gray-500 text-sm">(Nomor akan datang)</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
