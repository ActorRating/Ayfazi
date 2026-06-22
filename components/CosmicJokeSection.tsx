import { getDailyJoke } from "@/lib/data/jokes";

export function CosmicJokeSection() {
  const joke = getDailyJoke();

  return (
    <section
      id="gunun-sakasi"
      className="scroll-mt-28 rounded-2xl bg-white/[0.03] px-4 py-8 text-center sm:scroll-mt-24 sm:px-10 sm:py-12"
    >
      <h2 className="mb-4 text-base font-medium text-slate-300 sm:mb-6 sm:text-xl">
        Günün Uzay Şakası
      </h2>
      <p className="mx-auto max-w-2xl break-words text-lg leading-relaxed text-white sm:text-2xl sm:leading-relaxed">
        &ldquo;{joke}&rdquo;
      </p>
    </section>
  );
}
