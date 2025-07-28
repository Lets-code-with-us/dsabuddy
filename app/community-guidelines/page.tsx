"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, Shield, AlertTriangle, CheckCircle, XCircle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function CommunityGuidelinesPage() {
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
          <Users className="h-12 w-12 md:h-16 md:w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Community Guidelines</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Our community guidelines help create a safe, inclusive, and productive environment for all DSA Buddy users.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: December 2024</p>
        </motion.div>

        <div className="space-y-6 md:space-y-8">
          {/* Our Mission */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">Our Community Mission</h2>
                </div>
                <div className="space-y-4 text-sm md:text-base text-gray-600">
                  <p>
                    DSA Buddy is built on the belief that learning is better together. Our community brings together
                    developers from all backgrounds, skill levels, and locations to support each other's growth in Data
                    Structures and Algorithms.
                  </p>
                  <p>
                    These guidelines ensure that everyone can participate in a respectful, helpful, and inclusive
                    environment where learning and collaboration thrive.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Core Values */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">Our Core Values</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                      <h3 className="font-semibold text-green-900 mb-2">🤝 Respect & Kindness</h3>
                      <p className="text-sm text-green-800">
                        Treat every community member with respect, regardless of their skill level, background, or
                        experience.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <h3 className="font-semibold text-blue-900 mb-2">🎯 Constructive Learning</h3>
                      <p className="text-sm text-blue-800">
                        Focus on helping others learn and grow. Share knowledge generously and ask questions openly.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                      <h3 className="font-semibold text-purple-900 mb-2">🌍 Inclusivity</h3>
                      <p className="text-sm text-purple-800">
                        Welcome people from all backgrounds, cultures, and identities. Diversity makes us stronger.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                      <h3 className="font-semibold text-orange-900 mb-2">💡 Growth Mindset</h3>
                      <p className="text-sm text-orange-800">
                        Embrace challenges, learn from mistakes, and celebrate progress at every level.
                      </p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
                      <h3 className="font-semibold text-indigo-900 mb-2">🔒 Safety & Trust</h3>
                      <p className="text-sm text-indigo-800">
                        Maintain a safe environment where everyone feels comfortable sharing and learning.
                      </p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
                      <h3 className="font-semibold text-teal-900 mb-2">⚡ Quality Interactions</h3>
                      <p className="text-sm text-teal-800">
                        Engage meaningfully, provide helpful feedback, and contribute positively to discussions.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Expected Behavior */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">Expected Behavior</h2>
                </div>
                <div className="space-y-4 text-sm md:text-base text-gray-600">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">✅ Do:</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Be patient and supportive when helping others learn</li>
                      <li>Share resources, tips, and knowledge generously</li>
                      <li>Ask questions when you need help - no question is too basic</li>
                      <li>Provide constructive feedback and suggestions</li>
                      <li>Respect different learning styles and paces</li>
                      <li>Use clear, professional communication</li>
                      <li>Give credit where credit is due</li>
                      <li>Report inappropriate behavior to moderators</li>
                      <li>Celebrate others' achievements and progress</li>
                      <li>Stay on topic in discussions and study sessions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Prohibited Behavior */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <XCircle className="h-5 w-5 md:h-6 md:w-6 text-red-600" />
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">Prohibited Behavior</h2>
                </div>
                <div className="space-y-4 text-sm md:text-base text-gray-600">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">❌ Don't:</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Harass, bully, or discriminate against other users</li>
                      <li>Use offensive, inappropriate, or discriminatory language</li>
                      <li>Share personal information without consent</li>
                      <li>Spam or send unsolicited promotional content</li>
                      <li>Plagiarize or claim others' work as your own</li>
                      <li>Share solutions to ongoing contests or assessments</li>
                      <li>Engage in academic dishonesty or cheating</li>
                      <li>Post irrelevant or off-topic content</li>
                      <li>Create fake accounts or impersonate others</li>
                      <li>Attempt to hack, exploit, or abuse the platform</li>
                      <li>Share malicious links or content</li>
                      <li>Engage in commercial activities without permission</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Study Session Guidelines */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">Study Session Guidelines</h2>
                </div>
                <div className="space-y-4 text-sm md:text-base text-gray-600">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Before the Session</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Communicate clearly about topics, timing, and expectations</li>
                      <li>Prepare materials and problems in advance</li>
                      <li>Respect scheduled times and notify if you need to reschedule</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">During the Session</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Stay focused on the agreed-upon topics</li>
                      <li>Take turns explaining concepts and solutions</li>
                      <li>Be patient when your partner needs more time to understand</li>
                      <li>Ask questions and encourage discussion</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">After the Session</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Share any resources or notes discussed</li>
                      <li>Provide constructive feedback if requested</li>
                      <li>Schedule follow-up sessions if both parties are interested</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Reporting and Enforcement */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">Reporting and Enforcement</h2>
                </div>
                <div className="space-y-4 text-sm md:text-base text-gray-600">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">How to Report</h3>
                    <p className="mb-2">If you encounter behavior that violates these guidelines:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Use the "Report" button in any chat or profile</li>
                      <li>Email us at support@dsabuddy.com with details</li>
                      <li>Contact us through the help center</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Our Response</h3>
                    <p className="mb-2">We take all reports seriously and will:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Review reports within 24 hours</li>
                      <li>Investigate thoroughly and fairly</li>
                      <li>Take appropriate action based on severity</li>
                      <li>Protect the privacy of all parties involved</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Consequences</h3>
                    <p className="mb-2">Violations may result in:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Warning and guidance on appropriate behavior</li>
                      <li>Temporary suspension from certain features</li>
                      <li>Temporary account suspension</li>
                      <li>Permanent account termination for severe violations</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Appeals Process */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="h-5 w-5 md:h-6 md:w-6 text-orange-600" />
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">Appeals Process</h2>
                </div>
                <div className="space-y-4 text-sm md:text-base text-gray-600">
                  <p>
                    If you believe a moderation action was taken in error, you can appeal the decision by contacting us
                    at appeals@dsabuddy.com within 30 days of the action.
                  </p>
                  <p>Please include:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Your account information</li>
                    <li>Details of the moderation action</li>
                    <li>Explanation of why you believe it was incorrect</li>
                    <li>Any relevant evidence or context</li>
                  </ul>
                  <p>We will review appeals fairly and respond within 7 business days.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6 }}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Questions or Feedback?</h2>
                <div className="text-sm md:text-base text-gray-600">
                  <p className="mb-4">
                    We're always working to improve our community. If you have questions about these guidelines or
                    suggestions for improvement, please reach out:
                  </p>
                  <div className="space-y-2">
                    <p>
                      <strong>Community Team:</strong>{" "}
                      <a href="mailto:community@dsabuddy.com" className="text-blue-600 hover:underline">
                        community@dsabuddy.com
                      </a>
                    </p>
                    <p>
                      <strong>Support:</strong>{" "}
                      <a href="mailto:support@dsabuddy.com" className="text-blue-600 hover:underline">
                        support@dsabuddy.com
                      </a>
                    </p>
                    <p>
                      <strong>Appeals:</strong>{" "}
                      <a href="mailto:appeals@dsabuddy.com" className="text-blue-600 hover:underline">
                        appeals@dsabuddy.com
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
