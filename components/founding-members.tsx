import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function FoundingMembers() {
  const foundingMembers = [
    {
      image: "/abstract-placeholder-design.jpg",
      name: "Youth For Change",
      role: "Established 2020",
      bio: "A student-led organization dedicated to creating meaningful social impact through youth engagement and collaboration.",
    },
    {
      image: "/abstract-placeholder-design.jpg",
      name: "Supported by SWD",
      role: "Kathmandu University",
      bio: "Operating under the Student Welfare Department, fostering transformative opportunities for youth.",
    },
  ]

  return (
    <section id="founding-members" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Founders</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Youth For Change – Kathmandu University operates as a student-led collective with support from the university community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {foundingMembers.map((member, idx) => (
            <Card key={idx} className="border-border overflow-hidden hover:shadow-lg transition-shadow">
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
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
