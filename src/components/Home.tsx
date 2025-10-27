const Home = () => {
  return (
    <section id="home" className="min-h-screen bg-white">
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Side - Simplified Decorative */}
        <div className="hidden lg:flex lg:col-span-5 bg-slate-50 items-center justify-center p-12 relative overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
        </div>

        {/* Right Side - Content */}
        <div className="lg:col-span-7 flex items-start justify-center pt-48 sm:pt-24 md:pt-68 lg:pt-24 p-8 sm:p-12 lg:p-12 bg-white">
          <div className="max-w-xl w-full space-y-8">
            {/* Main Heading */}
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-slate-400 font-light">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Supriyandi
                <br />
                <span className="text-indigo-300">La Awe</span>
              </h1>
            </div>

            {/* Role */}
            <p className="text-xl sm:text-2xl md:text-3xl text-slate-600 font-normal">
              Fullstack Developer
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
              Passionate about creating beautiful and functional web
              applications with modern technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
