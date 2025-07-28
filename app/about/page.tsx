"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Heart, Code } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      {/* Navigation */}
      <Navbar showUserActions={false} />

      <div className="container mx-auto px-4 py-8 md:py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About DSA Buddy</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to make learning Data Structures and Algorithms more collaborative, engaging, and
            effective by connecting passionate developers worldwide.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 md:mb-16"
        >
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 md:p-8 text-center">
              <Target className="h-10 w-10 md:h-12 md:w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                To democratize coding education by creating meaningful connections between learners. We believe that the
                best way to master complex algorithms is through collaboration, peer learning, and shared
                problem-solving experiences.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 md:mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Heart,
                title: "Community First",
                description:
                  "We prioritize building a supportive, inclusive community where every developer feels welcome to learn and grow.",
              },
              {
                icon: Code,
                title: "Quality Learning",
                description:
                  "We're committed to providing tools and connections that lead to meaningful, effective learning experiences.",
              },
              {
                icon: Users,
                title: "Collaboration",
                description:
                  "We believe that learning together is more powerful than learning alone. Great minds think better together.",
              },
            ].map((value, index) => (
              <Card key={value.title} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4 md:p-6">
                  <value.icon className="h-8 w-8 md:h-10 md:w-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                <p className="text-sm md:text-base leading-relaxed">
                  DSA Buddy was born from a simple observation: learning Data Structures and Algorithms can be
                  incredibly isolating. Many developers struggle through complex problems alone, often getting stuck or
                  losing motivation along the way.
                </p>
                <p className="text-sm md:text-base leading-relaxed">
                  Our founders experienced this firsthand during their own coding journeys. They realized that having a
                  study partner made all the difference - someone to discuss approaches with, debug problems together,
                  and stay motivated through challenging topics.
                </p>
                <p className="text-sm md:text-base leading-relaxed">
                  That's when the idea struck: what if we could connect developers worldwide based on their learning
                  goals, skill levels, and schedules? What if we could make finding the perfect study buddy as easy as a
                  few clicks?
                </p>
                <p className="text-sm md:text-base leading-relaxed">
                  Today, DSA Buddy has helped thousands of developers find their coding companions, leading to improved
                  learning outcomes, lasting friendships, and successful career transitions.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Community?</h2>
          <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
            Start your collaborative learning journey today
          </p>
          <Link href="/matching">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 text-base md:text-lg">
              Find Your Study Buddy
            </Button>
          </Link>
        </motion.div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}
