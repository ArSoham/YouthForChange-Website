"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Team() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const president = {
    image: "/abstract-placeholder-design.jpg",
    name: "President",
    role: "Club President",
    bio: "Leading Youth For Change – Kathmandu University with vision and dedication.",
  }

  const teamMembers = [
    {
      image: "/abstract-placeholder-design.jpg",
      name: "Vice President",
      role: "Vice President",
      bio: "Supporting leadership and strategic initiatives.",
    },
    {
      image: "/abstract-placeholder-design.jpg",
      name: "Treasurer",
      role: "Treasurer",
      bio: "Managing finances and resources.",
    },
    {
      image: "/abstract-placeholder-design.jpg",
      name: "SOE Representative",
      role: "SOE Representative",
      bio: "Representing students in organizational matters.",
    },
    {
      image: "/abstract-placeholder-design.jpg",
      name: "Committee Member 1",
      role: "Committee Member",
      bio: "Contributing to organizational success.",
    },
    {
      image: "/abstract-placeholder-design.jpg",
      name: "Committee Member 2",
      role: "Committee Member",
      bio: "Working towards shared goals.",
    },
    {
      image: "/abstract-placeholder-design.jpg",
      name: "Committee Member 3",
      role: "Committee Member",
      bio: "Dedicated to the cause.",
    },
    {
      image: "/abstract-placeholder-design.jpg",
      name: "Committee Member 4",
      role: "Committee Member",
      bio: "Supporting organizational initiatives.",
    },
    {
      image: "/abstract-placeholder-design.jpg",
      name: "Committee Member 5",
      role: "Committee Member",
      bio: "Engaged and committed member.",
    },
    {
      image: "/abstract-placeholder-design.jpg",
      name: "Committee Member 6",
      role: "Committee Member",
      bio: "Contributing to community impact.",
    },
    {
      image: "/abstract-placeholder-design.jpg",
      name: "Committee Member 7",
      role: "Committee Member",
      bio: "Part of the core team.",
    },
    {
      image: "/abstract-placeholder-design.jpg",
      name: "Committee Member 8",
      role: "Committee Member",
      bio: "Working with passion.",
    },
    {
      image: "/abstract-placeholder-design.jpg",
      name: "Committee Member 9",
      role: "Committee Member",
      bio: "Supporting the mission.",
    },
  ]

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      if (direction === "left") {
        scrollContainerRef.current.scrollLeft -= scrollAmount
      } else {
        scrollContainerRef.current.scrollLeft += scrollAmount
      }
    }
  }

  return (
    <section id="team" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Committee</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated committee members driving Youth For Change – Kathmandu University's mission and vision.
          </p>
        </div>

        {/* President Section */}
        <div className="mb-12 max-w-sm mx-auto">
          <Card className="border-border overflow-hidden hover:shadow-lg transition-shadow border-2 border-primary">
            <div className="w-full h-48 bg-muted flex items-center justify-center">
              <Image
                src={president.image || "/placeholder.svg"}
                alt={president.name}
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-1">{president.name}</h3>
              <p className="text-primary font-semibold text-base mb-3">{president.role}</p>
              <p className="text-muted-foreground text-sm">{president.bio}</p>
            </CardContent>
          </Card>
        </div>

        {/* Scrollable Team Members */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/3 z-10 bg-primary/80 hover:bg-primary text-white p-2 rounded-full -ml-4"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollBehavior: "smooth" }}
          >
            {teamMembers.map((member, idx) => (
              <div key={idx} className="flex-shrink-0 w-72">
                <Card className="border-border overflow-hidden hover:shadow-lg transition-shadow h-full">
                  <div className="w-full h-48 bg-muted flex items-center justify-center">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/3 z-10 bg-primary/80 hover:bg-primary text-white p-2 rounded-full -mr-4"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
