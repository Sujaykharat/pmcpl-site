import { HeroSection } from "@/app/(sections)/hero/HeroSection";
import { TimelineSection } from "@/app/(sections)/timeline/TimelineSection";
import { OutroSection } from "@/app/(sections)/outro/OutroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TimelineSection />
      <OutroSection />
    </main>
  );
}
