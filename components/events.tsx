import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Events() {
  const events = [
    {
      date: "August 14 & September 7, 2023",
      title: "Book Talk Sessions",
      location: "Kathmandu University",
      description:
        "Students share insights from recently read books, promoting literacy and intellectual exchange across departments.",
      image: "/placeholder.svg",
    },
    {
      date: "June 27, 2023",
      title: "Pride Parade",
      location: "28 Kilo Chowk to KU Central Campus",
      description: "Celebrating diversity and advocating for inclusivity, acceptance, and equality on campus.",
      image: "/placeholder.svg",
    },
    {
      date: "June 27, 2023",
      title: "Flash Mob",
      location: "KU Fountain",
      description: "Creative flash mob performance at the fountain celebrating diversity and campus community spirit.",
      image: "/placeholder.svg",
    },
  ]

  return (
    <section id="events" className="py-20 sm:py-32 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Events</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us at our events and be part of the movement for change.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <Card key={idx} className="overflow-hidden border-border hover:shadow-lg transition-shadow">
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                width={1200}
                height={192}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  {event.date}
                </div>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-2 text-sm text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  {event.location}
                </div>
                <CardDescription className="mb-4">{event.description}</CardDescription>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
