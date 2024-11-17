"use client";

import { Github, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-4xl p-8 space-y-8">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <motion.h1
                className="text-4xl font-bold tracking-tight"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Muhammad Haddi
              </motion.h1>
              <motion.h1
                className="text-4xl font-bold tracking-tight"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Software Engineer | Flutter and Node.js/Express Developer
              </motion.h1>
              <motion.p
                className="text-xl text-muted-foreground"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Crafting beautiful, performant mobile experiences with Flutter
                and Dart, and building robust, scalable backend solutions with
                Node.js and Express.
              </motion.p>
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://github.com/mhaddi12"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://www.linkedin.com/in/muhammad-haddi/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="mailto:se.haddi1@gmail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            </div>
            <motion.div
              className="relative w-48 h-48 rounded-full overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Image
                src="https://avatars.githubusercontent.com/u/159878070?v=4"
                alt="Profile Picture"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
