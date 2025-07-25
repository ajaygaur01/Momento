
import { useState, useEffect } from "react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"
import {
  Menu,
  X,
  Film,
  Sparkles,
  Headphones,
  Award,
  Users,
  Monitor,
  Upload,
  Edit,
  Eye,
  Download,
  Star,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  MessageCircle,
  Zap,
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
        console.log(counters)
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
      title: "REELS & SHORTS",
      icon: <Film className="w-8 h-8" />,
      image: "/john.jpg",
      services: ["TREND-BASED EDITS", "3-SECOND HOOKS", "VIRAL FORMATS", "PLATFORM OPTIMIZATION", "QUICK TURNAROUNDS"],
      gradient: "from-red-600/20 to-pink-600/20",
    },
    {
      title: "PROMO VIDEOS & ADS",
      icon: <Sparkles className="w-8 h-8" />,
      image: "/spi.jpg",
      services: [
        "CONVERSION-FOCUSED",
        "MULTI-PLATFORM READY",
        "BRAND CONSISTENT",
        "CTA OPTIMIZATION",
        "PERFORMANCE DRIVEN",
      ],
      gradient: "from-blue-600/20 to-cyan-600/20",
    },
    {
      title: "CONTENT REPURPOSING",
      icon: <Headphones className="w-8 h-8" />,
      image: "/code.jpg",
      services: ["LONG-FORM TO CLIPS", "MULTI-FORMAT DELIVERY", "BATCH PROCESSING", "STORY ARCS", "ENGAGEMENT HOOKS"],
      gradient: "from-green-600/20 to-emerald-600/20",
    },
  ]

  const categories = [
    { name: "Influencer Content", image: "/placeholder.svg?height=200&width=300" },
    { name: "Marketing Teams", image: "/placeholder.svg?height=200&width=300" },
    { name: "YouTube Creators", image: "/placeholder.svg?height=200&width=300" },
    { name: "Personal Brands", image: "/placeholder.svg?height=200&width=300" },
    { name: "Coaches & Founders", image: "/placeholder.svg?height=200&width=300" },
    { name: "Podcast Clips", image: "/placeholder.svg?height=200&width=300" },
    { name: "Thought Leadership", image: "/placeholder.svg?height=200&width=300" },
    { name: "Course Content", image: "/placeholder.svg?height=200&width=300" },
  ]

  const testimonials = [
    {
      name: "@influencer.name",
      role: "CONTENT CREATOR",
      company: "Personal Brand",
      rating: 5,
      text: "They saved us 10+ hours a week — now our content is consistent and impactful. Game changer for my brand!",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Digital Agency Pro",
      role: "MARKETING DIRECTOR",
      company: "Digital Marketing Agency",
      rating: 5,
      text: "Our conversions doubled after using their ad creatives. Insane quality! The ROI speaks for itself.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Coach Sarah",
      role: "BUSINESS COACH",
      company: "Online Coaching Business",
      rating: 5,
      text: "From one long video to 20 engaging clips - they help me stay consistent across all platforms effortlessly.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  const workflowSteps = [
    {
      step: "1",
      title: "UPLOAD YOUR CONTENT",
      description: "SEND US YOUR RAW FOOTAGE & BRIEF",
      icon: <Upload className="w-8 h-8" />,
    },
    {
      step: "2",
      title: "WE CRAFT & EDIT",
      description: "TREND-AWARE EDITING WITH PURPOSE",
      icon: <Edit className="w-8 h-8" />,
    },
    {
      step: "3",
      title: "REVIEW & REVISE",
      description: "UNLIMITED REVISIONS UNTIL PERFECT",
      icon: <Eye className="w-8 h-8" />,
    },
    {
      step: "4",
      title: "PUBLISH & GROW",
      description: "SCROLL-STOPPING CONTENT READY TO GO",
      icon: <Download className="w-8 h-8" />,
    },
  ]

  const faqs = [
    {
      question: "How fast is your turnaround time?",
      answer:
        "We deliver most projects within 24-72 hours. Rush orders can be completed same-day for an additional fee. Our dedicated editors ensure quality without compromising speed.",
    },
    {
      question: "Do you really offer unlimited revisions?",
      answer:
        "Yes! On our monthly plans, you get unlimited revisions until you're 100% satisfied. We want your content to be perfect and perform well.",
    },
    {
      question: "What platforms do you optimize content for?",
      answer:
        "We create content optimized for Instagram Reels, TikTok, YouTube Shorts, LinkedIn, Twitter, Facebook, and any custom specifications you need.",
    },
    {
      question: "Can you handle multiple content creators?",
      answer:
        "We work with agencies, teams, and multi-creator brands. Each creator gets a dedicated editor who understands their unique style and audience.",
    },
    {
      question: "How do you stay on top of trends?",
      answer:
        "Our creative team constantly monitors trending formats, sounds, and editing styles across all platforms. We adapt quickly to ensure your content stays relevant and engaging.",
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
                MOMENTO<span className="text-red-500">.BUZZ</span>
                <div className="text-xs text-gray-400 font-normal">Craft moments that move</div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {[
                {
                  name: "SERVICES",
                  action: () => document.getElementById("services-section")?.scrollIntoView({ behavior: "smooth" }),
                },
                {
                  name: "PORTFOLIO",
                  action: () => document.getElementById("portfolio-section")?.scrollIntoView({ behavior: "smooth" }),
                },
                {
                  name: "FAQ",
                  action: () => document.getElementById("faq-section")?.scrollIntoView({ behavior: "smooth" }),
                },
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
                GET FREE DEMO
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
                {
                  name: "SERVICES",
                  action: () => {
                    setIsMenuOpen(false)
                    document.getElementById("services-section")?.scrollIntoView({ behavior: "smooth" })
                  },
                },
                {
                  name: "PORTFOLIO",
                  action: () => {
                    setIsMenuOpen(false)
                    document.getElementById("portfolio-section")?.scrollIntoView({ behavior: "smooth" })
                  },
                },
                {
                  name: "FAQ",
                  action: () => {
                    setIsMenuOpen(false)
                    document.getElementById("faq-section")?.scrollIntoView({ behavior: "smooth" })
                  },
                },
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
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-30">
            <source src="/video.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support the video format */}
            Your browser does not support the video tag.
          </video>
          {/* Video overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black/50 to-gray-900/50"></div>
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          </div>
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-red opacity-10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl font-black uppercase leading-tight tracking-wider">
                  WE DON'T JUST EDIT
                  <br />
                  VIDEOS. WE{" "}
                  <span className="text-transparent bg-gradient-to-r from-red-500 to-red-600 bg-clip-text">
                    CRAFT MOMENTS
                  </span>
                  <br />
                  THAT MOVE.
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  From Reels to Promos — we help creators and agencies turn raw clips into scroll-stopping content.
                </p>
                <p className="text-lg text-red-400 font-semibold">Every Frame. A Feeling.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-10 py-4 text-lg rounded-full font-bold shadow-2xl hover:shadow-red-500/25 transition-all duration-500 hover:scale-105 glow-red">
                  GET A FREE DEMO
                  <Zap className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-red-500 text-red-500 hover:bg-red-500/10 px-10 py-4 text-lg rounded-full font-bold transition-all duration-500 hover:scale-105 bg-transparent"
                >
                  VIEW OUR WORK
                </Button>
              </div>
              {/* Contact Options */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                {[
                  { icon: <Phone className="w-5 h-5" />, label: "CALL US" },
                  { icon: <MessageCircle className="w-5 h-5" />, label: "CHAT NOW" },
                  { icon: <Mail className="w-5 h-5" />, label: "EMAIL" },
                  { icon: <Zap className="w-5 h-5" />, label: "24-72HR" },
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
            
            <div className="relative animate-slide-in-right z-20">
              <div className="relative group">
                <div className="relative overflow-hidden">
                  <img src="/front.png" alt="Content Portfolio 2025" className="w-full max-h-[600px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section id="stats-section" className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="absolute inset-0 bg-grid-red opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black uppercase mb-6 tracking-wider">
              BUILT FOR CREATORS WHO WANT
              <br />
              MORE THAN JUST <span className="text-red-500">LIKES</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              No editing apps. No burnout. Just pro-level content, done for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Influencers & Personal Brands",
                description: "Grow faster with standout content",
                icon: <Users className="w-8 h-8" />,
              },
              {
                title: "Marketing Teams",
                description: "Scale with reliable, on-brand edits",
                icon: <Award className="w-8 h-8" />,
              },
              {
                title: "Coaches, Founders & YouTubers",
                description: "Repurpose, engage, convert",
                icon: <Monitor className="w-8 h-8" />,
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-red-500/10">
                  <div className="text-red-500 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-black text-white mb-3 uppercase tracking-wide">{item.title}</h3>
                  <p className="text-gray-400 font-semibold">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "24-72",
                suffix: "HRS",
                label: "Fast Turnarounds",
                icon: <Award className="w-8 h-8" />,
              },
              {
                number: "∞",
                suffix: "",
                label: "Unlimited Revisions",
                icon: <Users className="w-8 h-8" />,
              },
              { number: "1:1", suffix: "", label: "Dedicated Editors", icon: <Monitor className="w-8 h-8" /> },
              {
                number: "100%",
                suffix: "",
                label: "Trend-Aware Creatives",
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
              WHAT WE <span className="text-red-500">EDIT</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We edit with purpose — to help you stand out, save time, and stay consistent.
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

      {/* Portfolio Categories */}
      <section id="portfolio-section" className="py-32 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black uppercase mb-6 tracking-wider">
              SEE WHAT WE'VE
              <br />
              <span className="text-red-500">CREATED</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From client reels to YouTube shorts - watch our portfolio in action
            </p>
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

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-10 py-4 text-lg rounded-full font-bold shadow-2xl hover:shadow-red-500/25 transition-all duration-500 hover:scale-105 glow-red">
              WATCH FULL PORTFOLIO
            </Button>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-red opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="text-8xl font-black text-gray-800 mb-8 select-none">✨</div>
            <h2 className="text-5xl font-black uppercase mb-6 tracking-wider">
              HOW IT <span className="text-red-500">WORKS</span>
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
            <div className="text-sm text-red-400 font-bold uppercase tracking-wider mb-4">CLIENT SUCCESS</div>
            <h2 className="text-5xl font-black uppercase mb-6 tracking-wider">
              WHAT OUR CLIENTS SAY
              <br />
              ABOUT MOMENTO<span className="text-red-500">.BUZZ</span>
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
                    <div className="font-black text-white text-lg uppercase tracking-wide mb-1">{testimonial.name}</div>
                    <div className="text-red-400 text-sm font-bold">{testimonial.role}</div>
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
            READY TO CREATE
            <br />
            <span className="text-red-500">SCROLL-STOPPING</span> CONTENT?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Experience our professional content creation services with no commitment. See the quality and engagement that sets your brand apart.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-12 py-6 text-xl rounded-full font-black shadow-2xl hover:shadow-red-500/25 transition-all duration-500 hover:scale-110 glow-red uppercase tracking-wider">
              GET FREE DEMO NOW
            </Button>
            <Button
              variant="outline"
              className="border-2 border-red-500 text-red-500 hover:bg-red-500/10 px-12 py-6 text-xl rounded-full font-black transition-all duration-500 hover:scale-110 bg-transparent uppercase tracking-wider"
            >
              WATCH PORTFOLIO
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-black to-gray-900 py-20 border-t border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <div className="text-3xl font-black tracking-wider mb-6">
                MOMENTO<span className="text-red-500">.BUZZ</span>
                <div className="text-sm text-gray-400 font-normal">Craft moments that move</div>
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Professional content creation and video editing services for creators, agencies, and brands who want to stand out in the digital world.
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
                {["Reels & Shorts", "Promo Videos", "Content Repurposing", "YouTube Editing", "Brand Content"].map(
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
                  <MessageCircle className="w-5 h-5 text-red-500" />
                  <span className="font-semibold">24-72 Hour Turnaround</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-red-500" />
                  <span className="font-semibold">hello@momento.buzz</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <span className="font-semibold">Global Creative Services</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-red-500/20 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} MOMENTO.BUZZ. All rights reserved. Every Frame. A Feeling.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Chat Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button 
          className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-110 animate-bounce glow-red"
          onClick={() => {
            window.location.href = "https://wa.me/919001120595?text=Hello%20Momento.buzz,%20I%20want%20to%20create%20scroll-stopping%20content!";
          }}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  )
}