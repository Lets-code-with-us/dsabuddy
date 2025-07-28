"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Cookie, Settings, Eye, Shield } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function CookiesPage() {
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
          <Cookie className="h-12 w-12 md:h-16 md:w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Cookie Policy</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Learn about how we use cookies and similar technologies to improve your experience on DSA Buddy.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: December 2024</p>
        </motion.div>

        <div className="space-y-6 md:space-y-8">
          {/* What Are Cookies */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Cookie className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">What Are Cookies?</h2>
                </div>
                <div className="space-y-4 text-sm md:text-base text-gray-600">
                  <p>
                    Cookies are small text files that are stored on your device when you visit our website. They help us
                    provide you with a better experience by remembering your preferences and understanding how you use
                    our platform.
                  </p>
                  <p>
                    We use both session cookies (which expire when you close your browser) and persistent cookies (which
                    remain on your device for a set period or until you delete them).
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Types of Cookies */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Settings className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">Types of Cookies We Use</h2>
                </div>
                <div className="space-y-6 text-sm md:text-base text-gray-600">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Essential Cookies</h3>
                    <p className="mb-2">
                      These cookies are necessary for the website to function properly. They enable core functionality
                      such as:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>User authentication and login sessions</li>
                      <li>Security features and fraud prevention</li>
                      <li>Basic website functionality and navigation</li>
                      <li>Load balancing and performance optimization</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Functional Cookies</h3>
                    <p className="mb-2">
                      These cookies enhance your experience by remembering your choices and preferences:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Language and region preferences</li>
                      <li>Theme settings (dark/light mode)</li>
                      <li>Sidebar collapse state</li>
                      <li>Form data to prevent loss during navigation</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
                    <p className="mb-2">These cookies help us understand how visitors interact with our website:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Page views and user journey tracking</li>
                      <li>Feature usage and engagement metrics</li>
                      <li>Performance monitoring and error tracking</li>
                      <li>A/B testing and optimization data</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Marketing Cookies</h3>
                    <p className="mb-2">
                      These cookies are used to deliver relevant advertisements and track campaign effectiveness:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Targeted advertising based on interests</li>
                      <li>Social media integration and sharing</li>
                      <li>Conversion tracking and attribution</li>
                      <li>Retargeting and remarketing campaigns</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Third-Party Cookies */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">Third-Party Cookies</h2>
                </div>
                <div className="space-y-4 text-sm md:text-base text-gray-600">
                  <p>
                    We may allow certain third-party services to set cookies on our website to provide enhanced
                    functionality:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Google Analytics</h4>
                      <p className="text-sm">
                        Helps us understand website usage and improve user experience through detailed analytics.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Social Media Platforms</h4>
                      <p className="text-sm">
                        Enables social sharing features and integration with platforms like Twitter and LinkedIn.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Authentication Services</h4>
                      <p className="text-sm">
                        Supports secure login through third-party providers like Google and GitHub.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Content Delivery Networks</h4>
                      <p className="text-sm">
                        Improves website performance by serving content from geographically distributed servers.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Managing Cookies */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">Managing Your Cookie Preferences</h2>
                </div>
                <div className="space-y-4 text-sm md:text-base text-gray-600">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Browser Settings</h3>
                    <p className="mb-3">
                      You can control cookies through your browser settings. Most browsers allow you to:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>View and delete existing cookies</li>
                      <li>Block cookies from specific websites</li>
                      <li>Block third-party cookies</li>
                      <li>Clear all cookies when you close the browser</li>
                      <li>Set up notifications when cookies are being set</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Cookie Consent</h3>
                    <p>
                      When you first visit our website, we'll ask for your consent to use non-essential cookies. You can
                      change your preferences at any time by clicking the "Cookie Settings" link in our footer or
                      contacting us directly.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Impact of Disabling Cookies</h3>
                    <p className="mb-2">
                      Please note that disabling certain cookies may affect your experience on our website:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>You may need to re-enter information more frequently</li>
                      <li>Some features may not work properly or be unavailable</li>
                      <li>Personalized content and recommendations may be less relevant</li>
                      <li>Website performance may be slower</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Data Retention */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Cookie Retention Periods</h2>
                <div className="space-y-4 text-sm md:text-base text-gray-600">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">
                            Cookie Type
                          </th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">
                            Retention Period
                          </th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">
                            Purpose
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Session Cookies</td>
                          <td className="border border-gray-300 px-4 py-2">Until browser is closed</td>
                          <td className="border border-gray-300 px-4 py-2">Authentication and navigation</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Preference Cookies</td>
                          <td className="border border-gray-300 px-4 py-2">1 year</td>
                          <td className="border border-gray-300 px-4 py-2">Remember user settings</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Analytics Cookies</td>
                          <td className="border border-gray-300 px-4 py-2">2 years</td>
                          <td className="border border-gray-300 px-4 py-2">Usage analysis and optimization</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Marketing Cookies</td>
                          <td className="border border-gray-300 px-4 py-2">90 days</td>
                          <td className="border border-gray-300 px-4 py-2">Advertising and remarketing</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Questions About Cookies?</h2>
                <div className="text-sm md:text-base text-gray-600">
                  <p className="mb-4">
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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
