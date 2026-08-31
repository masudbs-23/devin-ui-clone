import {
  HeroSection,
  ClientsSection,
  UsecasesSection,
  LearnWorkSection,
  CardGridSection,
  BuildMoreSection,
} from "../components";

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
