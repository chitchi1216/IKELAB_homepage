import Image from "next/image";
import Link from "next/link";

const activities = [
  "Creative technology",
  "Learning experiments",
  "Digital prototypes",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f6f1] text-[#151515]">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-8">
        <Link className="flex items-center gap-3" href="/" aria-label="IKELAB home">
          <Image
            src="/ikelab-icon.png"
            alt=""
            width={34}
            height={34}
            priority
          />
          <span className="text-sm font-semibold tracking-[0.18em]">IKELAB</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-[#5f5f57] sm:flex">
          <a className="transition hover:text-[#151515]" href="#about">
            About
          </a>
          <a className="transition hover:text-[#151515]" href="#work">
            Work
          </a>
          <a className="transition hover:text-[#151515]" href="mailto:hello@ikelab2026.com">
            Contact
          </a>
        </nav>
      </header>

      <section className="mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-6xl content-center gap-14 px-6 pb-20 pt-10 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-10">
          <Image
            src="/ikelab-wordmark.png"
            alt="IKELAB 2026"
            width={720}
            height={214}
            className="h-auto w-full max-w-[620px]"
            priority
          />
          <div className="max-w-2xl space-y-6">
            <p className="text-3xl font-medium leading-tight tracking-normal sm:text-5xl">
              Small experiments for ideas, tools, and learning.
            </p>
            <p className="max-w-xl text-base leading-8 text-[#5f5f57] sm:text-lg">
              IKELAB is a minimal studio site for publishing prototypes,
              research notes, and project updates from 2026 onward.
            </p>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative aspect-square w-full max-w-[360px] border border-[#d8d4ca] bg-[#efede5] p-10">
            <Image
              src="/ikelab-icon.png"
              alt="IKELAB icon"
              width={420}
              height={420}
              className="h-full w-full object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-y border-[#ddd9cf] bg-[#fffdf8] px-6 py-16 sm:px-8"
      >
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#777166]">
            About
          </p>
          <p className="max-w-3xl text-2xl leading-snug text-[#24241f] sm:text-3xl">
            We keep the surface quiet so the work can speak clearly: concise
            writing, useful prototypes, and a steady record of what is being
            explored.
          </p>
        </div>
      </section>

      <section id="work" className="px-6 py-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {activities.map((activity) => (
            <div
              key={activity}
              className="border border-[#d8d4ca] bg-[#fffdf8] p-6"
            >
              <p className="text-lg font-medium">{activity}</p>
              <p className="mt-4 text-sm leading-7 text-[#666057]">
                Coming soon. This space will collect simple updates and
                lightweight project notes.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
