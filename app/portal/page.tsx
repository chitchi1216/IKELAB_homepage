import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";
import iconBlackRounded from "../../log-cc/icon/ikelab2026_icon_black_rounded_M.png";
import wordmarkBlack from "../../log-cc/wordmark/ikelab2026_black_M.png";
import wordmarkBlackSmall from "../../log-cc/wordmark/ikelab2026_black_XS.png";
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

const xUrl = "https://x.com/IKELAB2026";

const instagramUrl = "https://www.instagram.com/ikelab2026/";

const frameworkRepoUrl =
  "https://github.com/chitchi1216/integrated-framework-3domains-10layers";

const frameworkDiscussionsUrl =
  "https://github.com/chitchi1216/integrated-framework-3domains-10layers/discussions";

const homepageRepoUrl = "https://github.com/chitchi1216/HomePage-ike.maniken";

const terraHubRepoUrl = "https://github.com/chitchi1216/terra-hub";

type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

const navItems = [
  { label: "更新", href: "#updates" },
  { label: "議事録", href: "#minutes" },
  { label: "教材", href: "#materials" },
  { label: "プロジェクト", href: "#projects" },
];

const updateFeed = [
  {
    date: "2026.04.20",
    category: "議事録追加",
    title: "【IKELab】RG#002 議事録",
    detail:
      "社内支援、次回外出、3圏10層教材についての記録をアップロードしました。",
    href: minutesUrl,
  },
  {
    date: "2026.04.19",
    category: "プロジェクト追加",
    title: "社内実験用データ統合基盤企画書たたき台_v1.4",
    detail: "CSV起点で業務データを統合・可視化する実験基盤の企画案です。",
    href: terraHubV14Url,
  },
  {
    date: "2026.04.18",
    category: "教材追加",
    title: "3圏10層モデル",
    detail: "テキスト、ダッシュボード、GitHubリポジトリへの導線を追加しました。",
    href: frameworkOverviewUrl,
  },
];

const quickLinks: LinkItem[] = [
  { label: "観察記録システム", href: observationUrl, external: true },
  { label: "教材トップ", href: "#materials" },
  { label: "議事録一覧", href: minutesUrl },
];

const materialGroups = [
  {
    title: "3圏10層モデル",
    links: [
      { label: "テキスト", href: frameworkOverviewUrl },
      { label: "ダッシュボード", href: "/integrated-framework-3domains-10layers.html" },
    ],
  },
  {
    title: "論考アーカイブ",
    links: [
      {
        label: "実在と実存の架橋は時間を超えた対話 改訂版",
        href: existenceDialogueUrl,
      },
    ],
  },
  {
    title: "GitHub",
    links: [
      { label: "リポジトリ", href: frameworkRepoUrl, external: true },
      { label: "ディスカッション", href: frameworkDiscussionsUrl, external: true },
    ],
  },
];

const projects = [
  {
    title: "マッシュアップ構想",
    detail: "資源と人を未来につなぐためのデータマッシュアップ構想。",
    links: [
      { label: "資料を開く", href: homepageUrl, external: true },
      { label: "リポジトリ", href: homepageRepoUrl, external: true },
    ],
  },
  {
    title: "社内実験用データ統合基盤企画書たたき台_v1.4",
    detail: "分散する業務データをCSV起点で統合・可視化する社内実験基盤の企画案。",
    links: [
      { label: "企画書を開く", href: terraHubV14Url },
      { label: "リポジトリ", href: terraHubRepoUrl, external: true },
    ],
  },
];

function linkTarget(link: LinkItem) {
  return link.external
    ? { target: "_blank", rel: "noreferrer" }
    : {};
}

function Arrow() {
  return (
    <span aria-hidden="true" className="shrink-0 whitespace-nowrap">
      →
    </span>
  );
}

