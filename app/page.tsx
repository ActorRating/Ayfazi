import { CosmicJokeSection } from "@/components/CosmicJokeSection";
import { Footer } from "@/components/Footer";
import { MoonCalendar } from "@/components/MoonCalendar";
import { Navbar } from "@/components/Navbar";
import { ZodiacGrid } from "@/components/ZodiacGrid";

export default function Home() {
  return (
    <div className="cosmic-bg min-h-screen">
      <Navbar />

      <main className="safe-px safe-pb mx-auto flex w-full min-w-0 max-w-5xl flex-col gap-10 pb-8 pt-[calc(var(--nav-height)+1.25rem)] sm:gap-12 sm:pb-14 sm:pt-[calc(var(--nav-height)+2rem)]">
        <div className="text-center">
          <p className="text-xs text-slate-500 sm:text-sm">
            Evrenin ritmiyle hizalanın
          </p>
        </div>

        <MoonCalendar />
        <CosmicJokeSection />
        <ZodiacGrid />
      </main>

      <Footer />
    </div>
  );
}
