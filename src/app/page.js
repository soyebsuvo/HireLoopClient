import AssistingSection from "@/components/Assisting/Assisting";
import Banner from "@/components/Banner/Banner";
import Features from "@/components/Features/Features";
import Hero from "@/components/Hero/Hero";
import JobDiscovery from "@/components/JobDiscovery/JobDiscovery";

export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <JobDiscovery></JobDiscovery>
      <Features></Features>
    </div>
  );
}