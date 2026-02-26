"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function InitiativeActions() {
  const router = useRouter()

  const handleBackToHome = () => {
    router.push("/#initiatives")
  }

  const handleGetInvolved = () => {
    router.push("/#join")
  }

  return (
    <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
      <Button
        onClick={handleGetInvolved}
        className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
      >
        Get Involved
      </Button>

      <Button onClick={handleBackToHome} variant="outline" className="px-8 py-6 text-lg bg-transparent">
        Back to Home
      </Button>
    </div>
  )
}
