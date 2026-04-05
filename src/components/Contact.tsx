"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contact() {
  useScrollReveal();

  return (
    <section
      id="contact"
      className="py-28 lg:py-36"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left: Contact info + form */}
          <div className="reveal">
            <p
              className="text-[0.8rem] uppercase tracking-[0.2em] font-medium mb-4"
              style={{ color: "var(--color-accent)" }}
            >
              İletişim
            </p>
            <h2
              className="font-heading font-semibold tracking-[-0.02em] mb-10"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                color: "var(--color-text)",
              }}
            >
              Bizimle iletişime geçin
            </h2>

            {/* Contact details */}
            <div className="space-y-5 mb-12">
              <a
                href="tel:+905376083107"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    color: "#fff",
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Telefon
                  </p>
                  <p
                    className="font-medium group-hover:underline"
                    style={{ color: "var(--color-text)" }}
                  >
                    +90 537 608 31 07
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    color: "#fff",
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Adres
                  </p>
                  <p
                    className="font-medium"
                    style={{ color: "var(--color-text)" }}
                  >
                    Akat, Şht. Erdogan İban Sk. No:6,
                    <br />
                    34353 Beşiktaş/İstanbul
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Akat+%C5%9Eht.+Erdogan+%C4%B0ban+Sk.+No%3A6+34353+Be%C5%9Fikta%C5%9F+%C4%B0stanbul"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300 hover:shadow-md"
                style={{
                  borderColor: "var(--color-accent)",
                  color: "var(--color-accent)",
                }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                Google Maps&apos;te Aç
              </a>
            </div>

            {/* Contact form */}
            <form
              className="space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Adınız"
                  className="w-full rounded-xl border px-5 py-3.5 text-sm bg-white transition-all duration-300"
                  style={{ borderColor: "#e5e5e5", color: "var(--color-text)" }}
                />
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="w-full rounded-xl border px-5 py-3.5 text-sm bg-white transition-all duration-300"
                  style={{ borderColor: "#e5e5e5", color: "var(--color-text)" }}
                />
              </div>
              <textarea
                placeholder="Mesajınız"
                rows={5}
                className="w-full rounded-xl border px-5 py-3.5 text-sm bg-white transition-all duration-300 resize-none"
                style={{ borderColor: "#e5e5e5", color: "var(--color-text)" }}
              />
              <button
                type="submit"
                className="rounded-full px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                Mesaj Gönder
              </button>
            </form>
          </div>

          {/* Right: Map + Hours */}
          <div className="reveal reveal-delay-1 flex flex-col gap-6">
            {/* Google Maps embed */}
            <div className="w-full rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.5!2d29.0135!3d41.0775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQWthdCwgxZ5odC4gRXJkb2dhbiDEsGJhbiBTay4gTm86NiwgMzQzNTMgQmXFn2lrdGHFny_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1700000000000"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nefes Pilates Konum"
                className="w-full"
              />
            </div>

            {/* Working hours */}
            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: "var(--color-primary, #2d2d2d)" }}
            >
              <h3
                className="font-heading font-semibold text-lg mb-6 flex items-center gap-3"
                style={{ color: "#fff" }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Çalışma Saatleri
              </h3>
              <div className="space-y-3">
                {[
                  { day: "Pazartesi - Cuma", hours: "07:00 - 21:00" },
                  { day: "Cumartesi", hours: "09:00 - 18:00" },
                  { day: "Pazar", hours: "10:00 - 16:00" },
                ].map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between py-2 border-b"
                    style={{ borderColor: "rgba(255,255,255,0.1)" }}
                  >
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                      {item.day}
                    </span>
                    <span className="text-sm font-medium" style={{ color: "#fff" }}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
