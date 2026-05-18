export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-muted)]/30">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-2">
            <span
              className="grid h-8 w-8 place-items-center rounded-lg text-white"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)",
              }}
              aria-hidden
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <span className="text-sm font-bold">여행 마이리틀트립</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[var(--color-muted-foreground)]">
            <a href="#" className="hover:text-[var(--color-foreground)]">이용약관</a>
            <a href="#" className="hover:text-[var(--color-foreground)]">개인정보처리방침</a>
            <a href="#" className="hover:text-[var(--color-foreground)]">고객센터</a>
          </nav>

          <p className="text-xs text-[var(--color-muted-foreground)]">
            © 2025 AI 여행 플래너. 대한민국 서비스.
          </p>
        </div>
      </div>
    </footer>
  );
}
