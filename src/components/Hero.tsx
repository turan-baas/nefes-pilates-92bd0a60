"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      {/* Background gradient mesh */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 animate-gradient"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(196,149,106,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(196,149,106,0.1) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(196,149,106,0.08) 0%, transparent 50%)",
          }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating geometric shapes */}
      <div
        className="absolute top-[15%] right-[10%] w-72 h-72 rounded-full border opacity-20 animate-float"
        style={{ borderColor: "var(--color-accent)" }}
      />
      <div
        className="absolute bottom-[20%] left-[5%] w-48 h-48 rounded-full opacity-10 animate-float-slow"
        style={{ backgroundColor: "var(--color-accent)" }}
      />
      <div
        className="absolute top-[60%] right-[25%] w-24 h-24 rotate-45 border opacity-15 animate-float-slow"
        style={{ borderColor: "var(--color-accent)" }}
      />
      <div
        className="absolute top-[25%] left-[15%] w-3 h-3 rounded-full opacity-40"
        style={{ backgroundColor: "var(--color-accent)" }}
      />
      <div
        className="absolute top-[40%] right-[35%] w-2 h-2 rounded-full opacity-30"
        style={{ backgroundColor: "var(--color-accent)" }}
      />
      <div
        className="absolute bottom-[35%] right-[8%] w-1.5 h-1.5 rounded-full opacity-50"
        style={{ backgroundColor: "var(--color-accent)" }}
      />

      {/* Decorative line */}
      <div
        className="absolute left-[8%] top-[30%] w-px h-32 opacity-20"
        style={{ backgroundColor: "var(--color-accent)" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p
          className="text-[0.8rem] uppercase tracking-[0.25em] font-medium mb-8 opacity-60 text-white font-body"
        >
          Beşiktaş, İstanbul
        </p>

        <h1
          className="font-heading font-bold text-white leading-[0.95] tracking-[-0.04em] mb-8"
          style={{ fontSize: "clamp(2.75rem, 8vw, 5rem)" }}
        >
          Nefes
          <br />
          <span style={{ color: "var(--color-accent)" }}>Pilates</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-white/60 max-w-xl mx-auto mb-12 leading-relaxed font-normal">
          Bedeninizi ve zihninizi yeniden keşfedin. Profesyonel eğitmenler
          eşliğinde, size özel programlarla sağlıklı yaşamın kapılarını aralayın.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="#contact"
            className="rounded-full px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
            style={{ backgroundColor: "var(--color-accent)" }}
          >
            Ücretsiz Deneme Dersi
          </a>
          <a
            href="#about"
            className="rounded-full px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium text-white/70 border border-white/20 transition-all duration-300 hover:border-white/40 hover:text-white"
          >
            Daha Fazla
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            "linear-gradient(to top, var(--color-bg), transparent)",
        }}
      />
    </section>
  );
}
