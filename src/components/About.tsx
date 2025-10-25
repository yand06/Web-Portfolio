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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          About Me
        </h2>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            I’m a Fullstack Developer passionate about crafting modern,
            responsive, and high-performance web applications. With hands-on
            experience across various technologies, I focus on building
            efficient, scalable, and user-centric digital solutions that deliver
            real impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {skills.map((skillSet) => (
              <div
                key={skillSet.category}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {skillSet.category}
                </h3>
                <ul className="space-y-2">
                  {skillSet.items.map((item) => (
                    <li key={item} className="text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
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
