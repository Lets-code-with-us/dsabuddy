"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Scale, AlertTriangle, UserCheck } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function TermsPage() {
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
          <FileText className="h-12 w-12 md:h-16 md:w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Please read these terms carefully before using DSA Buddy. By using our service, you agree to these terms.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: December 2024</p>
        </motion.div>

        <div className="space-y-6 md:space-y-8">
          {/* Acceptance of Terms */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <UserCheck className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">Acceptance of Terms</h2>
                </div>
                <div className="space-y-4 text-sm md:text-base text-gray-600">
                  <p>
                    By accessing or using DSA Buddy ("the Service"), you agree to be bound by these Terms of Service
                    ("Terms"). If you disagree with any part of these terms, then you may not access the Service.
                  </p>
                  <p>
                    These Terms apply to all visitors, users, and others who access or use the Service. We reserve the
                    right to update these Terms at any time, and your continued use of the Service constitutes
                    acceptance of any changes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Description of Service */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">Description of Service</h2>
                </div>
                <div className="space-y-4 text-sm md:text-base text-gray-600">
                  <p>
                    DSA Buddy is a platform that connects developers and students for collaborative learning of Data
                    Structures and Algorithms. Our Service includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Matching algorithms to connect compatible study partners</li>
                    <li>Communication tools for coordinating study sessions</li>
                    <li>Profile management and preference settings</li>
                    <li>Community features and resources</li>
                  </ul>
                  <p>
                    We reserve the right to modify, suspend, or discontinue any part of the Service at any time with or
                    without notice.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* User Accounts */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">User Accounts and Responsibilities</h2>
                <div className="space-y-4 text-sm md:text-base text-gray-600">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Account Creation</h3>
                    <p>
                      You must provide accurate and complete information when creating your account. You are responsible
                      for maintaining the security of your account credentials.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">User Conduct</h3>
                    <p>
                      You agree to use the Service in a respectful and lawful manner. Prohibited activities include:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Harassment, bullying, or inappropriate behavior toward other users</li>
                      <li>Sharing false or misleading information</li>
                      <li>Attempting to gain unauthorized access to the Service</li>
                      <li>Using the Service for commercial purposes without permission</li>
                      <li>Violating any applicable laws or regulations</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Privacy and Data */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Privacy and Data</h2>
                <div className="space-y-4 text-sm md:text-base text-gray-600">
                  <p>
                    Your privacy is important to us. Our collection and use of personal information is governed by our
                    <Link href="/privacy" className="text-blue-600 hover:underline ml-1">
                      Privacy Policy
                    </Link>
                    , which is incorporated into these Terms by reference.
                  </p>
                  <p>
                    By using the Service, you consent to the collection, use, and sharing of your information as
                    described in our Privacy Policy.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Intellectual Property */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Scale className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">Intellectual Property</h2>
                </div>
                <div className="space-y-4 text-sm md:text-base text-gray-600">
                  <p>
                    The Service and its original content, features, and functionality are owned by DSA Buddy and are
                    protected by international copyright, trademark, patent, trade secret, and other intellectual
                    property laws.
                  </p>
                  <p>
                    You retain ownership of any content you submit to the Service, but you grant us a license to use,
                    modify, and display such content in connection with providing the Service.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Disclaimers and Limitations */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">Disclaimers and Limitations</h2>
                </div>
                <div className="space-y-4 text-sm md:text-base text-gray-600">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Service Availability</h3>
                    <p>
                      We strive to maintain high availability but cannot guarantee uninterrupted access to the Service.
                      We are not liable for any downtime or service interruptions.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">User Interactions</h3>
                    <p>
                      DSA Buddy facilitates connections between users but is not responsible for the quality, safety, or
                      outcomes of user interactions. Users engage with each other at their own risk.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Limitation of Liability</h3>
                    <p>
                      To the maximum extent permitted by law, DSA Buddy shall not be liable for any indirect,
                      incidental, special, consequential, or punitive damages arising from your use of the Service.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Termination */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Termination</h2>
                <div className="space-y-4 text-sm md:text-base text-gray-600">
                  <p>
                    We may terminate or suspend your account and access to the Service immediately, without prior
                    notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third
                    parties.
                  </p>
                  <p>
                    You may terminate your account at any time by contacting us. Upon termination, your right to use the
                    Service will cease immediately, but these Terms will remain in effect regarding any prior use.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Governing Law */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6 }}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Governing Law and Disputes</h2>
                <div className="space-y-4 text-sm md:text-base text-gray-600">
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the State of
                    California, without regard to its conflict of law provisions.
                  </p>
                  <p>
                    Any disputes arising from these Terms or your use of the Service will be resolved through binding
                    arbitration in accordance with the rules of the American Arbitration Association.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8 }}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="text-sm md:text-base text-gray-600">
                  <p className="mb-4">If you have any questions about these Terms of Service, please contact us:</p>
                  <div className="space-y-2">
                    <p>
                      <strong>Email:</strong>{" "}
                      <a href="mailto:legal@dsabuddy.com" className="text-blue-600 hover:underline">
                        legal@dsabuddy.com
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
