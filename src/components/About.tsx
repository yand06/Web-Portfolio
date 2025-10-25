const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Java", "Spring Boot", "MySQL", "PostgreSQL"],
    },
    { category: "Tools", items: ["Git", "Docker", "IntelliJ IDEA", "VS Code"] },
  ];

  return (
    <section id="about" className="py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-16 text-center">
          About Me
        </h2>

        <div className="max-w-2xl mx-auto">
          <p className="text-base sm:text-lg text-slate-600 mb-16 leading-relaxed text-center">
            I'm a Fullstack Developer passionate about crafting modern,
            responsive, and high-performance web applications. With hands-on
            experience across various technologies, I focus on building
            efficient, scalable, and user-centric digital solutions that deliver
            real impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skillSet) => (
              <div
                key={skillSet.category}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-indigo-200 transition-colors duration-300"
              >
                <h3 className="text-lg font-bold text-slate-800 mb-4">
                  {skillSet.category}
                </h3>
                <ul className="space-y-3">
                  {skillSet.items.map((item) => (
                    <li
                      key={item}
                      className="text-slate-600 text-sm flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
