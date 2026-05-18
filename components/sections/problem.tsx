const problems = [
  {
    num: "01",
    title: "평균 11시간을 낭비합니다",
    desc: "한국 여행자가 해외여행 하나를 계획하는 데 쏟는 평균 시간. 블로그, 유튜브, 카페 후기를 뒤지고, 탭 30개를 열고, 결국 어디서 시작했는지도 모릅니다.",
  },
  {
    num: "02",
    title: "정보는 넘치는데 내 취향엔 맞는 게 없습니다",
    desc: "'오사카 3박 4일 추천 코스'를 검색하면 수백 개의 결과가 쏟아집니다. 하지만 내가 아이 둘을 데려가는지, 사진을 좋아하는지, 걷는 걸 싫어하는지—아무도 나에게 맞춰 주지 않습니다.",
  },
  {
    num: "03",
    title: "동선 실수 한 번이 하루를 망칩니다",
    desc: "숙소와 관광지 거리를 제대로 확인하지 않아 하루 이동 시간이 4시간이 되거나, 만석인 레스토랑 앞에서 다음 행선지를 즉흥으로 찾다가 소중한 여행 하루가 허비됩니다.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="border-y border-[var(--color-border)] bg-[var(--color-muted)]/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary-dark)]">
            Problem
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            여행이 즐겁지 않은 이유
          </h2>
          <blockquote className="mt-6 border-l-4 pl-5 text-left text-lg italic leading-relaxed text-[var(--color-muted-foreground)]" style={{ borderColor: "var(--color-accent)" }}>
            &ldquo;설레는 마음으로 계획을 시작했는데,
            <br />
            어느 순간 계획 자체가 스트레스가 됩니다.&rdquo;
          </blockquote>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.num}
              className="group relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span
                className="text-5xl font-extrabold leading-none"
                style={{ color: "var(--color-accent)" }}
              >
                {p.num}
              </span>
              <h3 className="mt-5 text-xl font-bold leading-snug">{p.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-muted-foreground)]">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
