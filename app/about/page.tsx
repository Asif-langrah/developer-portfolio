import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Calendar,
  Award,
  Users,
  Code,
  Brain,
  Target,
  ArrowRight,
  Download,
  Mail,
  Linkedin,
  Github,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About — Asif Langrah",
  description:
    "Learn about Asif Langrah, AI automation expert from Pakistan specializing in RAG systems, intelligent agents, and workflow automation.",
}

const skills = [
  { name: "Python", level: 95 },
  { name: "Machine Learning", level: 90 },
  { name: "LangChain", level: 88 },
  { name: "OpenAI API", level: 92 },
  { name: "React/Next.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "PostgreSQL", level: 82 },
  { name: "Docker", level: 78 },
]

const experience = [
  {
    year: "2024 - Present",
    title: "Senior AI Automation Consultant",
    company: "Freelance",
    description:
      "Leading AI automation projects for enterprise clients, specializing in RAG systems and intelligent workflow automation.",
  },
  {
    year: "2022 - 2024",
    title: "AI Solutions Architect",
    company: "TechCorp Solutions",
    description:
      "Designed and implemented AI-powered solutions for e-commerce platforms, achieving 40% increase in conversion rates.",
  },
  {
    year: "2020 - 2022",
    title: "Machine Learning Engineer",
    company: "DataFlow Systems",
    description: "Developed predictive models and automation systems for healthcare and finance sectors.",
  },
  {
    year: "2019 - 2020",
    title: "Software Developer",
    company: "InnovateTech",
    description:
      "Built web applications and APIs, gaining expertise in full-stack development and system architecture.",
  },
]

const achievements = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "50+ Projects Completed",
    description: "Successfully delivered AI automation solutions across various industries",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "100% Client Satisfaction",
    description: "Maintained perfect client satisfaction rate with ongoing support",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "40% Average Efficiency Gain",
    description: "Clients see significant productivity improvements with our solutions",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI Innovation Leader",
    description: "Recognized expert in RAG systems and intelligent automation",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4 px-4 py-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  Based in Pakistan
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Asif Langrah
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  An AI automation expert passionate about transforming businesses through intelligent solutions. I
                  specialize in RAG systems, chatbots, and workflow automation that deliver real results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">
                      Let's Work Together
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/asif-langrah-resume.pdf" target="_blank">
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20">
                  <img
                    src="/professional-headshot-of-asif-langrah--ai-automati.png"
                    alt="Asif Langrah - AI Automation Expert"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg border">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Available for projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  {achievement.icon}
                </div>
                <h3 className="font-bold text-lg mb-1">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Professional Experience</h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <Badge variant="outline" className="w-fit">
                        <Calendar className="w-3 h-3 mr-1" />
                        {exp.year}
                      </Badge>
                    </div>
                    <p className="text-primary font-medium mb-2">{exp.company}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Beyond the Code</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Continuous Learning</h3>
                  <p className="text-muted-foreground text-sm">
                    Always exploring the latest AI technologies and frameworks to deliver cutting-edge solutions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Community Focused</h3>
                  <p className="text-muted-foreground text-sm">
                    Active in AI communities, sharing knowledge and helping others succeed in their automation journey.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Results Driven</h3>
                  <p className="text-muted-foreground text-sm">
                    Focused on delivering measurable business value through intelligent automation solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Build Something Amazing Together</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to transform your business with AI automation? I'd love to hear about your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/projects">View My Work</Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <Link
                href="mailto:asif@asiflangrah.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
              </Link>
              <Link
                href="https://linkedin.com/in/asiflangrah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://github.com/asiflangrah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
