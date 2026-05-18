type Testimonial = {
  quote: string;
  name: string;
  meta: string;
  initial: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "남편이랑 여행 계획 짜다 싸운 적이 한두 번이 아니었는데, 이번엔 앱이 둘 다 좋아하는 코스를 뽑아줬어요. 발리 5박 계획을 45분 만에 끝냈고, 현지에서도 일정 두 번 바꿨는데 바로바로 대안이 나와서 한 번도 헤매지 않았습니다.",
    name: "김지수",
    meta: "35세, 마케터 · 남편과 발리 5박 여행",
    initial: "김",
  },
  {
    quote:
      "첫 해외여행이라 모든 게 걱정이었는데, 유심 구매부터 공항 이동, 숙소 체크인 시간까지 전부 일정 안에 녹아 있어서 엄마가 더 놀랐어요. 오사카 3박을 혼자 다 소화했고, 예산도 계획 대비 ±3만 원 안에서 끝났습니다.",
    name: "이준혁",
    meta: "23세, 대학생 · 혼자 첫 오사카 여행",
    initial: "이",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-y border-[var(--color-border)] bg-[var(--color-muted)]/40 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary-dark)]">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            먼저 써본 분들의 이야기
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="relative flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-sm"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
                style={{ color: "var(--color-primary)", opacity: 0.25 }}
              >
                <path d="M9.13 9.27c-.77.28-1.4.71-1.88 1.27-.46.55-.78 1.18-.96 1.86h.01c.27-.18.6-.32.97-.42a4.2 4.2 0 0 1 2.51.07c.38.13.71.32 1 .56.29.24.51.55.66.92.16.37.24.79.24 1.26 0 .57-.11 1.06-.32 1.48-.21.42-.49.77-.84 1.06-.34.28-.74.49-1.18.63-.44.14-.89.21-1.36.21-.75 0-1.42-.16-2.01-.49-.59-.32-1.08-.76-1.46-1.31-.39-.55-.68-1.18-.86-1.9A8.6 8.6 0 0 1 3.5 12c0-1.43.32-2.74.96-3.93.64-1.18 1.54-2.15 2.7-2.91l1.97 1.65zM18.13 9.27c-.77.28-1.4.71-1.88 1.27-.46.55-.78 1.18-.96 1.86h.01c.27-.18.6-.32.97-.42a4.2 4.2 0 0 1 2.51.07c.38.13.71.32 1 .56.29.24.51.55.66.92.16.37.24.79.24 1.26 0 .57-.11 1.06-.32 1.48-.21.42-.49.77-.84 1.06-.34.28-.74.49-1.18.63-.44.14-.89.21-1.36.21-.75 0-1.42-.16-2.01-.49-.59-.32-1.08-.76-1.46-1.31-.39-.55-.68-1.18-.86-1.9-.19-.71-.28-1.46-.28-2.27 0-1.43.32-2.74.96-3.93.64-1.18 1.54-2.15 2.7-2.91l1.97 1.65z" />
              </svg>

              <blockquote className="mt-4 text-[17px] leading-relaxed text-[var(--color-foreground)]">
                {t.quote}
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-[var(--color-border)] pt-5">
                <div
                  className="grid h-11 w-11 place-items-center rounded-full text-base font-bold text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)",
                  }}
                  aria-hidden
                >
                  {t.initial}
                </div>
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-sm text-[var(--color-muted-foreground)]">
                    {t.meta}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
