"use client";
import { LangProvider } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScaleBand } from "@/components/ScaleBand";
import { NetworkMap } from "@/components/NetworkMap";
import { Capabilities } from "@/components/Capabilities";
import { Stories } from "@/components/Stories";
import { Safety } from "@/components/Safety";
import { Customers } from "@/components/Customers";
import { InvestorsNews } from "@/components/InvestorsNews";
import { PeopleHistory } from "@/components/PeopleHistory";
import { SiteFooter } from "@/components/Footer";
import { FlowDivider } from "@/components/Chrome";

export default function Page() {
  return (
    <LangProvider>
      <a
        href="#scale"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-12 focus:z-[70] focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <ScaleBand />
        <FlowDivider label="Flow: scale to network" />
        <NetworkMap />
        <FlowDivider label="Flow: network to process" />
        <Capabilities />
        <FlowDivider label="Flow: process to evidence" />
        <Stories />
        <Safety />
        <Customers />
        <FlowDivider label="Flow: service to disclosure" />
        <InvestorsNews />
        <PeopleHistory />
      </main>
      <SiteFooter />
    </LangProvider>
  );
}
