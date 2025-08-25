import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Bot,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  TrendingUp,
  MessageSquare,
  Workflow,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Services — Asif Langrah",
  description:
    "Professional AI automation services including RAG systems, chatbots, workflow automation, and e-commerce integrations. Get expert AI solutions for your business.",
}

const services = [
  {
    icon: <Bot className="w-8 h-8" />,
    title: "RAG Systems Development",
    description:
      "Advanced Retrieval-Augmented Generation systems for intelligent document processing and knowledge management.",
    features: [
      "Custom knowledge base creation",
      "Multi-format document processing",
      "Semantic search implementation",
      "Real-time data retrieval",
      "Scalable vector databases",
    ],
    pricing: "Starting from $5,000",
    timeline: "4-8 weeks",
    color: "blue",
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "AI Chatbot Development",
    description: "Intelligent conversational agents for customer support, sales, and internal operations.",
    features: [
      "Multi-language support",
      "Sentiment analysis integration",
      "CRM system integration",
      "24/7 automated responses",
      "Human handoff protocols",
    ],
    pricing: "Starting from $3,000",
    timeline: "3-6 weeks",
    color: "purple",
  },
  {
    icon: <Workflow className="w-8 h-8" />,
    title: "Workflow Automation",
    description: "Streamline business processes with intelligent automation solutions and AI-powered decision making.",
    features: [
      "Process analysis & optimization",
      "Custom automation workflows",
      "API integrations",
      "Performance monitoring",
      "Scalable cloud deployment",
    ],
    pricing: "Starting from $4,000",
    timeline: "5-10 weeks",
    color: "green",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "E-commerce AI Integration",
    description:
      "Comprehensive AI solutions for online stores including recommendations, inventory management, and customer insights.",
    features: [
      "Product recommendation engines",
      "Dynamic pricing optimization",
      "Inventory forecasting",
      "Customer behavior analysis",
      "Multi-platform integration",
    ],
    pricing: "Starting from $6,000",
    timeline: "6-12 weeks",
    color: "orange",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "We analyze your business needs, current processes, and identify automation opportunities.",
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description: "Develop a comprehensive AI strategy with clear milestones and success metrics.",
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Build and rigorously test your AI solution with continuous feedback integration.",
  },
  {
    step: "04",
    title: "Deployment & Support",
    description: "Deploy your solution and provide ongoing support, monitoring, and optimization.",
  },
]

const getColorClasses = (color: string) => {
  switch (color) {
    case "blue":
      return "bg-blue-100 dark:bg-blue-900/20 text-blue-600"
    case "purple":
      return "bg-purple-100 dark:bg-purple-900/20 text-purple-600"
    case "green":
      return "bg-green-100 dark:bg-green-900/20 text-green-600"
    case "orange":
      return "bg-orange-100 dark:bg-orange-900/20 text-orange-600"
    default:
      return "bg-gray-100 dark:bg-gray-900/20 text-gray-600"
  }
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <Zap className="w-4 h-4 mr-2" />
            Professional AI Services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Transform Your Business with AI</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI automation services designed to streamline operations, boost productivity, and drive
            sustainable growth for your business.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20"
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${getColorClasses(service.color)}`}
                  >
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="space-y-1">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          {service.pricing}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          {service.timeline}
                        </div>
                      </div>
                      <Button asChild>
                        <Link href="/contact">
                          Get Quote
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful AI implementation and maximum ROI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose My Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose My AI Services?</h2>
              <p className="text-xl text-muted-foreground">
                Proven expertise with a track record of delivering results
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Proven Expertise</h3>
                <p className="text-muted-foreground">
                  5+ years of experience with 50+ successful AI automation projects across various industries.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Measurable Results</h3>
                <p className="text-muted-foreground">
                  Average 40% increase in efficiency and 60% reduction in manual tasks for our clients.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
                <p className="text-muted-foreground">
                  24/7 monitoring, regular updates, and continuous optimization to ensure peak performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your AI automation needs and create a custom solution for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                <Link href="/projects">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
