"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Initiatives", href: "#initiatives" },
    { label: "Events", href: "#events" },
    { label: "Team", href: "#team" },
    { label: "Join Us", href: "#join" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image src="/yfc-logo.png" alt="YFC Logo" width={40} height={40} className="w-10 h-10" />
            <span className="font-bold text-xl hidden sm:inline">Youth for Change</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-secondary transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Button 
            className="hidden md:block bg-secondary text-secondary-foreground hover:bg-secondary/90"
            onClick={() => window.open('https://docs.google.com/forms/d/e/YOUR_CONTACT_FORM_ID/viewform', '_blank')}
          >
            Contact Us
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 hover:bg-primary/80 rounded transition-colors text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">Contact Us</Button>
          </nav>
        )}
      </div>
    </header>
  )
}