export default async function PortalPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (!isValidSession(session)) {
    redirect("/");
  }

  return (
    <main className="min-h-screen bg-[#f6f3ea] text-[#171713]">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <header className="border-b border-[#d8d0bf] pb-4">
          <div className="flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <a
              aria-label="IKELAB2026 Portal"
              className="flex min-w-0 items-center gap-3"
              href="/portal"
            >
              <Image
                alt=""
                className="h-9 w-9 shrink-0"
                priority
                src={iconBlackRounded}
              />
              <Image
                alt="IKELAB2026"
                className="h-auto w-[136px] shrink-0 sm:w-[156px]"
                priority
                src={wordmarkBlack}
              />
            </a>

            <nav
              aria-label="Portal navigation"
              className="order-3 -mx-1 flex w-full gap-1 overflow-x-auto lg:order-none lg:mx-4 lg:w-auto lg:flex-1 lg:justify-center lg:overflow-visible"
            >
              {navItems.map((item) => (
                <a
                  className="shrink-0 px-3 py-2 text-sm font-semibold text-[#676052] transition hover:bg-[#fffdf8] hover:text-[#171713]"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <form action="/api/logout" className="ml-auto" method="post">
              <button
                className="h-10 border border-[#d9d1c2] bg-[#fffdf8] px-4 text-sm font-semibold text-[#676052] transition hover:border-[#171713] hover:text-[#171713]"
                type="submit"
              >
                Logout
              </button>
            </form>
          </div>
        </header>

        <section className="py-8 sm:py-10">
          <p className="text-sm font-semibold text-[#777063]">
            Member research workspace
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-6xl">
            IKELAB2026 Portal
          </h1>
        </section>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <section
            aria-labelledby="updates-heading"
            className="min-w-0"
            id="updates"
          >
            <div className="mb-4 flex flex-col gap-3 border-b border-[#d8d0bf] pb-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-[#21684d]">
                  Updates
                </p>
                <h2
                  className="mt-1 text-2xl font-semibold"
                  id="updates-heading"
                >
                  更新フィード
                </h2>
              </div>
              <div className="flex gap-2 overflow-x-auto">
                {["All", "Minutes", "Materials", "Projects"].map((filter) => (
                  <span
                    className="shrink-0 border border-[#d8d0bf] bg-[#fffdf8] px-3 py-1.5 text-xs font-semibold text-[#676052]"
                    key={filter}
                  >
                    {filter}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {updateFeed.map((item) => (
                <a
                  className="group block border border-[#d8d0bf] bg-[#fffdf8] p-5 transition hover:border-[#171713] hover:bg-white sm:p-6"
                  href={item.href}
                  key={item.title}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="bg-[#21684d] px-2 py-1 text-xs font-semibold text-white">
                          {item.category}
                        </span>
                        <time className="text-sm font-semibold text-[#21684d]">
                          {item.date}
                        </time>
                      </div>
                      <h3 className="mt-4 text-2xl font-semibold leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6f685c]">
                        {item.detail}
                      </p>
                    </div>
                    <span className="inline-flex h-10 shrink-0 items-center gap-2 text-sm font-semibold text-[#171713] transition group-hover:translate-x-1">
                      開く
                      <Arrow />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <aside className="space-y-4 lg:sticky lg:top-5 lg:self-start">
            <section className="border border-[#d8d0bf] bg-[#fffdf8] p-5">
              <p className="text-sm font-semibold text-[#777063]">
                Quick Access
              </p>
              <div className="mt-4 space-y-2">
                {quickLinks.map((link, index) => (
                  <a
                    className={[
                      "flex min-h-11 items-center justify-between gap-3 border px-3 py-2 text-sm font-semibold transition",
                      index === 0
                        ? "border-[#171713] bg-[#171713] text-[#fffdf8] hover:bg-[#3a352d]"
                        : "border-[#d8d0bf] bg-[#f8f5ed] text-[#171713] hover:border-[#171713] hover:bg-white",
                    ].join(" ")}
                    href={link.href}
                    key={link.label}
                    {...linkTarget(link)}
                  >
                    <span>{link.label}</span>
                    <Arrow />
                  </a>
                ))}
              </div>
              <p className="mt-4 text-xs leading-6 text-[#6f685c]">
                観察記録システムは別サイトPWAへ移動します。
              </p>
            </section>

            <section
              aria-labelledby="minutes-heading"
              className="border border-[#d8d0bf] bg-[#fffdf8] p-5"
              id="minutes"
            >
              <p className="text-sm font-semibold text-[#777063]">
                Minutes
              </p>
              <h2
                className="mt-1 text-xl font-semibold"
                id="minutes-heading"
              >
                議事録
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#6f685c]">
                本サークルの議事録を日付順に確認できます。
              </p>
              <a
                className="mt-4 flex min-h-11 items-center justify-between gap-3 border border-[#d8d0bf] bg-[#f8f5ed] px-3 py-2 text-sm font-semibold transition hover:border-[#171713] hover:bg-white"
                href={minutesUrl}
              >
                <span>議事録一覧</span>
                <Arrow />
              </a>
            </section>

            <section
              aria-labelledby="materials-heading"
              className="border border-[#d8d0bf] bg-[#fffdf8] p-5"
              id="materials"
            >
              <p className="text-sm font-semibold text-[#777063]">
                Materials
              </p>
              <h2
                className="mt-1 text-xl font-semibold"
                id="materials-heading"
              >
                教材
              </h2>
              <div className="mt-5 space-y-5">
                {materialGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="border-b border-[#d8d0bf] pb-2 text-sm font-semibold">
                      {group.title}
                    </h3>
                    <div className="mt-2 space-y-1">
                      {group.links.map((link) => (
                        <a
                          className="flex min-h-10 items-center justify-between gap-3 px-1 py-2 text-sm font-semibold text-[#676052] transition hover:text-[#171713]"
                          href={link.href}
                          key={link.label}
                          {...linkTarget(link)}
                        >
                          <span className="min-w-0 break-words">
                            {link.label}
                          </span>
                          <Arrow />
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>

        <section
          aria-labelledby="projects-heading"
          className="mt-8 border-t border-[#d8d0bf] pt-6"
          id="projects"
        >
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-[#777063]">
                Projects
              </p>
              <h2
                className="mt-1 text-2xl font-semibold"
                id="projects-heading"
              >
                プロジェクト
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-[#6f685c]">
              プロジェクトは増減します。各カードから資料とリポジトリへ移動できます。
            </p>
          </div>

          <div className="grid gap-3 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                className="border border-[#d8d0bf] bg-[#fffdf8] p-5 sm:p-6"
                key={project.title}
              >
                <h3 className="text-xl font-semibold leading-snug">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6f685c]">
                  {project.detail}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.links.map((link) => (
                    <a
                      className="inline-flex min-h-10 items-center gap-2 border border-[#d8d0bf] bg-[#f8f5ed] px-3 py-2 text-sm font-semibold transition hover:border-[#171713] hover:bg-white"
                      href={link.href}
                      key={link.label}
                      {...linkTarget(link)}
                    >
                      {link.label}
                      <Arrow />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="mt-10 border-t border-[#d8d0bf] py-6">
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <Image
                alt="IKELAB2026"
                className="h-auto w-[128px]"
                src={wordmarkBlackSmall}
              />
              <p className="mt-3 text-xs leading-6 text-[#6f685c]">
                Member research workspace
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#777063]">
                Official
              </p>
              <div className="mt-3 space-y-2">
                <a
                  className="flex min-h-9 items-center justify-between gap-3 text-sm font-semibold text-[#676052] transition hover:text-[#171713]"
                  href={xUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span>X / IKELAB2026</span>
                  <Arrow />
                </a>
                <a
                  className="flex min-h-9 items-center justify-between gap-3 text-sm font-semibold text-[#676052] transition hover:text-[#171713]"
                  href={instagramUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span>Instagram / ikelab2026</span>
                  <Arrow />
                </a>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#777063]">
                Archive
              </p>
              <div className="mt-3 space-y-2">
                <a
                  className="flex min-h-9 items-center justify-between gap-3 text-sm font-semibold text-[#676052] transition hover:text-[#171713]"
                  href={legacyHomepageUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span>旧ホームページ</span>
                  <Arrow />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
