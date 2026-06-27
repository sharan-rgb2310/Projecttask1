import Image from "next/image";
import Link from "next/link";

// Section 1 — BLUE background (dark indigo gradient)
export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-16 flex items-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] relative overflow-hidden"
    >
      {/* Background decorative blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left — text */}
          <div>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-indigo-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-7 border border-white/10">
              <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
              Award-Winning Design Studio
            </span>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-[4rem] font-bold text-white leading-[1.1] tracking-tight mb-6">
              We Build{" "}
              <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Digital
              </span>
              <br />
              Experiences
            </h1>

            <p className="text-indigo-200/80 text-lg leading-relaxed mb-9 max-w-md">
              Pixora Studio blends design thinking with modern engineering to craft products your users remember — from concept to launch.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#portfolio"
                className="bg-white text-primary hover:bg-indigo-50 px-7 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-white/10 hover:-translate-y-0.5"
              >
                View Our Work →
              </Link>
              <Link
                href="#contact"
                className="border border-white/20 text-white hover:bg-white/10 px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
              >
                Let's Talk
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-14 pt-8 border-t border-white/10">
              {[["120+","Projects"],["40+","Clients"],["5★","Rating"]].map(([val, lbl]) => (
                <div key={lbl}>
                  <p className="font-display text-3xl font-bold text-white">{val}</p>
                  <p className="text-indigo-300/70 text-xs mt-0.5">{lbl}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px]">
              {/* Glow ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-3xl blur-2xl scale-110" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-indigo-900/50 border border-white/10">
                <Image
                  src="/images/hero-image.jpg"
                  alt="Design workspace preview"
                  width={540}
                  height={480}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
