"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  useScrollReveal();

  return (
    <section id="about" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 items-center">
          {/* Text column */}
          <div className="lg:col-span-3 reveal">
            <p
              className="text-[0.8rem] uppercase tracking-[0.2em] font-medium mb-4"
              style={{ color: "var(--color-accent)" }}
            >
              Hakkımızda
            </p>
            <h2
              className="font-heading font-semibold tracking-[-0.02em] mb-8"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                color: "var(--color-text)",
              }}
            >
              Hareketin gücüyle <br className="hidden lg:block" />
              yaşamı dönüştürüyoruz
            </h2>
            <div
              className="space-y-6 text-lg leading-[1.8]"
              style={{ color: "var(--color-text-muted)" }}
            >
              <p>
                Beşiktaş&apos;ın en güzel köşelerinden biri olan Akat
                Mahallesi&apos;nde, Nefes Pilates olarak yıllardır insanların
                bedenlerini ve zihinlerini yeniden keşfetmelerine yardımcı
                oluyoruz. Stüdyomuz, şehrin koşturmacasından bir nefes almak
                isteyenler için huzurlu bir liman.
              </p>
              <p>
                Uzman eğitmenlerimiz, her bireyin farklı olduğunu bilerek kişiye
                özel programlar tasarlıyor. İster pilates ile core gücünüzü
                artırmak isteyin, ister yoga ile iç huzurunuzu bulmak — sizin
                için doğru yolu birlikte çiziyoruz.
              </p>
              <p>
                Küçük grup dersleri ve birebir seanslarımızla, her adımda
                yanınızdayız. Nefes Pilates&apos;te sadece egzersiz yapmıyorsunuz;
                kendinize yatırım yapıyorsunuz.
              </p>
            </div>
          </div>

          {/* Decorative column */}
          <div className="lg:col-span-2 reveal reveal-delay-1">
            <div className="relative">
              {/* Abstract composition */}
              <div
                className="w-full aspect-[3/4] rounded-3xl relative overflow-hidden"
                style={{ backgroundColor: "var(--color-surface)" }}
              >
                {/* Accent circle */}
                <div
                  className="absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-30"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
                {/* Small circle */}
                <div
                  className="absolute bottom-20 left-8 w-20 h-20 rounded-full opacity-20"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />
                {/* Rating display */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span
                    className="font-heading font-bold text-8xl leading-none"
                    style={{ color: "var(--color-primary)" }}
                  >
                    5.0
                  </span>
                  <div className="flex gap-1 mt-4 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill="var(--color-accent)"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p
                    className="text-sm font-medium tracking-wide"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Mükemmel Puan
                  </p>
                </div>
                {/* Decorative line */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20 opacity-20"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
