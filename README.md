# Travel My Little Trip

[Next.js](https://nextjs.org) 기반 프로젝트로 [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app)으로 초기 생성되었습니다.

UI/UX는 [ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)을 사용해 디자인 및 구현했습니다.

## 프로젝트 출발점

다음 한 줄 프롬프트로 시작된 프로젝트입니다.

> "나는 AI를 이용해서 여행 계획을 짜는 서비스를 만들고자해. copy.md 를 참고해서 만들어줘. https://github.com/nextlevelbuilder/ui-ux-pro-max-skill 의 스킬을 활용해."

`copy.md` 기획 문서 기반, ui-ux-pro-max-skill 스킬 활용해 AI 여행 계획 서비스로 구현.

## 시작하기

먼저 개발 서버를 실행하세요.

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
# 또는
bun dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인합니다.

`app/page.tsx` 파일을 수정하면 페이지를 편집할 수 있으며, 파일 저장 시 자동으로 업데이트됩니다.

이 프로젝트는 [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)를 사용해 Vercel의 새 폰트 패밀리 [Geist](https://vercel.com/font)를 자동 최적화 및 로드합니다.

## 사용 기술

- **프레임워크**: Next.js 16
- **언어**: TypeScript
- **스타일**: Tailwind CSS 4
- **백엔드**: Supabase
- **패키지 매니저**: pnpm
- **UI/UX 디자인 도구**: [ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)

## 환경 변수 설정

루트 디렉토리에 `.env.local` 파일 생성 후 키 입력.

```bash
OPENAI_API_KEY=발급받은-키
```

`.env.example` 파일 참고.

## ui-ux-pro-max-skill 소개

웹 및 모바일을 위한 UI/UX 디자인 인텔리전스 스킬입니다.

- 50개 이상 디자인 스타일 (글래스모피즘, 클레이모피즘, 미니멀리즘, 브루탈리즘, 뉴모피즘, 벤토 그리드, 다크 모드 등)
- 161개 컬러 팔레트
- 57개 폰트 페어링
- 161개 제품 유형 (랜딩 페이지, 대시보드, 어드민 패널, 이커머스, SaaS, 포트폴리오 등)
- 99개 UX 가이드라인
- 25개 차트 유형
- 10개 스택 지원 (React, Next.js, Vue, Svelte, SwiftUI, React Native, Flutter, Tailwind, shadcn/ui, HTML/CSS)

GitHub: [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)


## Vercel 배포

가장 쉬운 배포 방법은 Next.js 제작자가 만든 [Vercel 플랫폼](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)을 사용하는 것입니다.

자세한 내용은 [Next.js 배포 문서](https://nextjs.org/docs/app/building-your-application/deploying)를 확인하세요.
