import Image from 'next/image';
import Link from 'next/link';
import { Building2, Sparkles } from 'lucide-react';

export default function InformasiPage() {
  return (
    <>
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 text-center">
          <Building2 className="mx-auto h-12 w-12 text-purple-600" />
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Tentang Kami
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Layanan ini lahir dari semangat kewirausahaan para siswa untuk memberikan solusi transaksi digital yang cepat, mudah, dan terpercaya bagi seluruh warga sekolah.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-x-2 bg-purple-100 text-purple-800 text-sm font-semibold px-4 py-2 rounded-full">
              <Sparkles className="h-5 w-5" />
              <span>Afiliasi Resmi</span>
            </div>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Ekstrakurikuler Kewirausahaan
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Jasa Topup SMKN 2 Banyumas merupakan program kerja yang bernaung penuh di bawah ekstrakurikuler Kewirausahaan (KWU) sekolah. Setiap transaksi yang Anda lakukan turut mendukung pengembangan skill dan kreativitas kami dalam belajar berwirausaha secara nyata.
            </p>
            <div className="mt-8">
              <Link href="/#kontak" className="inline-block bg-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-purple-700 transition-colors">
                Lihat Tim Kami
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/smk2bms.png"
              alt="Logo SMK Negeri 2 Banyumas"
              width={250}
              height={250}
              className="rounded-full shadow-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
