import AssistingSection from "@/components/Assisting/Assisting";
import Banner from "@/components/Banner/Banner";
import CTASection from "@/components/CTASection/CTASection";
import Features from "@/components/Features/Features";
import Hero from "@/components/Hero/Hero";
import JobDiscovery from "@/components/JobDiscovery/JobDiscovery";
import Pricing from "@/components/Pricing/Pricing";

export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <JobDiscovery></JobDiscovery>
      <Features></Features>
      <Pricing></Pricing>
      <CTASection></CTASection>
    </div>
  );
}