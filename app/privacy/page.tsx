"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Eye, Lock, Database } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
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
          <Shield className="h-12 w-12 md:h-16 md:w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: December 2024</p>
        </motion.div>

        <div className="space-y-6 md:space-y-8">
          {/* Information We Collect */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Database className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">Information We Collect</h2>
                </div>
                <div className="space-y-4 text-sm md:text-base text-gray-600">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Personal Information</h3>
                    <p>
                      When you create an account, we collect information such as your name, email address, username, and
                      profile information you choose to provide.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Usage Information</h3>
                    <p>
                      We collect information about how you use our platform, including your interactions with other
                      users, study preferences, and platform features you use.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Technical Information</h3>
                    <p>
                      We automatically collect certain technical information, including your IP address, browser type,
                      device information, and usage analytics.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* How We Use Information */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">How We Use Your Information</h2>
                </div>
                <div className="space-y-4 text-sm md:text-base text-gray-600">
                  <ul className="list-disc list-inside space-y-2">
                    <li>To provide and improve our matching services</li>
                    <li>To facilitate communication between study buddies</li>
                    <li>To personalize your experience on our platform</li>
                    <li>To send you important updates and notifications</li>
                    <li>To ensure platform security and prevent abuse</li>
                    <li>To analyze usage patterns and improve our services</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Information Sharing */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">Information Sharing</h2>
                </div>
                <div className="space-y-4 text-sm md:text-base text-gray-600">
                  <p>
                    We do not sell, trade, or rent your personal information to third parties. We may share your
                    information only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <strong>With other users:</strong> Profile information you choose to make visible for matching
                      purposes
                    </li>
                    <li>
                      <strong>Service providers:</strong> Trusted third-party services that help us operate our platform
                    </li>
                    <li>
                      <strong>Legal requirements:</strong> When required by law or to protect our rights and users'
                      safety
                    </li>
                    <li>
                      <strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Data Security */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">Data Security</h2>
                </div>
                <div className="space-y-4 text-sm md:text-base text-gray-600">
                  <p>We implement industry-standard security measures to protect your information:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Access controls and authentication measures</li>
                    <li>Secure data centers with physical security controls</li>
                    <li>Employee training on data protection practices</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Your Rights */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Your Rights and Choices</h2>
                <div className="space-y-4 text-sm md:text-base text-gray-600">
                  <p>You have the following rights regarding your personal information:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <strong>Access:</strong> Request a copy of the personal information we hold about you
                    </li>
                    <li>
                      <strong>Correction:</strong> Update or correct inaccurate personal information
                    </li>
                    <li>
                      <strong>Deletion:</strong> Request deletion of your personal information
                    </li>
                    <li>
                      <strong>Portability:</strong> Request a copy of your data in a portable format
                    </li>
                    <li>
                      <strong>Opt-out:</strong> Unsubscribe from marketing communications
                    </li>
                    <li>
                      <strong>Restriction:</strong> Request limitation of processing of your information
                    </li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, please contact us at{" "}
                    <a href="mailto:privacy@dsabuddy.com" className="text-blue-600 hover:underline">
                      privacy@dsabuddy.com
                    </a>
                    .
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <div className="text-sm md:text-base text-gray-600">
                  <p className="mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="space-y-2">
                    <p>
                      <strong>Email:</strong>{" "}
                      <a href="mailto:privacy@dsabuddy.com" className="text-blue-600 hover:underline">
                        privacy@dsabuddy.com
                      </a>
                    </p>
                    <p>
                      <strong>Address:</strong> 123 Tech Street, San Francisco, CA 94105
                    </p>
                    <p>
                      <strong>Phone:</strong> +1 (555) 123-4567
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
