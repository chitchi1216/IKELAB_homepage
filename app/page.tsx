import Image from "next/image";

const portalItems = [
  {
    label: "Observation",
    detail: "旅先や日常で出会った生物の記録",
  },
  {
    label: "Discussion",
    detail: "研究テーマごとの議論と仮説メモ",
  },
  {
    label: "Materials",
    detail: "教材、資料、スライド、PDFの蓄積",
  },
  {
    label: "Notes",
    detail: "活動記録、調査ログ、共有ノート",
  },
];

const loginUrl =
  "https://nature-observer-sage.vercel.app/login?callbackUrl=https%3A%2F%2Fnature-observer-sage.vercel.app%2F";

const privateResources = [
  {
    label: "Material",
    title: "Integrated Framework",
    detail: "3 Domains / 10 Layers の教材リポジトリ",
    href: "https://github.com/chitchi1216/integrated-framework-3domains-10layers",
    action: "GitHubで開く",
  },
  {
    label: "Discussion",
    title: "Framework Discussions",
    detail: "教材に関する質問、論点、改善案を議論",
    href: "https://github.com/chitchi1216/integrated-framework-3domains-10layers/discussions",
    action: "議論を開く",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f3ea] text-[#171713]">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-6 sm:px-8">
        <header className="flex items-center justify-between">
          <Image
            src="/ikelab-wordmark.png"
            alt="IKELAB 2026"
            width={260}
            height={77}
            className="h-auto w-36 sm:w-48"
            priority
          />
          <span className="border border-[#d9d1c2] bg-[#fffdf8] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#676052]">
            Member Access
          </span>
        </header>

        <section className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-xl space-y-8">
            <div className="inline-flex items-center gap-3 border border-[#d9d1c2] bg-[#fffdf8] px-4 py-3">
              <Image
                src="/ikelab-icon.png"
                alt=""
                width={30}
                height={30}
                priority
              />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#676052]">
                Research Circle Portal
              </span>
            </div>

            <div className="space-y-5">
              <h1 className="text-4xl font-semibold leading-tight tracking-normal sm:text-6xl">
                IKELAB Portal
              </h1>
              <p className="max-w-lg text-base leading-8 text-[#5f594d] sm:text-lg">
                IKELABは、会社から生まれた研究サークルです。観察記録、
                議論、教材、テーマ別ノートを集約し、メンバーだけで
                小さな研究を進めていきます。
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm text-[#5f594d]">
              <div className="border-l border-[#c8beaa] pl-4">
                Current members
                <p className="mt-1 text-2xl font-semibold text-[#171713]">5</p>
              </div>
              <div className="border-l border-[#c8beaa] pl-4">
                Primary archive
                <p className="mt-1 text-2xl font-semibold text-[#171713]">
                  Nature
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md border border-[#d8d0bf] bg-[#fffdf8] p-6 shadow-[12px_12px_0_#e4dece] sm:p-8">
            <div className="mb-8 flex items-start justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#777063]">
                  Sign in
                </p>
                <h2 className="mt-3 text-2xl font-semibold">
                  メンバー専用入口
                </h2>
              </div>
              <Image
                src="/ikelab-icon.png"
                alt=""
                width={48}
                height={48}
              />
            </div>

            <div className="space-y-5">
              <label className="block">
                <span className="text-sm font-medium text-[#4d473d]">
                  Email
                </span>
                <input
                  className="mt-2 h-12 w-full border border-[#d8d0bf] bg-[#f8f5ed] px-4 text-base outline-none transition focus:border-[#171713] focus:bg-white"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="member@ikelab2026.com"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-[#4d473d]">
                  Password
                </span>
                <input
                  className="mt-2 h-12 w-full border border-[#d8d0bf] bg-[#f8f5ed] px-4 text-base outline-none transition focus:border-[#171713] focus:bg-white"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Password"
                />
              </label>

              <a
                className="flex h-12 w-full items-center justify-center bg-[#171713] px-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#fffdf8] transition hover:bg-[#3a352d]"
                href={loginUrl}
              >
                Login
              </a>
            </div>

            <p className="mt-5 text-xs leading-6 text-[#7c7568]">
              現在は観察記録システムのログイン画面へ接続します。議論と教材の
              管理機能はポータル機能として順次追加予定です。
            </p>
          </div>
        </section>

        <section className="border-t border-[#d8d0bf] py-6">
          <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#676052]">
                Private GitHub
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                教材と議論スペース
              </h2>
            </div>
            <p className="max-w-md text-xs leading-6 text-[#6f685c]">
              リポジトリはprivateです。GitHubで権限を持つメンバーだけが
              教材とDiscussionsを参照できます。
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {privateResources.map((resource) => (
              <a
                key={resource.title}
                className="group border border-[#d8d0bf] bg-[#fffdf8] p-5 transition hover:border-[#171713]"
                href={resource.href}
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#777063]">
                  {resource.label}
                </p>
                <h3 className="mt-3 text-xl font-semibold">
                  {resource.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6f685c]">
                  {resource.detail}
                </p>
                <p className="mt-5 text-sm font-semibold text-[#171713]">
                  {resource.action}
                  <span className="ml-2 transition group-hover:ml-3">→</span>
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="grid gap-3 border-t border-[#d8d0bf] py-6 md:grid-cols-4">
          {portalItems.map((item) => (
            <div key={item.label} className="bg-[#fffdf8] p-4">
              <p className="text-sm font-semibold">{item.label}</p>
              <p className="mt-2 text-xs leading-6 text-[#6f685c]">
                {item.detail}
              </p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
