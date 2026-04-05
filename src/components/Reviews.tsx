"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const reviews = [
  {
    text: "Nefes Pilates'e başladığımdan beri hem fiziksel hem de ruhsal olarak kendimi çok daha iyi hissediyorum. Eğitmenler son derece ilgili ve profesyonel. Kesinlikle tavsiye ederim!",
    name: "Elif Kaya",
    label: "Google Yorumu",
  },
  {
    text: "Reformer pilates derslerine katılıyorum ve sonuçlar inanılmaz. Stüdyo çok temiz ve modern. Sıcak bir ortam, her gittiğimde kendimi evimde gibi hissediyorum.",
    name: "Merve Aksoy",
    label: "Google Yorumu",
  },
  {
    text: "Bel ağrılarım için özel program hazırladılar. Birkaç hafta içinde büyük fark hissettim. Beşiktaş'ta bu kalitede bir stüdyo bulmak gerçekten şans.",
    name: "Ahmet Yılmaz",
    label: "Google Yorumu",
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(count)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4"
          fill="var(--color-accent)"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  useScrollReveal();

  return (
    <section id="reviews" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p
            className="text-[0.8rem] uppercase tracking-[0.2em] font-medium mb-4"
            style={{ color: "var(--color-accent)" }}
          >
            Yorumlar
          </p>
          <h2
            className="font-heading font-semibold tracking-[-0.02em] mb-6"
            style={{
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              color: "var(--color-text)",
            }}
          >
            Öğrencilerimiz ne diyor?
          </h2>
          <div className="inline-flex items-center gap-3 rounded-full px-6 py-3" style={{ backgroundColor: "var(--color-surface, #f5f5f0)" }}>
            <span
              className="font-heading font-bold text-2xl leading-none"
              style={{ color: "var(--color-text)" }}
            >
              5.0
            </span>
            <Stars />
            <span
              className="text-sm"
              style={{ color: "var(--color-text-muted)" }}
            >
              Google&apos;da mükemmel puan
            </span>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`reveal reveal-delay-${i + 1} bg-white rounded-2xl shadow-sm p-8 lg:p-10 relative flex flex-col justify-between`}
            >
              {/* Decorative quote */}
              <svg
                className="absolute top-6 right-6 w-10 h-10 opacity-[0.08]"
                fill="var(--color-accent)"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
              </svg>

              <div>
                <div className="mb-4">
                  <Stars />
                </div>
                <p
                  className="italic leading-[1.8] mb-8 text-[0.95rem]"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  {review.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p
                    className="font-medium text-sm"
                    style={{ color: "var(--color-text)" }}
                  >
                    {review.name}
                  </p>
                  <p
                    className="text-xs mt-0.5 flex items-center gap-1.5"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    {review.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
