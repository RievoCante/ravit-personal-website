"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Smartphone } from "lucide-react"
import { FaXTwitter } from 'react-icons/fa6';

const projects = [
  {
    name: "TypingRPG",
    description: "TypingRPG is a typing game that is actually FUN.",
    revenue: "$0",
    growth: "+0%",
    tech: ["React", "Bun", "Hono", "Cloudflare"],
    icon: "🎮",
    url: "https://typingrpg.com/",
  },
]

const skills = [
  { name: "React/Next.js", level: 95, icon: <Code className="w-5 h-5" /> },
  { name: "Node.js/Python", level: 90, icon: <Database className="w-5 h-5" /> },
  { name: "TypeScript", level: 88, icon: <Code className="w-5 h-5" /> },
  { name: "Cloud/DevOps", level: 85, icon: <Globe className="w-5 h-5" /> },
  { name: "Mobile Dev", level: 80, icon: <Smartphone className="w-5 h-5" /> },
]

export default function Portfolio() {
  const [email, setEmail] = useState("")

  return (
    <div className="min-h-screen bg-background">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-card opacity-50" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(8,145,178,0.1),transparent_50%)]" />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Section */}
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary animate-glow" />
                  <div className="absolute inset-2 rounded-full bg-card flex items-center justify-center text-2xl">
                    👨‍💻
                  </div>
                </div>
                <div>
                  <h1 className="text-4xl font-black text-foreground mb-2">Ravit Chutivisuth</h1>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Globe className="w-4 h-4" />
                    <span>Bangkok, Thailand</span>
                    <Badge variant="secondary" className="ml-2">
                      $0/month
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xl text-muted-foreground italic">&quot;Turning coffee into code, one bug at a time.&quot;</p>

                <div className="space-y-2">
                  <p className="text-lg">
                    <span className="text-accent font-semibold">...</span> developers follow my journey!
                  </p>
                  <p className="text-foreground">
                    I build scalable web applications and share insights on modern development practices ⚡
                  </p>
                </div>

                {/* Email Subscription */}
                <div className="flex gap-2 max-w-md">
                  <Input
                    placeholder="Your email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-input border-border"
                  />
                  <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 pt-4">
                  <Button variant="ghost" size="icon" className="hover:text-primary" onClick={() => window.open("https://github.com/RievoCante", "_blank")}>
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:text-primary" onClick={() => window.open("https://www.linkedin.com/in/ravit-chutivisuth", "_blank")}>
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:text-primary" onClick={() => window.open("https://x.com/ravitchu", "_blank")}>
                    <FaXTwitter className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:text-primary" onClick={() => navigator.clipboard.writeText("putter.ravit@gmail.com")}>
                    <Mail className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Skills Wheel */}
            <div className="flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 rounded-full border-2 border-border animate-float">
                  {skills.map((skill, index) => {
                    const angle = index * 72 - 90 // 360/5 = 72 degrees apart
                    const x = Math.cos((angle * Math.PI) / 180) * 120
                    const y = Math.sin((angle * Math.PI) / 180) * 120

                    return (
                      <div
                        key={skill.name}
                        className="absolute w-16 h-16 rounded-full bg-card border-2 border-primary flex flex-col items-center justify-center text-xs font-medium hover:scale-110 transition-transform cursor-pointer"
                        style={{
                          left: `calc(50% + ${x}px - 2rem)`,
                          top: `calc(50% + ${y}px - 2rem)`,
                        }}
                      >
                        {skill.icon}
                        <span className="mt-1">{skill.level}%</span>
                      </div>
                    )
                  })}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    SKILLS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-black text-center mb-12">My Projects</h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                aria-label={`${project.name} project link`}
              >
                <Card className="group cursor-pointer transition-all duration-300 hover:scale-105 bg-card border-border">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{project.icon}</span>
                        <CardTitle className="text-lg">{project.name}</CardTitle>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{project.revenue}</Badge>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      {/* Growth Chart Placeholder */}
                      <div className="h-20 bg-muted/20 rounded-lg flex items-end justify-center p-2">
                        <div className="text-sm text-accent font-semibold">{project.growth} growth</div>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-16 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-black">Ready to Build Something Amazing?</h2>
            <p className="text-lg text-muted-foreground">
              Let&apos;s collaborate on your next project. I specialize in full-stack development with modern technologies
              and scalable architectures.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button size="lg" variant="outline">
                <Github className="w-4 h-4 mr-2" />
                View GitHub
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
