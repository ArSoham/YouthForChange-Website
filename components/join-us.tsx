"use client"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function JoinUs() {
  const googleFormURL = "https://docs.google.com/forms/d/e/YOUR_GET_INVOLVED_FORM_ID/viewform"

  const handleFormRedirect = () => {
    window.open(googleFormURL, "_blank")
  }

  return (
    <section id="join" className="py-20 sm:py-32 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Join the Movement</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Are you passionate about social change? Join Youth for Change and be part of a community of young leaders
            making a difference.
          </p>
        </div>

        <div className="bg-background text-foreground rounded-lg p-8 sm:p-12 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Get Involved</h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Fill out our form to learn more about membership and opportunities to contribute to Youth for Change.
          </p>
          <Button
            onClick={handleFormRedirect}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg inline-flex items-center gap-2"
          >
            Open Registration Form
            <ExternalLink className="w-4 h-4" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">Form will open in a new tab</p>
        </div>
      </div>
    </section>
  )
}
