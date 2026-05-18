type Feature = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  highlight: string;
};

const features: Feature[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="3" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
    title: "10분 맞춤 일정 생성",
    desc: "취향·예산·동행자·이동 수단을 입력하면, AI가 지도 기반 최적 동선으로 일정을 완성합니다.",
    highlight: "평균 8분 · 기존 11시간 대비 97% 단축",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
        <path d="M3 21v-5h5" />
      </svg>
    ),
    title: "실시간 일정 재조정",
    desc: "비가 오거나, 아이가 힘들거나, 예약이 꽉 찼을 때—앱 안에서 \"지금 일정 바꿔줘\"라고 말하면 즉시 대안을 찾습니다.",
    highlight: "5초 안에 대안 코스 제안",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "동행자 취향 합의",
    desc: "커플·가족·친구 그룹의 서로 다른 취향을 AI가 분석해 자동으로 모두가 만족하는 코스를 만듭니다.",
    highlight: "모두가 80점 이상을 준 코스",
  },
];

export function Service() {
  return (
    <section id="service" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary-dark)]">
            Service
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            우리가 다르게 하는 세 가지
          </h2>
          <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
            검색·비교·결정—여행자가 가장 지치는 세 단계를 AI가 대신합니다.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {features.map((f, i) => (
            <article
              key={i}
              className="group relative flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 transition-all hover:-translate-y-1 hover:border-[var(--color-primary)]/40 hover:shadow-xl hover:shadow-sky-500/5"
            >
              <div
                className="grid h-12 w-12 place-items-center rounded-xl text-white transition-transform group-hover:scale-110"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)",
                }}
                aria-hidden
              >
                <span className="h-6 w-6">{f.icon}</span>
              </div>

              <h3 className="mt-6 text-xl font-bold leading-snug">{f.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-muted-foreground)]">
                {f.desc}
              </p>

              <div
                className="mt-6 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold"
                style={{
                  background: "rgba(245, 158, 11, 0.1)",
                  color: "var(--color-accent-dark)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {f.highlight}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
