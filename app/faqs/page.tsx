"use client"

import Link from "next/link"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { HelpCircle, Search, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

interface FAQ {
  id: number
  question: string
  answer: string
  category: string
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "How does the matching algorithm work?",
    answer:
      "Our matching algorithm considers multiple factors including your DSA skill level, preferred study times, availability, topics of interest, and timezone. We use machine learning to continuously improve match quality based on successful partnerships.",
    category: "Matching",
  },
  {
    id: 2,
    question: "Is DSA Buddy free to use?",
    answer:
      "Yes! DSA Buddy offers a free tier that includes basic matching, messaging, and profile features. We also offer premium plans with advanced features like priority matching, unlimited connections, and detailed analytics.",
    category: "Pricing",
  },
  {
    id: 3,
    question: "How do I change my study preferences?",
    answer:
      "You can update your preferences anytime by going to your Dashboard > Profile tab. Changes to your DSA level, study times, topics of interest, and availability will be reflected in future matches.",
    category: "Profile",
  },
  {
    id: 4,
    question: "What if I don't get along with my study buddy?",
    answer:
      "No worries! You can unmatch with any study buddy at any time. Simply go to your chat with them and click the 'Unmatch' button. You can then find new study partners through our matching system.",
    category: "Matching",
  },
  {
    id: 5,
    question: "Can I have multiple study buddies?",
    answer:
      "You can connect with multiple study buddies to work on different topics or have backup partners. Free users can have up to 3 active connections, while premium users have unlimited connections.",
    category: "Features",
  },
  {
    id: 6,
    question: "How do I report inappropriate behavior?",
    answer:
      "User safety is our priority. You can report any inappropriate behavior by clicking the 'Report' button in any chat or by contacting our support team at support@dsabuddy.com. We investigate all reports promptly.",
    category: "Safety",
  },
  {
    id: 7,
    question: "Can I use DSA Buddy on mobile?",
    answer:
      "Yes! DSA Buddy is fully responsive and works great on mobile browsers. We're also developing native mobile apps for iOS and Android, which will be available soon.",
    category: "Technical",
  },
  {
    id: 8,
    question: "How do I delete my account?",
    answer:
      "You can delete your account by going to Dashboard > Profile > Account Settings and clicking 'Delete Account'. This action is permanent and will remove all your data from our systems.",
    category: "Account",
  },
  {
    id: 9,
    question: "What programming languages are supported?",
    answer:
      "DSA Buddy supports all major programming languages including Python, Java, JavaScript, C++, C#, Go, Rust, and more. You can specify your preferred languages in your profile to match with compatible partners.",
    category: "Features",
  },
  {
    id: 10,
    question: "How do I schedule study sessions?",
    answer:
      "While we don't have a built-in calendar yet, you can coordinate study sessions through our chat system. Many users share their availability and use external calendar tools to schedule regular sessions.",
    category: "Features",
  },
]

const categories = ["All", "Matching", "Features", "Profile", "Pricing", "Safety", "Technical", "Account"]

export default function FAQsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id)
  }

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
          <HelpCircle className="h-12 w-12 md:h-16 md:w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about DSA Buddy. Can't find what you're looking for? Contact our support
            team.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 md:mb-8"
        >
          <Card>
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 text-sm md:text-base"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={`text-xs md:text-sm ${
                        selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""
                      }`}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full p-4 md:p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1 pr-4">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                            {faq.category}
                          </span>
                        </div>
                        <h3 className="font-semibold text-gray-900 text-sm md:text-base">{faq.question}</h3>
                      </div>
                      {expandedFAQ === faq.id ? (
                        <ChevronUp className="h-4 w-4 md:h-5 md:w-5 text-gray-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-4 w-4 md:h-5 md:w-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    {expandedFAQ === faq.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-gray-100"
                      >
                        <div className="p-4 md:p-6 pt-4">
                          <p className="text-gray-600 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <Card className="text-center py-8 md:py-12">
              <CardContent>
                <Search className="h-10 w-10 md:h-12 md:w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">No FAQs Found</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">
                  We couldn't find any FAQs matching your search. Try different keywords or browse all categories.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All")
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          )}
        </motion.div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 md:mt-16"
        >
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6 md:p-8 text-center">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
              <p className="text-sm md:text-base text-gray-600 mb-6">
                Our support team is here to help! Get in touch and we'll respond as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">Contact Support</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}
