"use client"

import { useState, useEffect } from "react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"
import {
  Star,
  Menu,
  X,
  Upload,
  Edit,
  Eye,
  Download,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Zap,
  Film,
  Headphones,
  Monitor,
  Sparkles,
  Award,
  Users,
} from "lucide-react"

export default function VideoEditingLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [counters, setCounters] = useState({
    experience: 0,
    clients: 0,
    projects4k: 0,
    totalProjects: 0,
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Animated counters
  useEffect(() => {
    const animateCounters = () => {
      const targets = { experience: 15, clients: 500, projects4k: 120, totalProjects: 500 }
      const duration = 2000
      const steps = 60

      Object.keys(targets).forEach((key) => {
        const target = targets[key as keyof typeof targets]
        const increment = target / steps
        let current = 0

        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            current = target
            clearInterval(timer)
          }
          setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }))
        }, duration / steps)
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters()
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    const statsElement = document.getElementById("stats-section")
    if (statsElement) observer.observe(statsElement)

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      title: "VIDEO SERVICES",
      icon: <Film className="w-8 h-8" />,
      image: "/john.jpg",
      services: ["COLOR CORRECTION", "TITLING", "SUBTITLING", "EDITORIAL", "STORYBOARDING"],
      gradient: "from-red-600/20 to-pink-600/20",
    },
    {
      title: "VISUAL EFFECTS",
      icon: <Sparkles className="w-8 h-8" />,
      image: "/spi.jpg",
      services: ["ROTOSCOPING", "CHROMA REMOVAL", "MOTION GRAPHICS", "BEAUTY CLEANUP", "ANIMATION"],
      gradient: "from-blue-600/20 to-cyan-600/20",
    },
    {
      title: "Web and App Development",
      icon: <Headphones className="w-8 h-8" />,
      image: "/code.jpg",
      services: ["FullStack Development", "Mobile apps Development", "UI/UX"],
      gradient: "from-green-600/20 to-emerald-600/20",
    },
  ]

  const categories = [
    { name: "Corporate Video", image: "/placeholder.svg?height=200&width=300" },
    { name: "Product Demo", image: "/placeholder.svg?height=200&width=300" },
    { name: "Interview", image: "/placeholder.svg?height=200&width=300" },
    { name: "Sales Pitch", image: "/placeholder.svg?height=200&width=300" },
    { name: "VR Content", image: "/placeholder.svg?height=200&width=300" },
    { name: "Testimonial", image: "/placeholder.svg?height=200&width=300" },
    { name: "Sports", image: "/placeholder.svg?height=200&width=300" },
    { name: "Real Estate", image: "/placeholder.svg?height=200&width=300" },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "GRAPHICS MANAGER",
      company: "Electronics Company, South Korea",
      rating: 5,
      text: "Quick turnaround and quality of services has helped my company reap immense profits. Support level and understanding have overwhelmed me.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Michael Chen",
      role: "CHIEF PRODUCTION MANAGER",
      company: "Pharmaceutical Company, Netherlands",
      rating: 5,
      text: "From companies across the globe, different quotes, the quality during the trial period helped us decide our new partner. Quality was exceptional.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Emma Davis",
      role: "PRODUCTION MANAGER",
      company: "Educational Video Company, UK",
      rating: 5,
      text: "It's wonderful, thank you - a really good edit. I know it can't be easy working on these files when there's so many mistakes and retakes!",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  const workflowSteps = [
    {
      step: "1",
      title: "UPLOAD VIA FTP",
      description: "YOU GIVE THE BRIEF & UPLOAD THE FILE VIA FTP",
      icon: <Upload className="w-8 h-8" />,
    },
    {
      step: "2",
      title: "VIDEO EDITING PROCESS",
      description: "WE EDIT THE VIDEO ACCORDING TO THE BRIEF",
      icon: <Edit className="w-8 h-8" />,
    },
    {
      step: "3",
      title: "REVIEW AND APPROVAL",
      description: "YOU REVIEW THE FINAL OUTPUT FOR APPROVAL",
      icon: <Eye className="w-8 h-8" />,
    },
    {
      step: "4",
      title: "DOWNLOAD FINAL OUTPUT",
      description: "EDITED FILE READY TO DOWNLOAD VIA FTP",
      icon: <Download className="w-8 h-8" />,
    },
  ]

  const faqs = [
    {
      question: "What video formats do you support?",
      answer:
        "We support all major video formats including MP4, MOV, AVI, MKV, ProRes, and many more. Our team works with industry-standard software to ensure compatibility.",
    },
    {
      question: "What resolution can you work with?",
      answer:
        "We handle everything from SD to 8K resolution. Our team specializes in 4K projects and can upscale or downscale as needed for your specific requirements.",
    },
    {
      question: "What software do you use?",
      answer:
        "We use professional software including Adobe Premiere Pro, After Effects, DaVinci Resolve, Avid Media Composer, and other industry-standard tools.",
    },
    {
      question: "Do you provide color grading services?",
      answer:
        "Yes, we offer professional color grading and color correction services to enhance the visual appeal and maintain consistency throughout your video content.",
    },
    {
      question: "What VFX capabilities do you have?",
      answer:
        "Our VFX team specializes in compositing, motion graphics, 3D animation, green screen removal, rotoscoping, and advanced visual effects using industry-leading software.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-black/90 backdrop-blur-xl border-b border-red-500/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="text-2xl font-black tracking-wider">
                MOM<span className="text-red-500">ENTO</span>
                <div className="text-xs text-gray-400 font-normal">Your editor on-call</div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: "SERVICES", action: () => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' }) },
                { name: "FAQ", action: () => document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' }) },
                { name: "ABOUT US", action: () => window.location.href = '/about' }
              ].map((item) => (
                <div key={item.name} className="group relative">
                  <button 
                    onClick={item.action}
                    className="text-white hover:text-red-500 transition-colors duration-300 font-semibold"
                  >
                    {item.name}
                  </button>
                </div>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-6 py-2 rounded-full font-bold transition-all duration-300 bg-transparent">
                +91 90011 20595
              </Button>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-red-500/20">
            <div className="px-4 pt-4 pb-6 space-y-4">
              {[
                { name: "SERVICES", action: () => { setIsMenuOpen(false); document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' }); } },
                { name: "FAQ", action: () => { setIsMenuOpen(false); document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' }); } },
                { name: "ABOUT US", action: () => { setIsMenuOpen(false); window.location.href = '/about'; } }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={item.action}
                  className="block w-full text-left px-4 py-3 text-white hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all duration-300 font-semibold"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-gray-900"></div>
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-red opacity-10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl font-black uppercase leading-tight tracking-wider">
                  PROFESSIONAL VIDEO
                  <br />
                  EDITING &{" "}
                  <span className="text-transparent bg-gradient-to-r from-red-500 to-red-600 bg-clip-text">
                  WEBAPP CREATION
                  </span>
                  <br />
                  SERVICES
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  Momento is a leading video editing and Development outsourcing partner to video content
                  creators and production houses worldwide
                </p>

                <p className="text-lg text-red-400 font-semibold">Your on-call editor for cinematic precision.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-10 py-4 text-lg rounded-full font-bold shadow-2xl hover:shadow-red-500/25 transition-all duration-500 hover:scale-105 glow-red">
                  GET FREE TRIAL
                  <Zap className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-red-500 text-red-500 hover:bg-red-500/10 px-10 py-4 text-lg rounded-full font-bold transition-all duration-500 hover:scale-105 bg-transparent"
                >
                  VIEW PORTFOLIO
                </Button>
              </div>

              {/* Contact Options */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                {[
                  // { icon: <Phone className="w-5 h-5" />, label: "CONTACT" },
                  { icon: <Phone className="w-5 h-5" />, label: "+91 90011 20595" },
                  // { icon: <MessageCircle className="w-5 h-5"/>, label: "CHAT" },
                  { icon: <Mail className="w-5 h-5" />, label: "EMAIL" },
                ].map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="flex flex-col items-center p-4 hover:bg-red-500/10 rounded-lg transition-all duration-300 group"
                  >
                    <div className="text-red-500 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <span className="text-xs mt-2 text-gray-400 group-hover:text-white transition-colors duration-300">
                      {item.label}
                    </span>
                  </Button>
                ))}
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="relative group">
                <div className="relative overflow-hidden">
                  <img
                    src="/front.png"
                    alt="Showreel 2025"
                    className="w-full max-h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="absolute inset-0 bg-grid-red opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: counters.experience,
                suffix: "+",
                label: "Years of Experience",
                icon: <Award className="w-8 h-8" />,
              },
              {
                number: counters.clients,
                suffix: "+",
                label: "Satisfied Clients",
                icon: <Users className="w-8 h-8" />,
              },
              { number: counters.projects4k, suffix: "+", label: "4K Projects", icon: <Monitor className="w-8 h-8" /> },
              {
                number: counters.totalProjects,
                suffix: "+",
                label: "Projects Completed",
                icon: <Film className="w-8 h-8" />,
              },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-red-500/10">
                  <div className="text-red-500 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-5xl font-black text-white mb-2 font-mono">
                    {stat.number}
                    {stat.suffix}
                  </div>
                  <div className="text-gray-400 font-semibold uppercase tracking-wider text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-red-500/5 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black uppercase mb-6 tracking-wider">
              OUR <span className="text-red-500">SERVICES</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Professional video editing and WebApp Creation services tailored to your needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group bg-gradient-to-br from-gray-900 to-black border border-red-500/20 hover:border-red-500/40 transition-all duration-700 hover:scale-105 shadow-2xl hover:shadow-red-500/10 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${service.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>
                </div>

                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-red-500 mr-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-black text-white group-hover:text-red-500 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {service.services.map((item, idx) => (
                      <div key={idx} className="flex items-center group/item">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3 group-hover/item:scale-150 transition-transform duration-300"></div>
                        <span className="text-gray-300 font-semibold tracking-wide group-hover/item:text-white transition-colors duration-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black uppercase mb-6 tracking-wider">
              SOME OF THE POPULAR
              <br />
              VIDEO CATEGORIES WE <span className="text-red-500">SUPPORT</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-red-500/20 hover:border-red-500/40 transition-all duration-500 hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/10 transition-colors duration-500"></div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-black text-white group-hover:text-red-400 transition-colors duration-300 uppercase tracking-wide">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-red opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="text-8xl font-black text-gray-800 mb-8 select-none">V</div>
            <h2 className="text-5xl font-black uppercase mb-6 tracking-wider">
              HOW DOES THIS <span className="text-red-500">WORK?</span>
            </h2>
          </div>

          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500/50 to-transparent transform -translate-y-1/2"></div>

            <div className="grid lg:grid-cols-4 gap-8">
              {workflowSteps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-red-500/10 text-center">
                    {/* Step Number */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg">
                        {step.step}
                      </div>
                    </div>

                    <div className="pt-8">
                      <div className="text-red-500 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-black text-white mb-4 uppercase tracking-wide">{step.title}</h3>
                      <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Step Label */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-red-500/20 text-red-400 border-red-500/40 font-bold">STEP</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="text-sm text-red-400 font-bold uppercase tracking-wider mb-4">CLIENTS FEEDBACK</div>
            <h2 className="text-5xl font-black uppercase mb-6 tracking-wider">
              WHAT OUR CLIENTS SAY
              <br />
              ABOUT MOM <span className="text-red-500">ENTO</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 border border-red-500/20 hover:border-red-500/40 transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-red-500/10"
              >
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current mx-1" />
                    ))}
                  </div>

                  <blockquote className="text-gray-300 mb-8 leading-relaxed italic">"{testimonial.text}"</blockquote>

                  <div className="text-center">
                    <div className="font-black text-white text-lg uppercase tracking-wide mb-1">{testimonial.role}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" className="py-32 bg-black relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black uppercase mb-6 tracking-wider">
              FREQUENTLY ASKED <span className="text-red-500">QUESTIONS</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-red-500/20 rounded-lg bg-gradient-to-br from-gray-900 to-black"
              >
                <AccordionTrigger className="px-6 py-4 text-white hover:text-red-400 font-bold text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
{/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-red-900/20 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-red-500/10 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-6xl font-black uppercase mb-8 tracking-wider">
            GET A FREE <span className="text-red-500">TRIAL</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Experience our professional video editing services with no commitment. See the quality and precision that
            sets us apart.
          </p>

          <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-12 py-6 text-xl rounded-full font-black shadow-2xl hover:shadow-red-500/25 transition-all duration-500 hover:scale-110 glow-red uppercase tracking-wider">
            START FREE TRIAL NOW
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-black to-gray-900 py-20 border-t border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <div className="text-3xl font-black tracking-wider mb-6">
                MOM<span className="text-red-500">ENTO</span>
                <div className="text-sm text-gray-400 font-normal">Your editor on-call</div>
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Professional video editing and post-production services for content creators and production houses
                worldwide.
              </p>
              <div className="flex space-x-4">
                {[Instagram, Twitter, Linkedin, Youtube].map((Icon, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-red-500 hover:bg-red-500/10 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-6 h-6" />
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-black text-lg mb-6 text-white uppercase tracking-wider">Services</h4>
              <ul className="space-y-4 text-gray-400">
                {["Video Editing", "Color Correction", "Visual Effects", "Audio Editing", "Motion Graphics"].map(
                  (item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-red-500 transition-colors duration-300 font-semibold">
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h4 className="font-black text-lg mb-6 text-white uppercase tracking-wider">Contact</h4>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-red-500" />
                  <span className="font-semibold">+91 90011 20595</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-red-500" />
                  <span className="font-semibold">info@videocaddy.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <span className="font-semibold">Global Services</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-red-500/20 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} MOMENTO. All rights reserved.</p>
          </div>
        </div>
      </footer> 
          {/* Sticky Chat Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-110 animate-bounce glow-red"
        onClick={() => {
          window.location.href = "https://wa.me/919001120595?text=Hello%20Momento,%20I%20would%20like%20to%20know%20more%20about%20your%20services.";
        }}
        
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  )
}    