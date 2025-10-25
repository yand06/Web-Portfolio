const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400">
          © {currentYear} Supriyandi La Awe – All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
