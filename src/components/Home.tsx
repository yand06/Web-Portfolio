const Home = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Hi, I'm Supriyandi La Awe
          </h2>
          <p className="text-2xl md:text-3xl text-indigo-600 font-medium mb-6">
            Fullstack Developer
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Passionate about creating beautiful and functional web applications
            with modern technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
