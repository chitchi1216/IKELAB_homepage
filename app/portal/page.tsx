import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";
import { SESSION_COOKIE_NAME, isValidSession } from "../../lib/auth";

export const dynamic = "force-dynamic";

const observationUrl =
  "https://nature-observer-sage.vercel.app/login?callbackUrl=https%3A%2F%2Fnature-observer-sage.vercel.app%2F";

const homepageUrl = "https://chitchi1216.github.io/HomePage-ike.maniken/";

const legacyHomepageUrl = "https://ikelab-site-cf.pages.dev/member/";

const existenceDialogueUrl = "/archive/existence-dialogue-revised";

const terraHubV14Url = "/external/terra-hub-v1-4";

const frameworkOverviewUrl = "/materials/integrated-framework/latest";

const minutesUrl = "/minutes/rg-002.html";

const minutesResources = [
  {
    label: "New Minutes",
    title: "【IKELab】RG#002 議事録",
    detail: "2026年4月20日にアップロードされた議事録HTML。ポータルから直接参照できます。",
    href: minutesUrl,
    action: "議事録を開く",
    external: false,
  },
];

const privateResources = [
  {
    label: "Material v21",
    title: "教材 v21を読む",
    detail: "docxから生成した図入りHTMLをポータル上で閲覧",
    href: frameworkOverviewUrl,
    action: "教材ページを開く",
    external: false,
  },
  {
    label: "Dashboard",
    title: "3圏10層モデル ダッシュボード",
    detail: "従来の教材ダッシュボードHTMLを表示",
    href: "/integrated-framework-3domains-10layers.html",
    action: "ダッシュボードを開く",
    external: false,
  },
  {
    label: "Material",
    title: "Integrated Framework",
    detail: "3 Domains / 10 Layers の教材リポジトリ",
    href: "https://github.com/chitchi1216/integrated-framework-3domains-10layers",
    action: "GitHubで開く",
    external: true,
  },
  {
    label: "Discussion",
    title: "Framework Discussions",
    detail: "教材に関する質問、論点、改善案を議論",
    href: "https://github.com/chitchi1216/integrated-framework-3domains-10layers/discussions",
    action: "議論を開く",
    external: true,
  },
];

const externalPages = [
  {
    label: "ExternalPage",
    title: "資源と人を未来につなぐためのデータマッシュアップ構想",
    detail: "外部公開ページ",
    href: homepageUrl,
    action: "ページを開く",
  },
  {
    label: "ExternalPage",
    title: "社内実験用データ統合基盤構想 v1.4",
    detail: "分散する業務データをCSV起点で統合・可視化する社内実験基盤の企画案",
    href: terraHubV14Url,
    action: "企画書を開く",
  },
];

export default async function PortalPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (!isValidSession(session)) {
    redirect("/");
  }

  return (
    <main className="min-h-screen bg-[#f6f3ea] text-[#171713]">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-6 sm:px-8">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/ikelab-icon.png"
              alt=""
              width={34}
              height={34}
              priority
            />
            <Image
              src="/ikelab-wordmark.png"
              alt="IKELAB 2026"
              width={260}
              height={77}
              className="h-auto w-36 sm:w-48"
              priority
            />
          </div>
          <form action="/api/logout" method="post">
            <button
              className="border border-[#d9d1c2] bg-[#fffdf8] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#676052] transition hover:border-[#171713]"
              type="submit"
            >
              Logout
            </button>
          </form>
        </header>

        <section className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-xl space-y-8">
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold leading-tight tracking-normal sm:text-6xl">
                IKELAB2026 Portal
              </h1>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md border border-[#d8d0bf] bg-[#fffdf8] p-6 shadow-[12px_12px_0_#e4dece] sm:p-8">
            <div className="mb-8 flex items-start justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#777063]">
                  Observation
                </p>
                <h2 className="mt-3 text-2xl font-semibold">
                  観察記録システム
                </h2>
              </div>
              <Image
                src="/ikelab-icon.png"
                alt=""
                width={48}
                height={48}
              />
            </div>

            <p className="text-sm leading-7 text-[#6f685c]">
              旅先や日常で出会った生物の記録は、既存の観察記録システムに
              蓄積します。
            </p>
            <a
              className="mt-6 flex h-12 w-full items-center justify-center bg-[#171713] px-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#fffdf8] transition hover:bg-[#3a352d]"
              href={observationUrl}
            >
              Observation Login
            </a>
          </div>
        </section>

        <section className="border-t border-[#d8d0bf] py-6">
          <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#676052]">
                Minutes
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                議事録
              </h2>
            </div>
            <p className="max-w-md text-xs leading-6 text-[#6f685c]">
              議事録が追加されました。新着の記録はこのカテゴリから参照できます。
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {minutesResources.map((resource) => (
              <a
                key={resource.title}
                className="group border border-[#d8d0bf] bg-[#fffdf8] p-5 transition hover:border-[#171713]"
                href={resource.href}
                target={resource.external ? "_blank" : undefined}
                rel={resource.external ? "noreferrer" : undefined}
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
                target={resource.external ? "_blank" : undefined}
                rel={resource.external ? "noreferrer" : undefined}
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

        <section className="border-t border-[#d8d0bf] py-6">
          <div className="mb-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#676052]">
              ExternalPage
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {externalPages.map((page) => (
              <a
                key={page.title}
                className="group border border-[#d8d0bf] bg-[#fffdf8] p-5 transition hover:border-[#171713]"
                href={page.href}
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#777063]">
                  {page.label}
                </p>
                <h3 className="mt-3 text-xl font-semibold leading-8">
                  {page.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6f685c]">
                  {page.detail}
                </p>
                <p className="mt-5 text-sm font-semibold text-[#171713]">
                  {page.action}
                  <span className="ml-2 transition group-hover:ml-3">→</span>
                </p>
              </a>
            ))}
          </div>
        </section>

        <footer className="border-t border-[#d8d0bf] py-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a8172]">
            Archive
          </p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            <a
              className="inline-flex text-sm font-semibold text-[#676052] underline-offset-4 transition hover:text-[#171713] hover:underline"
              href={legacyHomepageUrl}
              target="_blank"
              rel="noreferrer"
            >
              旧IKELABページ
            </a>
            <a
              className="inline-flex text-sm font-semibold text-[#676052] underline-offset-4 transition hover:text-[#171713] hover:underline"
              href={existenceDialogueUrl}
            >
              実在と実存の架橋は時間を超えた対話 改訂版
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
