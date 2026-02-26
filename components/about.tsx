export default function About() {
  const stats = [
    { number: "2020", label: "Established" },
    { number: "5+", label: "Initiatives" },
    { number: "6+", label: "Years Active" },
  ]

  return (
    <section id="about" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">About Youth for Change</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Youth For Change – Kathmandu University (YFC-KU) is a student-led organization established in 2020 with the goal of creating meaningful social impact through youth engagement, intellectual exchange, advocacy, and collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-6 rounded-lg bg-card border border-border">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              To promote literacy, inclusivity, youth empowerment, and financial awareness through impactful programs, collaborations, and community engagement.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              To create transformative opportunities for youth, foster innovation and collaboration, and build a more inclusive and empowered community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
