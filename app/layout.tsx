import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI 여행 플래너 · 10분 만에 완성하는 나만의 여행 일정",
  description:
    "취향·예산·동행자 입력만 하면 AI가 지도 기반 최적 동선으로 일정을 완성합니다. 평균 8분, 기존 11시간 대비 97% 단축.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
