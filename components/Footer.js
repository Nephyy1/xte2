const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-24">
      <div className="container mx-auto px-6 py-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} TopUpKilat. All rights reserved.</p>
        <p className="text-sm mt-2">Dibuat dengan ❤️ untuk kemudahan transaksi Anda.</p>
      </div>
    </footer>
  );
};

export default Footer;
