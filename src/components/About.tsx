import { Code2, Wrench, Server } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS"],
      icon: <Code2 className="w-6 h-6 text-slate-400" />,
    },
    {
      category: "Backend",
      items: ["Java", "Spring Boot", "MySQL", "PostgreSQL"],
      icon: <Server className="w-6 h-6 text-emerald-500" />,
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "IntelliJ IDEA", "VS Code"],
      icon: <Wrench className="w-6 h-6 text-amber-500" />,
    },
  ];

  return (
    <section id="about" className="py-12 lg:pt-10 lg:py-32 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            Building Digital
            <br />
            <span className="text-slate-400">Experiences</span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            I'm a Fullstack Developer passionate about crafting modern,
            responsive, and high-performance web applications. With hands-on
            experience across various technologies, I focus on building
            efficient, scalable, and user-centric digital solutions that deliver
            real impact.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((skillSet) => (
            <div
              key={skillSet.category}
              className="group relative bg-white p-8 rounded-3xl border-2 border-slate-200 hover:border-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-slate-100 transition-colors duration-300">
                  {skillSet.icon}
                </div>
              </div>
              {/* Category Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center justify-between">
                {skillSet.category}
                <span className="text-xs font-medium text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                  {skillSet.items.length}
                </span>
              </h3>
              {/* Skills List */}
              <ul className="space-y-3">
                {skillSet.items.map((item, idx) => (
                  <li
                    key={item}
                    className="text-slate-600 text-sm font-medium flex items-center group/item"
                    style={{
                      animationDelay: `${idx * 50}ms`,
                    }}
                  >
                    <div className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center mr-3 group-hover:bg-slate-100 transition-colors duration-300">
                      <div className="w-2 h-2 bg-slate-200 rounded-full"></div>
                    </div>
                    <span className="group-hover/item:text-slate-900 transition-colors duration-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Stats/Info (Optional) */}
        <div className="mt-20 pt-12 border-t-2 border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">1+</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">5+</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">
                Projects Done
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">6+</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">
                Technologies
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">100%</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
