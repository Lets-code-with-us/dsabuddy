"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Clock, Sparkles, ArrowRight, Code, BookOpen, MessageCircle } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      {/* Navigation */}
      <Navbar showUserActions={false} />

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="h-4 w-4" />
              Find Your Perfect Study Partner
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Find Your Perfect{" "}
              <span className="text-blue-600 relative">
                DSA Practice Buddy
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-200 rounded"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Practice smarter, not harder — match with peers who share your DSA learning goals and coding journey.
            </p>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <Link href="/matching">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20"
          >
            {[
              { number: "10K+", label: "Active Learners", icon: Users },
              { number: "50K+", label: "Successful Matches", icon: Target },
              { number: "95%", label: "Success Rate", icon: Sparkles },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose DSA Buddy?</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to find the perfect coding companion and accelerate your learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Target,
                title: "Smart Matching",
                description: "Our algorithm matches you with peers based on skill level, schedule, and learning goals.",
                color: "bg-blue-100 text-blue-600",
              },
              {
                icon: Clock,
                title: "Flexible Scheduling",
                description: "Find buddies who match your availability, whether you're a morning person or night owl.",
                color: "bg-green-100 text-green-600",
              },
              {
                icon: MessageCircle,
                title: "Built-in Chat",
                description: "Seamlessly communicate with your study buddy through our integrated chat system.",
                color: "bg-purple-100 text-purple-600",
              },
              {
                icon: BookOpen,
                title: "Topic-based Matching",
                description:
                  "Connect with peers who share your interest in specific DSA topics like graphs, DP, and more.",
                color: "bg-orange-100 text-orange-600",
              },
              {
                icon: Code,
                title: "Progress Tracking",
                description: "Monitor your learning journey and celebrate milestones with your study partner.",
                color: "bg-red-100 text-red-600",
              },
              {
                icon: Sparkles,
                title: "Community Driven",
                description: "Join a supportive community of developers helping each other grow and succeed.",
                color: "bg-yellow-100 text-yellow-600",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm">
                  <CardContent className="p-4 md:p-6">
                    <div
                      className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg mb-4 ${feature.color}`}
                    >
                      <feature.icon className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Get matched with your perfect study buddy in just a few simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                step: "01",
                title: "Share Your Preferences",
                description: "Tell us about your DSA level, schedule, and learning interests.",
              },
              {
                step: "02",
                title: "Get Matched",
                description: "Our smart algorithm finds the perfect study buddies for you.",
              },
              {
                step: "03",
                title: "Connect & Chat",
                description: "Send requests and start chatting with your potential study partners.",
              },
              {
                step: "04",
                title: "Learn Together",
                description: "Practice DSA problems, share resources, and grow together.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-blue-600 text-white rounded-full text-lg md:text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{step.description}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-6 md:top-8 left-full w-full">
                    <ArrowRight className="h-5 w-5 md:h-6 md:w-6 text-gray-300 mx-auto" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Find Your DSA Buddy?</h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are already learning and growing together
            </p>
            <Link href="/matching">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Start Matching Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 md:mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 md:h-6 md:w-6 text-blue-400" />
                <span className="text-lg md:text-xl font-bold">DSA Buddy</span>
              </div>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Connecting developers worldwide to practice Data Structures and Algorithms together. Find your perfect
                coding companion and accelerate your learning journey.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.001z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div className="space-y-4">
              <h3 className="text-base md:text-lg font-semibold text-white">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#features"
                    className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/matching"
                    className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                  >
                    Find Buddy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard"
                    className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h3 className="text-base md:text-lg font-semibold text-white">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div className="space-y-4">
              <h3 className="text-base md:text-lg font-semibold text-white">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/faqs" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs md:text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
              <div className="text-xs md:text-sm text-gray-400">
                <p>&copy; 2024 DSA Buddy. All rights reserved.</p>
              </div>
            </div>
            <div className="mt-4 text-center text-xs text-gray-500">
              <p>Made with ❤️ for the developer community</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
