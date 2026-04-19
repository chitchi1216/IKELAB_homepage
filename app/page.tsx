import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f3ea] text-[#171713]">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-6 sm:px-8">
        <header className="flex items-center justify-center pt-4">
          <Image
            src="/ikelab-wordmark.png"
            alt="IKELAB 2026"
            width={260}
            height={77}
            className="h-auto w-40 sm:w-52"
            priority
          />
        </header>

        <section className="flex flex-1 items-center justify-center py-14">
          <div className="w-full max-w-md border border-[#d8d0bf] bg-[#fffdf8] p-6 shadow-[12px_12px_0_#e4dece] sm:p-8">
            <div className="mb-8 flex items-start justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#777063]">
                  Sign in
                </p>
                <h1 className="mt-3 text-3xl font-semibold">
                  IKELAB Portal
                </h1>
              </div>
              <Image
                src="/ikelab-icon.png"
                alt=""
                width={48}
                height={48}
                priority
              />
            </div>

            <p className="mb-6 text-sm leading-7 text-[#6f685c]">
              観察記録、教材、議論スペースはメンバー専用です。
              パスワードを入力してポータルに進んでください。
            </p>

            <form action="/api/login" className="space-y-5" method="post">
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
                  required
                />
              </label>

              <button
                className="h-12 w-full bg-[#171713] px-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#fffdf8] transition hover:bg-[#3a352d]"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
