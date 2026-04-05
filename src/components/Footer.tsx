"use client";

const navLinks = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Hakkımızda", href: "#about" },
  { label: "Hizmetler", href: "#services" },
  { label: "Yorumlar", href: "#reviews" },
  { label: "İletişim", href: "#contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-primary)" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          {/* Brand */}
          <div>
            <p className="font-heading text-2xl font-bold text-white mb-4">
              Nefes<span style={{ color: "var(--color-accent)" }}>.</span>
            </p>
            <p className="text-white/40 text-sm leading-relaxed">
              Beşiktaş&apos;ın kalbinde, bedeninizi ve zihninizi yeniden
              keşfetmeniz için buradayız.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[0.75rem] uppercase tracking-[0.2em] font-medium text-white/30 mb-6">
              Hızlı Bağlantılar
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/50 text-sm hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[0.75rem] uppercase tracking-[0.2em] font-medium text-white/30 mb-6">
              İletişim Bilgileri
            </p>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+905376083107"
                className="block text-white/50 hover:text-white transition-colors duration-300"
              >
                +90 537 608 31 07
              </a>
              <p className="text-white/50">
                Akat, Şht. Erdogan İban Sk. No:6,
                <br />
                34353 Beşiktaş/İstanbul
              </p>
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div
          className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/30 text-xs">
            &copy; 2026 Nefes Pilates. Tüm hakları saklıdır.
          </p>
          <p className="text-white/20 text-xs">
            Beşiktaş, İstanbul
          </p>
        </div>
      </div>
    </footer>
  );
}
