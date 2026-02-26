export default function CoreAreas() {
  const areas = [
    {
      title: "Literacy Promotion",
      description:
        "Promoting the love for books and intellectual exchange through Book Talk Sessions and literary engagement programs.",
      color: "bg-blue-100 text-blue-900",
    },
    {
      title: "Inclusivity & Diversity",
      description:
        "Celebrating diversity and advocating for inclusivity to foster a safe, accepting, and empowered campus community.",
      color: "bg-green-100 text-green-900",
    },
    {
      title: "Legal & Financial Awareness",
      description:
        "Enhancing students' understanding of legal excellence, financial markets, investment concepts, and economic awareness.",
      color: "bg-yellow-100 text-yellow-900",
    },
    {
      title: "Youth Empowerment",
      description: "Creating transformative opportunities for youth through partnerships, collaborations, and community engagement.",
      color: "bg-emerald-100 text-emerald-900",
    },
  ]

  return (
    <section id="core-areas" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Core Areas of Focus</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We concentrate our efforts on key sectors where youth can create the most meaningful impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {areas.map((area, idx) => (
            <div key={idx} className="p-8 rounded-lg border border-border bg-card hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 rounded-lg ${area.color} flex items-center justify-center mb-4`}>
                <span className="font-bold">0{idx + 1}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">{area.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
