"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Initiatives from "@/components/initiatives"
import CoreAreas from "@/components/core-areas"
import Events from "@/components/events"
import FoundingMembers from "@/components/founding-members"
import Team from "@/components/team"
import JoinUs from "@/components/join-us"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Initiatives />
      <CoreAreas />
      <Events />
      <FoundingMembers />
      <Team />
      <JoinUs />
      <Footer />
    </main>
  )
}
