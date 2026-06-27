import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// Section 3 — BLUE background (dark)
const projects = [
  { image: "/images/project-1.jpg", title: "Lumina Finance App", category: "UI/UX Design" },
  { image: "/images/project-2.jpg", title: "GreenCart E-commerce", category: "Web Development" },
  { image: "/images/project-3.jpg", title: "Nomad Travel Brand", category: "Branding" },
  { image: "/images/project-4.jpg", title: "Pulse Health Dashboard", category: "UI/UX Design" },
  { image: "/images/project-5.jpg", title: "Craftly SaaS Platform", category: "Web Development" },
  { image: "/images/project-6.jpg", title: "Bloom Skincare Launch", category: "Digital Marketing" },
];

const categoryStyles = {
  "UI/UX Design":      "bg-indigo-500/20 text-indigo-200 border border-indigo-500/30",
  "Web Development":   "bg-purple-500/20 text-purple-200 border border-purple-500/30",
  "Branding":          "bg-pink-500/20 text-pink-200 border border-pink-500/30",
  "Digital Marketing": "bg-emerald-500/20 text-emerald-200 border border-emerald-500/30",
};

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-28 bg-gradient-to-br from-[#0f0c29] via-[#1a1a3e] to-[#0f0c29] relative overflow-hidden"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "50px 50px" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-300 font-semibold text-sm uppercase tracking-[0.15em]">
            Our Work
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3 tracking-tight">
            Projects We're Proud Of
          </h2>
          <p className="text-indigo-200/60 mt-4 max-w-xl mx-auto text-base">
            A glimpse into what we've built — each project started with a real problem and shipped as something people actually use.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-900/40"
            >
              {/* Image with zoom */}
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Card info */}
              <div className="p-5">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryStyles[p.category]}`}>
                  {p.category}
                </span>
                <h3 className="font-display mt-3 text-base font-bold text-white">{p.title}</h3>
              </div>

              {/* Hover overlay with arrow */}
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" strokeWidth={2} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
