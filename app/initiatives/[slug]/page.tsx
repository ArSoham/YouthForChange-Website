"use client"
import InitiativeActions from "@/components/initiative-actions";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

const initiativesData = {
  "narrative-nexus": {
    title: "Narrative Nexus",
    subtitle: "Amplifying Voices, Creating Change",
    description:
      "Narrative Nexus is our flagship initiative focused on empowering young voices through storytelling and digital media. We believe that every story has the power to inspire change and create meaningful social impact.",
    keyPoints: [
      "Digital storytelling workshops",
      "Podcast and video production",
      "Youth media platforms",
      "Community journalism training",
    ],
    impact:
      "Engaged over 500 young storytellers with a combined reach of 100K+ audience members across multiple platforms.",
    color: "bg-blue-50",
    accentColor: "text-blue-600",
  },
  samrakshyan: {
    title: "Samrakshyan",
    subtitle: "Protecting Communities, Strengthening Lives",
    description:
      "Samrakshyan focuses on community protection, safety, and welfare initiatives. We work to strengthen the social fabric by creating safer communities and supporting vulnerable populations through comprehensive welfare programs.",
    keyPoints: [
      "Community safety programs",
      "Social welfare initiatives",
      "Disaster relief support",
      "Mental health awareness",
      "Women and child protection",
    ],
    impact:
      "Supported over 1000 families across multiple communities with emergency relief and ongoing welfare support.",
    color: "bg-green-50",
    accentColor: "text-green-600",
  },
  yuwa: {
    title: "YUWA",
    subtitle: "Youth United for Welfare & Advancement",
    description:
      "YUWA is our comprehensive youth empowerment program designed to unleash the potential of young people through education, skill development, and mentorship. We create pathways for youth to realize their dreams and contribute meaningfully to society.",
    keyPoints: [
      "Leadership training programs",
      "Skill development workshops",
      "Mentorship matching",
      "Career guidance",
      "Educational scholarships",
    ],
    impact:
      "Mentored and trained over 2000 young leaders who have gone on to create their own initiatives and inspire peers.",
    color: "bg-yellow-50",
    accentColor: "text-yellow-600",
  },
}

export default function InitiativeDetailPage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initiative = initiativesData[params.slug as keyof typeof initiativesData]

  if (!initiative) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Initiative not found</h1>
          <Link href="/#initiatives" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-4 py-2 rounded">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center font-bold text-lg">
                YFC
              </div>
            <span className="font-bold text-xl hidden sm:inline">Youth for Change</span>
          </div>
          <Link href="/#initiatives" className="text-primary-foreground hover:bg-primary/80 inline-flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`${initiative.color} py-16 sm:py-24`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`text-4xl sm:text-5xl font-bold ${initiative.accentColor} mb-4`}>{initiative.title}</h1>
          <p className={`text-xl sm:text-2xl font-semibold ${initiative.accentColor} opacity-90`}>
            {initiative.subtitle}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Description */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">About This Initiative</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{initiative.description}</p>
          </div>

          {/* Key Points */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">What We Do</h2>
            <ul className="space-y-4">
              {initiative.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div
                    className={`w-6 h-6 rounded-full ${initiative.accentColor.replace("text-", "bg-")} flex-shrink-0 flex items-center justify-center mt-1`}
                  >
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-lg text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          <div
            className={`${initiative.color} p-8 rounded-lg border-l-4 ${initiative.accentColor.replace("text-", "border-")}`}
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Impact</h2>
            <p className="text-lg text-foreground">{initiative.impact}</p>
          </div>

          {/* CTA */}
          <InitiativeActions />
        </div>
      </section>
    </main>
  )
}
