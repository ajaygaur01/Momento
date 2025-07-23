"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { Linkedin, Twitter, Instagram, Mail, Quote } from "lucide-react"
//import Image from "next/image"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const teamMembers = [
    {
      name: "Ankit Sharma",
      role: "CEO",
      title: "Chief Executive Officer",
      quote: "Crafting stories with cinematic precision.",
      description:
        "Visionary leader with 15+ years in post-production, driving innovation and creative excellence across every project.",
      image: "/ankit.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
        email: "alexandra@momento.com",
      },
      animationDirection: "left",
      delay: "delay-200",
    },
    {
      name: "Sumit Sharma",
      role: "CO-FOUNDER",
      title: "Creative Director",
      quote: "Innovation through creative vision.",
      description:
        "Award-winning creative technologist specializing in cutting-edge VFX and immersive storytelling experiences.",
      image: "/sumit.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
        email: "marcus@momento.com",
      },
      animationDirection: "top",
      delay: "delay-400",
    },
    {
      name: "Shubham Sharma",
      role: "CMO",
      title: "Chief Marketing Officer",
      quote: "Amplifying impact through strategic branding.",
      description:
        "Brand strategist and audience engagement expert, connecting creative work with meaningful market impact.",
      image: "/shubh.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
        email: "sarah@momento.com",
      },
      animationDirection: "right",
      delay: "delay-600",
    },
  ]

  const getAnimationClass = (direction: string) => {
    switch (direction) {
      case "left":
        return isVisible ? "animate-slide-in-left" : "opacity-0 -translate-x-20"
      case "top":
        return isVisible ? "animate-slide-in-top" : "opacity-0 -translate-y-20"
      case "right":
        return isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-20"
      default:
        return isVisible ? "animate-fade-in" : "opacity-0"
    }
  }

  return (
    <section ref={sectionRef} className="py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-black to-gray-900/50"></div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-grid-red opacity-5"></div>

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>

        {/* Electric Lines */}
        <div className="absolute top-0 left-1/2 w-px h-32 bg-gradient-to-b from-red-500/50 to-transparent"></div>
        <div className="absolute bottom-0 right-1/3 w-px h-24 bg-gradient-to-t from-red-500/30 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h2
              className={`text-6xl font-black uppercase tracking-wider mb-6 transition-all duration-1000 ${
                isVisible ? "animate-glow-text opacity-100" : "opacity-0"
              }`}
            >
              <span className="text-white">Meet the </span>
              <span className="text-transparent bg-gradient-to-r from-red-500 to-red-600 bg-clip-text neon-text">
                Visionaries
              </span>
            </h2>

            {/* Animated Red Line */}
            <div
              className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent transition-all duration-1000 ${
                isVisible ? "w-full opacity-100" : "w-0 opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-shimmer"></div>
            </div>
          </div>

          <p
            className={`text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mt-8 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            At <span className="text-red-400 font-semibold">Momento</span>, our strength lies in our people — creative
            technologists who live and breathe post-production craft. From cutting-edge VFX to emotion-driven editorial
            work, meet the minds behind the lens.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${member.delay} ${getAnimationClass(member.animationDirection)}`}
            >
              <Card className="group relative bg-gradient-to-br from-gray-900/80 to-black/90 border border-red-500/20 hover:border-red-500/60 transition-all duration-700 hover:scale-105 hover:-translate-y-4 shadow-2xl hover:shadow-red-500/20 overflow-hidden glass-card">
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Electric Border Animation */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-lg border border-red-500/30 animate-electric-pulse"></div>
                </div>

                <CardContent className="p-0 relative">
                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                    {/* Role Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-500/90 text-white border-red-400 font-black text-xs uppercase tracking-wider px-3 py-1 glow-red backdrop-blur-sm">
                        {member.role}
                      </Badge>
                    </div>

                    {/* Quote Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-start space-x-2 mb-2">
                        <Quote className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <p className="text-white font-medium italic text-sm leading-relaxed">{member.quote}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-black text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-red-400 font-semibold text-sm uppercase tracking-wider mb-3">{member.title}</p>
                      <p className="text-gray-300 leading-relaxed text-sm">{member.description}</p>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-3">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-10 h-10 rounded-full bg-gray-800/50 hover:bg-red-500/20 border border-gray-700 hover:border-red-500/50 text-gray-400 hover:text-red-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/25 group/social"
                      >
                        <Linkedin className="w-4 h-4 group-hover/social:animate-pulse" />
                      </Button>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-10 h-10 rounded-full bg-gray-800/50 hover:bg-red-500/20 border border-gray-700 hover:border-red-500/50 text-gray-400 hover:text-red-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/25 group/social"
                      >
                        <Twitter className="w-4 h-4 group-hover/social:animate-pulse" />
                      </Button>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-10 h-10 rounded-full bg-gray-800/50 hover:bg-red-500/20 border border-gray-700 hover:border-red-500/50 text-gray-400 hover:text-red-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/25 group/social"
                      >
                        <Instagram className="w-4 h-4 group-hover/social:animate-pulse" />
                      </Button>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-10 h-10 rounded-full bg-gray-800/50 hover:bg-red-500/20 border border-gray-700 hover:border-red-500/50 text-gray-400 hover:text-red-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/25 group/social"
                      >
                        <Mail className="w-4 h-4 group-hover/social:animate-pulse" />
                      </Button>
                    </div>
                  </div>

                  {/* Hover Glow Lines */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div
          className={`mt-20 text-center transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center space-x-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-red-500"></div>
            <div className="text-red-400 font-semibold text-sm uppercase tracking-wider">Momento Creative Team</div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-red-500"></div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
