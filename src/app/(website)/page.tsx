'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PricingSection } from '@/components/home/pricing-section'

export default function Page() {
  const profiles = [
    { id: 1, image: '/placeholder.svg?height=400&width=400' },
    { id: 2, image: '/placeholder.svg?height=400&width=400' },
    { id: 3, image: '/placeholder.svg?height=400&width=400' },
    { id: 4, image: '/placeholder.svg?height=400&width=400' },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-purple-900">
      {/* Grid Background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"
        aria-hidden="true"
      />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-white rounded-lg" />
            <span className="text-xl font-semibold text-white">Slide</span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-gray-200 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-200 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="#about" className="text-gray-200 hover:text-white transition-colors">
              About
            </Link>
            <Button variant="secondary" className="bg-white text-black hover:bg-gray-100">
              Login
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            Transform Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
              Instagram Engagement
            </span>{' '}
            with Slide
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Slide revolutionizes how you connect with your audience on Instagram. Automate responses and boost engagement effortlessly, turning interactions into valuable business opportunities.
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Started
            </Button>
            <Button size="lg" variant="secondary">
              Learn More
            </Button>
          </div>
        </div>

        {/* Profile Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="relative aspect-square overflow-hidden rounded-xl transform hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={profile.image}
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </main>
      <PricingSection />

    </div>

  )
}

