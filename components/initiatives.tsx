"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Shield, Users } from "lucide-react"

export default function Initiatives() {
  const initiatives = [
    {
      id: "book-talk-session",
      icon: BookOpen,
      title: "Book Talk Session",
      description: "Promoting literacy and intellectual exchange through discussions on recently read books across departments.",
      slug: "book-talk-session",
    },
    {
      id: "pride-parade-flash-mob",
      icon: Users,
      title: "Pride Parade & Flash Mob",
      description: "Celebrating diversity and advocating for inclusivity to foster a safe and inclusive campus environment.",
      slug: "pride-parade-flash-mob",
    },
    {
      id: "moot-court-competition",
      icon: Shield,
      title: "Tejshree Memorial Moot Court",
      description: "Supporting legal excellence and youth advocacy through collaborative competitions and legal education engagement.",
      slug: "moot-court-competition",
    },
    {
      id: "financial-literacy-session",
      icon: BookOpen,
      title: "Financial Literacy Session",
      description: "Enhancing students' understanding of financial markets, investment concepts, and economic awareness.",
      slug: "financial-literacy-session",
    },
    {
      id: "mou-initiative",
      icon: Users,
      title: "MoU Initiative",
      description: "Fostering collaboration and long-term youth empowerment through strategic partnerships with international organizations.",
      slug: "mou-initiative",
    },
  ]

  return (
    <section id="initiatives" className="py-20 sm:py-32 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Initiatives</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We run diverse programs and initiatives to create tangible impact across multiple sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((initiative) => {
            const Icon = initiative.icon
            return (
              <Link key={initiative.id} href={`/initiatives/${initiative.slug}`}>
                <Card className="border-border hover:shadow-lg transition-shadow h-full cursor-pointer hover:border-primary/50">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{initiative.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground mb-4">{initiative.description}</CardDescription>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <span>Learn More</span>
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
