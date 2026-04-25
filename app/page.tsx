import Image from "next/image";
import iconBlackRounded from "../log-cc/icon/ikelab2026_icon_black_rounded_M.png";
import wordmarkBlack from "../log-cc/wordmark/ikelab2026_black_M.png";
import wordmarkBlackSmall from "../log-cc/wordmark/ikelab2026_black_XS.png";

const officialLinks = [
  { label: "X / IKELAB2026", href: "https://x.com/IKELAB2026" },
  { label: "Instagram / ikelab2026", href: "https://www.instagram.com/ikelab2026/" },
];

function Arrow() {
  return (
    <span aria-hidden="true" className="shrink-0 whitespace-nowrap">
      →
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f3ea] text-[#171713]">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <header className="border-b border-[#d8d0bf] pb-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
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
            </div>
            <p className="hidden text-sm font-semibold text-[#777063] sm:block">
              Member research workspace
            </p>
          </div>
        </header>

        <section className="grid flex-1 items-center gap-8 py-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:py-14">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#777063]">
              IKELAB2026 Portal
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-6xl">
              Member research workspace
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#6f685c] sm:text-base">
              観察記録、議事録、教材、プロジェクト資料をまとめたメンバー専用ポータルです。
            </p>
          </div>

          <div className="border border-[#d8d0bf] bg-[#fffdf8] p-6 sm:p-8">
            <div className="mb-8 flex items-start justify-between gap-6">
              <div>
                <p className="text-sm font-semibold text-[#777063]">
                  Sign in
                </p>
                <h2 className="mt-3 text-2xl font-semibold">
                  IKELAB2026 Portal
                </h2>
              </div>
              <Image
                alt=""
                className="h-12 w-12 shrink-0"
                priority
                src={iconBlackRounded}
              />
            </div>

            <form action="/api/login" className="space-y-5" method="post">
              <label className="block">
                <span className="text-sm font-medium text-[#4d473d]">
                  Password
                </span>
                <input
                  autoComplete="current-password"
                  className="mt-2 h-12 w-full border border-[#d8d0bf] bg-[#f8f5ed] px-4 text-base outline-none transition focus:border-[#171713] focus:bg-white"
                  name="password"
                  placeholder="Password"
                  required
                  type="password"
                />
              </label>

              <button
                className="flex h-12 w-full items-center justify-center gap-2 bg-[#171713] px-5 text-sm font-semibold text-[#fffdf8] transition hover:bg-[#3a352d]"
                type="submit"
              >
                Login
                <Arrow />
              </button>
            </form>
          </div>
        </section>

        <footer className="border-t border-[#d8d0bf] py-6">
          <div className="grid gap-6 sm:grid-cols-2">
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
            <div className="sm:text-right">
              <p className="text-sm font-semibold text-[#777063]">
                Official
              </p>
              <div className="mt-3 flex flex-col gap-2 sm:items-end">
                {officialLinks.map((link) => (
                  <a
                    className="inline-flex min-h-9 items-center gap-2 text-sm font-semibold text-[#676052] transition hover:text-[#171713]"
                    href={link.href}
                    key={link.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {link.label}
                    <Arrow />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
