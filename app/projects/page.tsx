"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Bot, Zap, Target, Users, Filter } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "E-commerce RAG Assistant",
    description:
      "Advanced RAG system for product recommendations and customer support, processing 10,000+ product catalogs with 95% accuracy.",
    category: "RAG Systems",
    technologies: ["Python", "LangChain", "OpenAI", "Pinecone", "FastAPI"],
    image: "/ai-powered-ecommerce-dashboard-with-product-recomm.png",
    liveUrl: "https://demo.asiflangrah.com/ecommerce-rag",
    githubUrl: "https://github.com/asiflangrah/ecommerce-rag",
    featured: true,
    results: ["40% increase in conversion rates", "60% reduction in support tickets", "95% customer satisfaction"],
  },
  {
    id: 2,
    title: "Healthcare Workflow Automation",
    description:
      "Intelligent automation system for patient scheduling, medical record processing, and appointment management.",
    category: "Workflow Automation",
    technologies: ["Node.js", "MongoDB", "OpenAI", "Zapier", "React"],
    image: "/healthcare-automation-dashboard-with-patient-sched.png",
    liveUrl: "https://demo.asiflangrah.com/healthcare-automation",
    githubUrl: "https://github.com/asiflangrah/healthcare-automation",
    featured: true,
    results: ["70% reduction in manual tasks", "50% faster patient processing", "99.9% uptime achieved"],
  },
  {
    id: 3,
    title: "Multi-language Customer Support Bot",
    description:
      "AI chatbot supporting 12 languages with sentiment analysis and escalation protocols for enterprise customer service.",
    category: "Chatbots",
    technologies: ["Python", "Rasa", "TensorFlow", "PostgreSQL", "Docker"],
    image: "/multilingual-chatbot-interface-with-conversation-b.png",
    liveUrl: "https://demo.asiflangrah.com/support-bot",
    githubUrl: "https://github.com/asiflangrah/multilang-chatbot",
    featured: false,
    results: ["85% query resolution rate", "12 languages supported", "24/7 availability"],
  },
  {
    id: 4,
    title: "Shopify AI Integration Suite",
    description:
      "Complete AI integration for Shopify stores including inventory management, price optimization, and customer insights.",
    category: "E-commerce Integration",
    technologies: ["Shopify API", "Python", "React", "GraphQL", "AWS"],
    image: "/shopify-store-dashboard-with-ai-analytics-and-char.png",
    liveUrl: "https://demo.asiflangrah.com/shopify-ai",
    githubUrl: "https://github.com/asiflangrah/shopify-ai-suite",
    featured: true,
    results: ["30% increase in sales", "Automated inventory management", "Real-time price optimization"],
  },
  {
    id: 5,
    title: "Document Intelligence Platform",
    description:
      "RAG-powered document analysis system for legal firms, processing contracts and extracting key information automatically.",
    category: "RAG Systems",
    technologies: ["Python", "Hugging Face", "Elasticsearch", "FastAPI", "Vue.js"],
    image: "/document-analysis-platform-with-legal-contracts-an.png",
    liveUrl: "https://demo.asiflangrah.com/doc-intelligence",
    githubUrl: "https://github.com/asiflangrah/doc-intelligence",
    featured: false,
    results: ["90% faster document review", "99% accuracy in extraction", "50+ law firms using"],
  },
  {
    id: 6,
    title: "Sales Pipeline Automation",
    description:
      "Intelligent CRM automation with lead scoring, follow-up scheduling, and performance analytics for sales teams.",
    category: "Workflow Automation",
    technologies: ["Salesforce API", "Python", "Machine Learning", "PostgreSQL", "React"],
    image: "/sales-crm-dashboard-with-pipeline-automation-and-a.png",
    liveUrl: "https://demo.asiflangrah.com/sales-automation",
    githubUrl: "https://github.com/asiflangrah/sales-pipeline",
    featured: false,
    results: ["45% increase in lead conversion", "80% time saved on admin tasks", "Real-time performance tracking"],
  },
]

const categories = ["All", "RAG Systems", "Chatbots", "Workflow Automation", "E-commerce Integration"]

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "RAG Systems":
      return <Bot className="w-4 h-4" />
    case "Chatbots":
      return <Zap className="w-4 h-4" />
    case "Workflow Automation":
      return <Target className="w-4 h-4" />
    case "E-commerce Integration":
      return <Users className="w-4 h-4" />
    default:
      return <Filter className="w-4 h-4" />
  }
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <div className="min-h-screen py-12">
      {/* Header */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of AI automation solutions that have transformed businesses across various industries
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredProjects.slice(0, 2).map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20"
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      {getCategoryIcon(project.category)}
                      {project.category}
                    </Badge>
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Results:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.results.map((result, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" asChild>
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects with Filtering */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">All Projects</h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="flex items-center gap-2"
              >
                {getCategoryIcon(category)}
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="flex items-center gap-1 text-xs">
                      {getCategoryIcon(project.category)}
                      {project.category}
                    </Badge>
                    {project.featured && (
                      <Badge variant="outline" className="text-xs">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" asChild className="flex-1">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how I can help transform your business with AI automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Started Today
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
