"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      {/* Navigation */}
      <Navbar showUserActions={false} />

      <div className="container mx-auto px-4 py-8 md:py-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions, feedback, or need support? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                  <Mail className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600 mb-1">General inquiries</p>
                  <a href="mailto:hello@dsabuddy.com" className="text-sm md:text-base text-blue-600 hover:underline">
                    hello@dsabuddy.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Support</p>
                  <a href="mailto:support@dsabuddy.com" className="text-sm md:text-base text-blue-600 hover:underline">
                    support@dsabuddy.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                  <Phone className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Support Hotline</p>
                  <a href="tel:+1-555-DSA-BUDDY" className="text-sm md:text-base text-blue-600 hover:underline">
                    +1 (555) DSA-BUDDY
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Business Inquiries</p>
                  <a href="tel:+1-555-123-4567" className="text-sm md:text-base text-blue-600 hover:underline">
                    +1 (555) 123-4567
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                  Visit Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-gray-600">
                  123 Tech Street
                  <br />
                  San Francisco, CA 94105
                  <br />
                  United States
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                  <Clock className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-sm md:text-base text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  <p>Saturday: 10:00 AM - 4:00 PM PST</p>
                  <p>Sunday: Closed</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Send us a Message</CardTitle>
                <p className="text-sm md:text-base text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm md:text-base">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        required
                        className="mt-1 text-sm md:text-base"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm md:text-base">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        required
                        className="mt-1 text-sm md:text-base"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="category" className="text-sm md:text-base">
                        Category
                      </Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="billing">Billing Question</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="bug">Bug Report</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-sm md:text-base">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
                        required
                        className="mt-1 text-sm md:text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm md:text-base">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      required
                      className="mt-1 min-h-[120px] text-sm md:text-base"
                      placeholder="Please provide as much detail as possible..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 md:mt-16"
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-6 md:mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                question: "How quickly do you respond to inquiries?",
                answer:
                  "We typically respond to all inquiries within 24 hours during business days. For urgent technical issues, we aim to respond within 4 hours.",
              },
              {
                question: "Do you offer phone support?",
                answer:
                  "Yes! Phone support is available during business hours for premium users. General users can schedule a callback through our support portal.",
              },
              {
                question: "Can I schedule a demo?",
                answer:
                  "Contact our sales team to schedule a personalized demo of DSA Buddy's features and see how it can benefit your learning journey.",
              },
              {
                question: "How do I report a bug?",
                answer:
                  "You can report bugs through this contact form, our in-app feedback system, or by emailing support@dsabuddy.com with detailed steps to reproduce the issue.",
              },
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 md:p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">{faq.question}</h3>
                  <p className="text-gray-600 text-xs md:text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
