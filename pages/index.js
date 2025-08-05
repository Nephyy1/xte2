import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { SiDana, SiGopay, SiOvo, SiShopeepay } from 'react-icons/si';

export default function Home() {
  const services = [
    { name: 'DANA', icon: <SiDana size={40} className="text-blue-500" /> },
    { name: 'Gopay', icon: <SiGopay size={40} className="text-blue-600" /> },
    { name: 'OVO', icon: <SiOvo size={40} className="text-purple-600" /> },
    { name: 'ShopeePay', icon: <SiShopeepay size={40} className="text-orange-500" /> },
  ];

  const admins = [
    { name: 'Admin 1', avatar: '/avatar1.png' },
    { name: 'Admin 2', avatar: '/avatar2.png' },
    { name: 'Admin 3', avatar: '/avatar3.png' },
    { name: 'Admin 4', avatar: '/avatar4.png' },
    { name: 'Admin 5', avatar: '/avatar5.png' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      <Head>
        <title>TopUpKilat - Jasa Top Up E-Wallet Terpercaya</title>
        <meta name="description" content="Jasa Top Up Saldo DANA, Gopay, OVO, dan ShopeePay. Cepat, aman, dan terpercaya." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <motion.section
          className="container mx-auto px-6 text-center py-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Isi Ulang E-Wallet <span className="bg-gradient-primary text-transparent bg-clip-text">Anti Ribet</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Transaksi DANA, Gopay, OVO, dan ShopeePay jadi lebih mudah. Kami siap melayani Anda kapan saja, di mana saja.
          </p>
          <a
            href="#kontak"
            className="bg-gradient-primary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block"
          >
            Hubungi Kami Sekarang
          </a>
        </motion.section>

        {/* Layanan Section */}
        <section id="layanan" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold">Layanan Kami</h3>
              <p className="text-gray-600 mt-2">Kami mendukung semua e-wallet favoritmu.</p>
            </div>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {services.map((service) => (
                <motion.div
                  key={service.name}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
                  variants={itemVariants}
                >
                  {service.icon}
                  <p className="mt-4 text-xl font-semibold">{service.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Tim Section */}
        <section id="tim" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold">Tim Admin Kami</h3>
              <p className="text-gray-600 mt-2">5 admin kami siap membantu transaksimu.</p>
            </div>
            <motion.div
              className="flex flex-wrap justify-center gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {admins.map((admin) => (
                <motion.div
                  key={admin.name}
                  className="text-center"
                  variants={itemVariants}
                >
                  <div className="w-24 h-24 rounded-full mx-auto mb-2 bg-gradient-to-br from-pink-400 to-indigo-500 p-1 shadow-lg">
                    <img
                      src={`https://ui-avatars.com/api/?name=${admin.name.replace(' ', '+')}&background=random&color=fff&size=128`}
                      alt={admin.name}
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <p className="font-semibold">{admin.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Kontak Section */}
        <section id="kontak" className="bg-gradient-primary text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Siap Bertransaksi?</h3>
            <p className="max-w-xl mx-auto mb-8">
              Hubungi kami melalui WhatsApp untuk respon cepat. Bisa COD atau kami yang datang ke lokasimu!
            </p>
            <motion.a
              href="https://wa.me/6281234567890?text=Halo%20TopUpKilat,%20saya%20mau%20order..."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="mr-3" size={24} />
              Chat via WhatsApp
            </motion.a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
     }      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      <Head>
        <title>TopUpKilat - Jasa Top Up E-Wallet Terpercaya</title>
        <meta name="description" content="Jasa Top Up Saldo DANA, Gopay, OVO, dan ShopeePay. Cepat, aman, dan terpercaya dengan layanan antar-jemput." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <motion.section
          className="container mx-auto px-6 text-center py-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          {/* Teks placeholder yang menyebabkan error telah dihapus dari sini */}
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Isi Ulang E-Wallet <span className="bg-gradient-primary text-transparent bg-clip-text">Anti Ribet</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Transaksi DANA, Gopay, OVO, dan ShopeePay jadi lebih mudah. Kami siap melayani Anda kapan saja, di mana saja.
          </p>
          <a
            href="#kontak"
            className="bg-gradient-primary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block"
          >
            Hubungi Kami Sekarang
          </a>
        </motion.section>

        {/* Layanan Section */}
        <section id="layanan" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold">Layanan Kami</h3>
              <p className="text-gray-600 mt-2">Kami mendukung semua e-wallet favoritmu.</p>
            </div>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {services.map((service) => (
                <motion.div
                  key={service.name}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
                  variants={itemVariants}
                >
                  {service.icon}
                  <p className="mt-4 text-xl font-semibold">{service.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Tim Section */}
        <section id="tim" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold">Tim Admin Kami</h3>
              <p className="text-gray-600 mt-2">5 admin kami siap membantu transaksimu.</p>
            </div>
            {/* Teks placeholder kedua yang menyebabkan error telah dihapus dari sini */}
            <motion.div
              className="flex flex-wrap justify-center gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {admins.map((admin) => (
                <motion.div
                  key={admin.name}
                  className="text-center"
                  variants={itemVariants}
                >
                  <div className="w-24 h-24 rounded-full mx-auto mb-2 bg-gradient-to-br from-pink-400 to-indigo-500 p-1 shadow-lg">
                    <img
                      src={`https://ui-avatars.com/api/?name=${admin.name.replace(' ', '+')}&background=random&color=fff&size=128`}
                      alt={admin.name}
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <p className="font-semibold">{admin.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Kontak Section */}
        <section id="kontak" className="bg-gradient-primary text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Siap Bertransaksi?</h3>
            <p className="max-w-xl mx-auto mb-8">
              Hubungi kami melalui WhatsApp untuk respon cepat. Bisa COD atau kami yang datang ke lokasimu!
            </p>
            <motion.a
              href="https://wa.me/6281234567890?text=Halo%20TopUpKilat,%20saya%20mau%20order..."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="mr-3" size={24} />
              Chat via WhatsApp
            </motion.a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
    }      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      <Head>
        <title>TopUpKilat - Jasa Top Up E-Wallet Terpercaya</title>
        <meta name="description" content="Jasa Top Up Saldo DANA, Gopay, OVO, dan ShopeePay. Cepat, aman, dan terpercaya dengan layanan antar-jemput." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <motion.section
          className="container mx-auto px-6 text-center py-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Isi Ulang E-Wallet <span className="bg-gradient-primary text-transparent bg-clip-text">Anti Ribet</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Transaksi DANA, Gopay, OVO, dan ShopeePay jadi lebih mudah. Kami siap melayani Anda kapan saja, di mana saja.
          </p>
          <a
            href="#kontak"
            className="bg-gradient-primary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block"
          >
            Hubungi Kami Sekarang
          </a>
        </motion.section>

        {/* Layanan Section */}
        <section id="layanan" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold">Layanan Kami</h3>
              <p className="text-gray-600 mt-2">Kami mendukung semua e-wallet favoritmu.</p>
            </div>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {services.map((service) => (
                <motion.div
                  key={service.name}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
                  variants={itemVariants}
                >
                  {service.icon}
                  <p className="mt-4 text-xl font-semibold">{service.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Tim Section */}
        <section id="tim" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold">Tim Admin Kami</h3>
              <p className="text-gray-600 mt-2">5 admin kami siap membantu transaksimu.</p>
            </div>
            
            <motion.div
              className="flex flex-wrap justify-center gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {admins.map((admin) => (
                <motion.div
                  key={admin.name}
                  className="text-center"
                  variants={itemVariants}
                >
                  <div className="w-24 h-24 rounded-full mx-auto mb-2 bg-gradient-to-br from-pink-400 to-indigo-500 p-1 shadow-lg">
                    <img
                      src={`https://ui-avatars.com/api/?name=${admin.name.replace(' ', '+')}&background=random&color=fff&size=128`}
                      alt={admin.name}
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <p className="font-semibold">{admin.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Kontak Section */}
        <section id="kontak" className="bg-gradient-primary text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Siap Bertransaksi?</h3>
            <p className="max-w-xl mx-auto mb-8">
              Hubungi kami melalui WhatsApp untuk respon cepat. Bisa COD atau kami yang datang ke lokasimu!
            </p>
            <motion.a
              href="https://wa.me/6281234567890?text=Halo%20TopUpKilat,%20saya%20mau%20order..."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="mr-3" size={24} />
              Chat via WhatsApp
            </motion.a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
