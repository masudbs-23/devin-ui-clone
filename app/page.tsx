import { HeroSection } from "../components/HeroSection";
import { ClientsSection } from "../components/ClientsSection";
import { UsecasesSection } from "../components/UsecasesSection";
import { LearnWorkSection } from "../components/LearnWorkSection";
import { CardGridSection } from "../components/CardGridSection";
import { BuildMoreSection } from "../components/BuildMoreSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans">
      <HeroSection />
      <ClientsSection />
      <UsecasesSection />
      <LearnWorkSection />
      <CardGridSection />
      <BuildMoreSection />
    </div>
  );
}
