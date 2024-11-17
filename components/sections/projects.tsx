"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, Share2, Bus } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Baccarat Game",
    description: "A sophisticated casino game implementation with real-time multiplayer support.",
    icon: <Gamepad2 className="h-8 w-8" />,
    image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&q=80&w=800&h=400",
    tech: ["Flutter", "Firebase", "WebSocket", "Provider"]
  },
  {
    title: "Roulette Game",
    description: "An immersive roulette experience with realistic physics and animations.",
    icon: <Gamepad2 className="h-8 w-8" />,
    image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&q=80&w=800&h=400",
    tech: ["Flutter", "Firebase", "Custom Animations", "GetX"]
  },
  {
    title: "Go and Do",
    description: "Social media platform connecting people through shared interests and activities.",
    icon: <Share2 className="h-8 w-8" />,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800&h=400",
    tech: ["Flutter", "Firebase", "Cloud Functions", "Bloc"]
  },
  {
    title: "BigWay App",
    description: "Real-time school bus tracking system for parents and administrators.",
    icon: <Bus className="h-8 w-8" />,
    image: "https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&q=80&w=800&h=400",
    tech: ["Flutter", "Google Maps", "Firebase", "Riverpod"]
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function Projects() {
  return (
    <div className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {project.icon}
                    <div>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 bg-primary/10 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}