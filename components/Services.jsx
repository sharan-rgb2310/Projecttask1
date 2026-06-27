import { Palette, Code2, Sparkles, TrendingUp } from "lucide-react";

// Section 2 — WHITE background
const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Intuitive interfaces built around your users. We go from research and wireframes to pixel-perfect, tested prototypes.",
    tag: "Design",
    tagColor: "bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300",
    iconColor: "text-indigo-600 dark:text-indigo-300",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Fast, scalable, and maintainable web apps. We write clean code on modern stacks — Next.js, React, Node, and more.",
    tag: "Development",
    tagColor: "bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-300",
    iconColor: "text-purple-600 dark:text-purple-300",
  },
  {
    icon: Sparkles,
    title: "Branding",
    description:
      "Full brand identities that stick — logo, typography, color palette, and brand voice strategy all in one package.",
    tag: "Brand",
    tagColor: "bg-pink-50 text-pink-600 dark:bg-pink-950 dark:text-pink-300",
    iconColor: "text-pink-600 dark:text-pink-300",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "SEO, paid ads, and social strategies that actually convert. We connect your brand to the right audience at the right time.",
    tag: "Marketing",
    tagColor: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300",
    iconColor: "text-emerald-600 dark:text-emerald-300",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-white dark:bg-[#0d0d1a] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary dark:text-indigo-400 font-semibold text-sm uppercase tracking-[0.15em]">
            What We Do
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mt-3 tracking-tight">
            Services Built for Growth
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            From first impression to lasting impact — our services cover every touchpoint of your digital presence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="card-hover group bg-white dark:bg-[#13131f] border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm"
            >
              <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-950 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200">
                <s.icon className={`w-6 h-6 ${s.iconColor}`} strokeWidth={2} />
              </div>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${s.tagColor}`}>
                {s.tag}
              </span>
              <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white mt-3 mb-2">
                {s.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
