"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Users,
  MessageCircle,
  UserPlus,
  Settings,
  Search,
  Target,
  Send,
  Check,
  X,
  MoreVertical,
  UserMinus,
  Shield,
  ChevronLeft,
  ChevronRight,
  Star,
  TrendingUp,
  Calendar,
  Clock,
} from "lucide-react"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Profile completion calculation
const calculateProfileCompletion = (profileData: any) => {
  const requiredFields = [
    "fullName",
    "username",
    "email",
    "bio",
    "dsaLevel",
    "location",
    "locationPreference",
    "interests",
    "studyGoals",
    "availability",
    "studyTime",
    "preferredLanguage", // Changed from preferredLanguages
    "codingPlatform", // Changed from codingPlatforms
  ]

  const optionalFields = ["github", "linkedin", "website"]

  let completedRequired = 0
  let completedOptional = 0

  const missingFields: string[] = []

  requiredFields.forEach((field) => {
    if (field === "codingPlatform") {
      if (profileData[field] && profileData[field].name && profileData[field].username) {
        completedRequired++
      } else {
        missingFields.push(field)
      }
    } else if (profileData[field] && profileData[field].toString().trim() !== "") {
      completedRequired++
    } else {
      missingFields.push(field)
    }
  })

  optionalFields.forEach((field) => {
    if (profileData[field] && profileData[field].toString().trim() !== "") {
      completedOptional++
    }
  })

  // Required fields are worth 80%, optional fields 20%
  const requiredPercentage = (completedRequired / requiredFields.length) * 80
  const optionalPercentage = (completedOptional / optionalFields.length) * 20
  const totalPercentage = Math.round(requiredPercentage + optionalPercentage)

  return {
    percentage: totalPercentage,
    completedRequired,
    totalRequired: requiredFields.length,
    completedOptional,
    totalOptional: optionalFields.length,
    missingFields,
  }
}

// Helper function to format field names for display
const formatFieldName = (fieldName: string) => {
  const fieldMap: { [key: string]: string } = {
    fullName: "Full Name",
    username: "Username",
    email: "Email",
    bio: "Bio",
    dsaLevel: "DSA Level",
    location: "Location",
    locationPreference: "Location Preference",
    interests: "Topics of Interest",
    studyGoals: "Study Goals",
    availability: "Availability",
    studyTime: "Study Time",
    preferredLanguage: "Preferred Language", // Changed from preferredLanguages
    codingPlatform: "Coding Platform", // Changed from codingPlatforms
    github: "GitHub",
    linkedin: "LinkedIn",
    website: "Personal Website",
  }
  return fieldMap[fieldName] || fieldName
}

// Available programming languages
const availableLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "C#",
  "Go",
  "Rust",
  "TypeScript",
  "Swift",
  "Kotlin",
  "PHP",
  "Ruby",
  "Scala",
  "R",
  "MATLAB",
  "Dart",
  "C",
  "Objective-C",
  "Perl",
  "Haskell",
]

// Available coding platforms
const availablePlatforms = [
  { name: "LeetCode", icon: "🟢", url: "leetcode.com" },
  { name: "HackerRank", icon: "🟢", url: "hackerrank.com" },
  { name: "CodeChef", icon: "🟤", url: "codechef.com" },
  { name: "Codeforces", icon: "🔵", url: "codeforces.com" },
  { name: "AtCoder", icon: "🟠", url: "atcoder.jp" },
  { name: "TopCoder", icon: "🔴", url: "topcoder.com" },
  { name: "GeeksforGeeks", icon: "🟢", url: "geeksforgeeks.org" },
  { name: "HackerEarth", icon: "🟣", url: "hackerearth.com" },
  { name: "CodeWars", icon: "🔴", url: "codewars.com" },
  { name: "Exercism", icon: "🟣", url: "exercism.org" },
]

interface BuddyRequest {
  id: string
  name: string
  username: string
  avatar: string
  dsaLevel: string
  sharedTopics: string[]
  matchScore: number
  timestamp: string
  location: string
  bio: string
}

interface Buddy {
  id: string
  name: string
  username: string
  avatar: string
  dsaLevel: string
  status: "online" | "offline"
  lastMessage: string
  unreadCount: number
  location: string
  sharedTopics: string[]
}

interface ChatMessage {
  id: string
  sender: "buddy" | "me"
  message: string
  timestamp: string
}

const mockRequests: BuddyRequest[] = [
  {
    id: "1",
    name: "Alex Chen",
    username: "@alexchen",
    avatar: "/placeholder.svg?height=40&width=40",
    dsaLevel: "Intermediate",
    sharedTopics: ["arrays", "trees", "dynamic programming"],
    matchScore: 92,
    timestamp: "2 hours ago",
    location: "San Francisco, CA",
    bio: "Software engineer at Google, passionate about competitive programming.",
  },
  {
    id: "2",
    name: "Sarah Kim",
    username: "@sarahk",
    avatar: "/placeholder.svg?height=40&width=40",
    dsaLevel: "Advanced",
    sharedTopics: ["graphs", "competitive programming"],
    matchScore: 88,
    timestamp: "5 hours ago",
    location: "Global",
    bio: "CS student preparing for tech interviews, love solving complex challenges.",
  },
]

const mockBuddies: Buddy[] = [
  {
    id: "1",
    name: "Mike Johnson",
    username: "@mikej",
    avatar: "/placeholder.svg?height=40&width=40",
    dsaLevel: "Intermediate",
    status: "online",
    lastMessage: "Let's solve some tree problems today!",
    unreadCount: 2,
    location: "New York, NY",
    sharedTopics: ["arrays", "strings", "sorting"],
  },
  {
    id: "2",
    name: "Priya Patel",
    username: "@priyap",
    avatar: "/placeholder.svg?height=40&width=40",
    dsaLevel: "Beginner",
    status: "offline",
    lastMessage: "Thanks for explaining binary search!",
    unreadCount: 0,
    location: "London, UK",
    sharedTopics: ["trees", "searching", "sorting"],
  },
]

const mockMessages: ChatMessage[] = [
  {
    id: "1",
    sender: "buddy",
    message: "Hey! Ready for today's coding session?",
    timestamp: "10:30 AM",
  },
  {
    id: "2",
    sender: "me",
    message: "I was thinking we could work on some graph problems today.",
    timestamp: "10:32 AM",
  },
  {
    id: "3",
    sender: "buddy",
    message: "Perfect! I found this great DFS problem on LeetCode. Let me share the link.",
    timestamp: "10:33 AM",
  },
  {
    id: "4",
    sender: "buddy",
    message: "https://leetcode.com/problems/number-of-islands/",
    timestamp: "10:33 AM",
  },
  {
    id: "5",
    sender: "me",
    message: "Great choice! I'll start working on it now.",
    timestamp: "10:35 AM",
  },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("buddies")
  const [selectedBuddy, setSelectedBuddy] = useState<Buddy | null>(mockBuddies[0])
  const [newMessage, setNewMessage] = useState("")
  const [acceptedRequests, setAcceptedRequests] = useState<Set<string>>(new Set())
  const [declinedRequests, setDeclinedRequests] = useState<Set<string>>(new Set())
  const [profileData, setProfileData] = useState({
    fullName: "John Doe",
    username: "@johndoe",
    email: "john.doe@example.com",
    bio: "Passionate software developer with 3+ years of experience. Love solving complex algorithms and helping others learn DSA concepts.",
    dsaLevel: "intermediate",
    location: "San Francisco, CA",
    locationPreference: "global",
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    website: "https://johndoe.dev",
    interests: "arrays, trees, dynamic programming, graphs, sorting, searching",
    studyGoals: "Preparing for FAANG interviews and improving problem-solving skills",
    availability: "evenings",
    preferredLanguage: "JavaScript", // Changed from array to single string
    codingPlatform: { name: "LeetCode", username: "johndoe123", rating: "1850" }, // Changed from array to single object
    studyTime: "evening",
    profileImage: "/placeholder.svg?height=128&width=128", // Add profile image field
  })
  const [isEditingProfile, setIsEditingProfile] = useState(false)
  const [profileImageFile, setProfileImageFile] = useState<File | null>(null)

  const profileCompletion = calculateProfileCompletion(profileData)

  const handleAcceptRequest = (requestId: string) => {
    setAcceptedRequests((prev) => new Set([...prev, requestId]))
  }

  const handleDeclineRequest = (requestId: string) => {
    setDeclinedRequests((prev) => new Set([...prev, requestId]))
  }

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage("")
    }
  }

  const handleProfileImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setProfileImageFile(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setProfileData((prev) => ({ ...prev, profileImage: e.target?.result as string }))
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 font-['Inter',sans-serif]">
      {/* Navigation */}
      <Navbar showUserActions={true} />

      <div className="container mx-auto px-4 py-4 md:py-8 max-w-7xl">
        {/* Hero Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 md:mb-12">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 p-6 md:p-8 text-white shadow-2xl">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-white/10 blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/5 blur-2xl"></div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold">Welcome back, John!</h1>
                  </div>
                  <p className="text-blue-100 text-lg md:text-xl mb-6 max-w-2xl">
                    Ready to level up your coding skills? Your study buddies are waiting to tackle some challenging
                    problems together.
                  </p>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-4 w-4 text-blue-200" />
                        <span className="text-sm text-blue-200">Study Buddies</span>
                      </div>
                      <div className="text-2xl font-bold">{mockBuddies.length}</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="flex items-center gap-2 mb-2">
                        <MessageCircle className="h-4 w-4 text-purple-200" />
                        <span className="text-sm text-purple-200">Active Chats</span>
                      </div>
                      <div className="text-2xl font-bold">{mockBuddies.filter((b) => b.unreadCount > 0).length}</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="flex items-center gap-2 mb-2">
                        <UserPlus className="h-4 w-4 text-indigo-200" />
                        <span className="text-sm text-indigo-200">New Requests</span>
                      </div>
                      <div className="text-2xl font-bold">{mockRequests.length}</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="h-4 w-4 text-yellow-200" />
                        <span className="text-sm text-yellow-200">Profile Score</span>
                      </div>
                      <div className="text-2xl font-bold">{profileCompletion.percentage}%</div>
                    </div>
                  </div>
                </div>

                {/* Profile Completion Circle */}
                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <div className="w-24 h-24 md:w-32 md:h-32">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.2)" strokeWidth="8" fill="none" />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="white"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 40}`}
                          strokeDashoffset={`${2 * Math.PI * 40 * (1 - profileCompletion.percentage / 100)}`}
                          className="transition-all duration-1000 ease-out"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl md:text-3xl font-bold">{profileCompletion.percentage}%</div>
                          <div className="text-xs text-blue-100">Complete</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {profileCompletion.percentage < 100 && (
                    <Button
                      onClick={() => setActiveTab("profile")}
                      variant="secondary"
                      className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm"
                    >
                      Complete Profile
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        {(profileCompletion.percentage < 100 || mockRequests.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Profile Completion Alert */}
              {profileCompletion.percentage < 100 && (
                <Card className="border-0 shadow-lg bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-l-amber-400">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-amber-100 rounded-full">
                        <Settings className="h-6 w-6 text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-amber-900 mb-1">Complete Your Profile</h3>
                        <p className="text-sm text-amber-700 mb-3">
                          {profileCompletion.missingFields.length} fields remaining to unlock better matches
                        </p>
                        <div className="w-full bg-amber-200 rounded-full h-2 mb-3">
                          <div
                            className="bg-amber-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${profileCompletion.percentage}%` }}
                          />
                        </div>
                        <Button
                          size="sm"
                          onClick={() => setActiveTab("profile")}
                          className="bg-amber-500 hover:bg-amber-600 text-white"
                        >
                          Complete Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* New Requests Alert */}
              {mockRequests.length > 0 && (
                <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-l-green-400">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-green-100 rounded-full">
                        <UserPlus className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-green-900 mb-1">New Buddy Requests</h3>
                        <p className="text-sm text-green-700 mb-3">
                          {mockRequests.length} people want to study with you
                        </p>
                        <Button
                          size="sm"
                          onClick={() => setActiveTab("requests")}
                          className="bg-green-500 hover:bg-green-600 text-white"
                        >
                          View Requests
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </motion.div>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6 md:space-y-8">
          {/* Stylish tabs */}
          <div className="overflow-x-auto">
            <TabsList className="grid w-full grid-cols-4 min-w-[400px] md:min-w-0 md:w-auto bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg rounded-2xl p-2">
              <TabsTrigger
                value="buddies"
                className="flex flex-col md:flex-row items-center gap-2 text-sm md:text-base rounded-xl data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200"
              >
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline">My Buddies</span>
                <span className="sm:hidden">Buddies</span>
              </TabsTrigger>
              <TabsTrigger
                value="requests"
                className="flex flex-col md:flex-row items-center gap-2 text-sm md:text-base rounded-xl data-[state=active]:bg-green-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200"
              >
                <UserPlus className="h-4 w-4" />
                <span className="hidden sm:inline">Requests</span>
                <span className="sm:hidden">Requests</span>
                {mockRequests.length > 0 && (
                  <Badge variant="destructive" className="ml-1 h-5 w-5 p-0 text-xs animate-pulse">
                    {mockRequests.length}
                  </Badge>
                )}
              </TabsTrigger>
              <TabsTrigger
                value="chat"
                className="flex flex-col md:flex-row items-center gap-2 text-sm md:text-base rounded-xl data-[state=active]:bg-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chat</span>
                {mockBuddies.filter((b) => b.unreadCount > 0).length > 0 && (
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                )}
              </TabsTrigger>
              <TabsTrigger
                value="profile"
                className="flex flex-col md:flex-row items-center gap-2 text-sm md:text-base rounded-xl data-[state=active]:bg-indigo-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200"
              >
                <Settings className="h-4 w-4" />
                <span>Profile</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <AnimatePresence mode="wait">
            <TabsContent value="buddies" className="space-y-6 md:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {mockBuddies.map((buddy, index) => (
                    <motion.div
                      key={buddy.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:scale-105 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <CardContent className="p-6 relative z-10">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="relative">
                              <Avatar className="h-14 w-14 ring-4 ring-white shadow-lg">
                                <AvatarImage src={buddy.avatar || "/placeholder.svg"} alt={buddy.name} />
                                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-lg font-semibold">
                                  {buddy.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div
                                className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-3 border-white shadow-lg ${
                                  buddy.status === "online" ? "bg-green-500" : "bg-gray-400"
                                }`}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-gray-900 text-lg truncate">{buddy.name}</h3>
                              <p className="text-sm text-gray-500 truncate">{buddy.username}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge className="bg-blue-100 text-blue-700 text-xs">{buddy.dsaLevel}</Badge>
                                {buddy.unreadCount > 0 && (
                                  <Badge variant="destructive" className="text-xs animate-pulse">
                                    {buddy.unreadCount} new
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Target className="h-4 w-4 text-blue-500" />
                              <span>{buddy.location}</span>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3">
                              <p className="text-sm text-gray-700 italic">"{buddy.lastMessage}"</p>
                              <p className="text-xs text-gray-500 mt-1">2 minutes ago</p>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {buddy.sharedTopics.slice(0, 3).map((topic) => (
                                <Badge key={topic} variant="outline" className="text-xs">
                                  {topic}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-3">
                            <Button
                              onClick={() => {
                                setSelectedBuddy(buddy)
                                setActiveTab("chat")
                              }}
                              className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                              size="sm"
                            >
                              <MessageCircle className="h-4 w-4 mr-2" />
                              Chat
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-gray-200 hover:bg-gray-50 bg-transparent"
                            >
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {mockBuddies.length === 0 && (
                  <Card className="text-center py-16 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                    <CardContent>
                      <div className="p-6 bg-gray-50 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                        <Users className="h-12 w-12 text-gray-400" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">No Study Buddies Yet</h3>
                      <p className="text-gray-600 mb-6 max-w-md mx-auto">
                        Start by finding your perfect coding companion and begin your learning journey together!
                      </p>
                      <Link href="/matching">
                        <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg">
                          <Search className="h-4 w-4 mr-2" />
                          Find Study Buddies
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            </TabsContent>

            <TabsContent value="requests" className="space-y-6 md:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  {mockRequests.map((request, index) => (
                    <motion.div
                      key={request.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500"></div>
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex items-center gap-4 flex-1">
                              <Avatar className="h-16 w-16 ring-4 ring-white shadow-lg">
                                <AvatarImage src={request.avatar || "/placeholder.svg"} alt={request.name} />
                                <AvatarFallback className="bg-gradient-to-br from-green-500 to-blue-600 text-white text-xl font-semibold">
                                  {request.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                                  <h3 className="font-bold text-gray-900 text-lg">{request.name}</h3>
                                  <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm w-fit">
                                    <Star className="h-3 w-3 mr-1" />
                                    {request.matchScore}% Match
                                  </Badge>
                                </div>
                                <p className="text-sm text-gray-500 mb-3">
                                  {request.username} • {request.timestamp}
                                </p>
                                <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                                  <div className="flex items-center gap-1">
                                    <Target className="h-4 w-4 text-blue-500" />
                                    <span>{request.dsaLevel}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4 text-purple-500" />
                                    <span>{request.location}</span>
                                  </div>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-3">
                                  {request.sharedTopics.map((topic) => (
                                    <Badge
                                      key={topic}
                                      variant="outline"
                                      className="text-xs border-blue-200 text-blue-700"
                                    >
                                      {topic}
                                    </Badge>
                                  ))}
                                </div>
                                <p className="text-sm text-gray-600 italic">"{request.bio}"</p>
                              </div>
                            </div>

                            <div className="flex gap-3 md:flex-col lg:flex-row">
                              {acceptedRequests.has(request.id) ? (
                                <Badge className="bg-green-100 text-green-700 px-4 py-2">
                                  <Check className="h-4 w-4 mr-2" />
                                  Accepted
                                </Badge>
                              ) : declinedRequests.has(request.id) ? (
                                <Badge variant="secondary" className="bg-gray-100 text-gray-700 px-4 py-2">
                                  <X className="h-4 w-4 mr-2" />
                                  Declined
                                </Badge>
                              ) : (
                                <>
                                  <Button
                                    onClick={() => handleAcceptRequest(request.id)}
                                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg flex-1 md:flex-none"
                                    size="sm"
                                  >
                                    <Check className="h-4 w-4 mr-2" />
                                    Accept
                                  </Button>
                                  <Button
                                    onClick={() => handleDeclineRequest(request.id)}
                                    variant="outline"
                                    size="sm"
                                    className="flex-1 md:flex-none border-gray-200 hover:bg-gray-50"
                                  >
                                    <X className="h-4 w-4 mr-2" />
                                    Decline
                                  </Button>
                                </>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {mockRequests.length === 0 && (
                  <Card className="text-center py-16 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                    <CardContent>
                      <div className="p-6 bg-gray-50 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                        <UserPlus className="h-12 w-12 text-gray-400" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">No Pending Requests</h3>
                      <p className="text-gray-600">
                        New buddy requests will appear here when people want to connect with you
                      </p>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            </TabsContent>

            <TabsContent value="chat" className="space-y-6 md:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {selectedBuddy ? (
                  <div className="space-y-4">
                    {/* Mobile Chat Header with Back Button */}
                    <div className="lg:hidden">
                      <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setSelectedBuddy(null)}
                              className="p-2 hover:bg-gray-100 rounded-full"
                            >
                              <ChevronLeft className="h-5 w-5" />
                            </Button>
                            <Avatar className="h-10 w-10 ring-2 ring-white shadow">
                              <AvatarImage src={selectedBuddy.avatar || "/placeholder.svg"} alt={selectedBuddy.name} />
                              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                                {selectedBuddy.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900">{selectedBuddy.name}</h3>
                              <p className="text-xs text-gray-500">
                                {selectedBuddy.status === "online" ? (
                                  <span className="flex items-center gap-1">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    Online
                                  </span>
                                ) : (
                                  "Last seen 2 hours ago"
                                )}
                              </p>
                            </div>
                            <div className="flex items-center gap-1">
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-xs p-2 bg-transparent border-gray-200"
                              >
                                <UserMinus className="h-3 w-3" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-xs p-2 bg-transparent border-gray-200"
                              >
                                <Shield className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Desktop and Mobile Chat Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[500px] md:h-[600px]">
                      {/* Buddy List - Hidden on mobile when chat is active, visible on desktop */}
                      <Card
                        className={`lg:col-span-1 ${selectedBuddy ? "hidden lg:block" : "block"} border-0 shadow-lg bg-white/80 backdrop-blur-sm`}
                      >
                        <CardHeader className="pb-3 border-b border-gray-100">
                          <CardTitle className="text-lg flex items-center justify-between">
                            <span className="flex items-center gap-2">
                              <MessageCircle className="h-5 w-5 text-blue-500" />
                              Conversations
                            </span>
                            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                              {mockBuddies.length}
                            </Badge>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                          <ScrollArea className="h-[400px] md:h-[500px]">
                            {mockBuddies.map((buddy) => (
                              <div
                                key={buddy.id}
                                onClick={() => setSelectedBuddy(buddy)}
                                className={`p-4 cursor-pointer hover:bg-blue-50 border-b border-gray-50 transition-all duration-200 ${
                                  selectedBuddy?.id === buddy.id ? "bg-blue-50 border-l-4 border-l-blue-500" : ""
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  <div className="relative">
                                    <Avatar className="h-12 w-12 ring-2 ring-white shadow">
                                      <AvatarImage src={buddy.avatar || "/placeholder.svg"} alt={buddy.name} />
                                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                                        {buddy.name
                                          .split(" ")
                                          .map((n) => n[0])
                                          .join("")}
                                      </AvatarFallback>
                                    </Avatar>
                                    <div
                                      className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white shadow ${
                                        buddy.status === "online" ? "bg-green-500" : "bg-gray-400"
                                      }`}
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                      <p className="font-semibold text-gray-900 truncate">{buddy.name}</p>
                                      {buddy.unreadCount > 0 && (
                                        <Badge
                                          variant="destructive"
                                          className="h-5 w-5 p-0 text-xs flex items-center justify-center animate-pulse"
                                        >
                                          {buddy.unreadCount}
                                        </Badge>
                                      )}
                                    </div>
                                    <p className="text-sm text-gray-500 truncate">{buddy.lastMessage}</p>
                                    <div className="flex items-center justify-between mt-2">
                                      <span className="text-xs text-gray-400">2 min ago</span>
                                      <div className="flex flex-wrap gap-1">
                                        {buddy.sharedTopics.slice(0, 2).map((topic) => (
                                          <Badge
                                            key={topic}
                                            variant="outline"
                                            className="text-xs px-1 py-0 border-blue-200 text-blue-600"
                                          >
                                            {topic}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </ScrollArea>
                        </CardContent>
                      </Card>

                      {/* Chat Area - Full width on mobile, 3/4 width on desktop */}
                      <Card
                        className={`lg:col-span-3 ${selectedBuddy ? "block" : "hidden lg:block"} border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden`}
                      >
                        {selectedBuddy ? (
                          <>
                            {/* Desktop Chat Header */}
                            <CardHeader className="border-b border-gray-100 p-6 hidden lg:block bg-gradient-to-r from-blue-50 to-purple-50">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                  <Avatar className="h-12 w-12 ring-4 ring-white shadow-lg">
                                    <AvatarImage
                                      src={selectedBuddy.avatar || "/placeholder.svg"}
                                      alt={selectedBuddy.name}
                                    />
                                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                                      {selectedBuddy.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <h3 className="font-bold text-gray-900 text-lg">{selectedBuddy.name}</h3>
                                    <p className="text-sm text-gray-600 flex items-center gap-2">
                                      {selectedBuddy.status === "online" ? (
                                        <>
                                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                          Online
                                        </>
                                      ) : (
                                        "Last seen 2 hours ago"
                                      )}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="bg-white/80 border-gray-200 hover:bg-white"
                                  >
                                    <UserMinus className="h-4 w-4 mr-2" />
                                    Unmatch
                                  </Button>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="bg-white/80 border-gray-200 hover:bg-white"
                                  >
                                    <Shield className="h-4 w-4 mr-2" />
                                    Block
                                  </Button>
                                </div>
                              </div>
                            </CardHeader>

                            <CardContent className="p-0 flex flex-col h-[400px] md:h-[500px] lg:h-[500px]">
                              <ScrollArea className="flex-1 p-4 bg-gradient-to-b from-gray-50/50 to-white">
                                <div className="space-y-4">
                                  {mockMessages.map((message) => (
                                    <div
                                      key={message.id}
                                      className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
                                    >
                                      <div
                                        className={`max-w-[85%] md:max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-sm ${
                                          message.sender === "me"
                                            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-md"
                                            : "bg-white text-gray-900 rounded-bl-md border border-gray-100"
                                        }`}
                                      >
                                        <p className="text-sm md:text-base leading-relaxed">{message.message}</p>
                                        <p
                                          className={`text-xs mt-2 ${
                                            message.sender === "me" ? "text-blue-100" : "text-gray-500"
                                          }`}
                                        >
                                          {message.timestamp}
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </ScrollArea>
                              <div className="border-t border-gray-100 p-4 bg-white">
                                <div className="flex gap-3">
                                  <Input
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    placeholder="Type your message..."
                                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                                    className="flex-1 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                                  />
                                  <Button
                                    onClick={handleSendMessage}
                                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg rounded-xl px-6"
                                    size="sm"
                                  >
                                    <Send className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </>
                        ) : (
                          <CardContent className="flex items-center justify-center h-full">
                            <div className="text-center">
                              <div className="p-6 bg-gray-50 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                                <MessageCircle className="h-12 w-12 text-gray-400" />
                              </div>
                              <h3 className="text-xl font-bold text-gray-900 mb-3">Select a Conversation</h3>
                              <p className="text-gray-600">Choose a buddy from the list to start chatting</p>
                            </div>
                          </CardContent>
                        )}
                      </Card>
                    </div>
                  </div>
                ) : (
                  /* Mobile Chat List View */
                  <div className="lg:hidden">
                    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                      <CardHeader className="border-b border-gray-100">
                        <CardTitle className="text-xl flex items-center justify-between">
                          <span className="flex items-center gap-2">
                            <MessageCircle className="h-6 w-6 text-purple-500" />
                            Your Conversations
                          </span>
                          <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                            {mockBuddies.length}
                          </Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="space-y-1">
                          {mockBuddies.map((buddy) => (
                            <div
                              key={buddy.id}
                              onClick={() => setSelectedBuddy(buddy)}
                              className="p-4 cursor-pointer hover:bg-blue-50 border-b border-gray-50 transition-all duration-200 active:bg-blue-100"
                            >
                              <div className="flex items-center gap-4">
                                <div className="relative">
                                  <Avatar className="h-14 w-14 ring-2 ring-white shadow">
                                    <AvatarImage src={buddy.avatar || "/placeholder.svg"} alt={buddy.name} />
                                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                                      {buddy.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div
                                    className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white shadow ${
                                      buddy.status === "online" ? "bg-green-500" : "bg-gray-400"
                                    }`}
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between mb-1">
                                    <h3 className="font-bold text-gray-900 truncate text-lg">{buddy.name}</h3>
                                    <div className="flex items-center gap-2">
                                      <span className="text-xs text-gray-400">2 min</span>
                                      {buddy.unreadCount > 0 && (
                                        <Badge
                                          variant="destructive"
                                          className="h-6 w-6 p-0 text-xs flex items-center justify-center animate-pulse"
                                        >
                                          {buddy.unreadCount}
                                        </Badge>
                                      )}
                                    </div>
                                  </div>
                                  <p className="text-sm text-gray-600 truncate mb-2">"{buddy.lastMessage}"</p>
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3 text-xs text-gray-500">
                                      <div className="flex items-center gap-1">
                                        <Target className="h-3 w-3 text-blue-500" />
                                        <span>{buddy.dsaLevel}</span>
                                      </div>
                                      <span>•</span>
                                      <span>{buddy.location}</span>
                                    </div>
                                    <ChevronRight className="h-5 w-5 text-gray-400" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* No Conversations State */}
                {mockBuddies.length === 0 && (
                  <Card className="text-center py-16 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                    <CardContent>
                      <div className="p-6 bg-gray-50 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                        <MessageCircle className="h-12 w-12 text-gray-400" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">No Conversations Yet</h3>
                      <p className="text-gray-600 mb-6 max-w-md mx-auto">
                        Start chatting with your study buddies and build meaningful connections!
                      </p>
                      <Link href="/matching">
                        <Button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white shadow-lg">
                          <Search className="h-4 w-4 mr-2" />
                          Find Study Buddies
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            </TabsContent>

            <TabsContent value="profile" className="space-y-6 md:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Resume-style Profile Layout */}
                <div className="max-w-4xl mx-auto">
                  <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                    <CardContent className="p-0">
                      {/* Header Section - Resume Style */}
                      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white p-6 md:p-8 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-white/10 blur-xl"></div>
                        <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/5 blur-2xl"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
                          <div className="relative">
                            <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-white shadow-2xl">
                              <AvatarImage
                                src={profileData.profileImage || "/placeholder.svg"}
                                alt={profileData.fullName}
                              />
                              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-4xl md:text-5xl font-bold">
                                {profileData.fullName
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            {isEditingProfile && (
                              <>
                                <input
                                  type="file"
                                  accept="image/*"
                                  onChange={handleProfileImageChange}
                                  className="hidden"
                                  id="profile-image-upload"
                                />
                                <label
                                  htmlFor="profile-image-upload"
                                  className="absolute bottom-2 right-2 bg-white text-blue-600 rounded-full p-3 shadow-lg cursor-pointer hover:bg-gray-50 transition-colors"
                                >
                                  <Settings className="h-5 w-5" />
                                </label>
                              </>
                            )}
                          </div>
                          <div className="flex-1 text-center md:text-left">
                            <h1 className="text-3xl md:text-4xl font-bold mb-3">{profileData.fullName}</h1>
                            <p className="text-blue-100 text-xl md:text-2xl mb-3">{profileData.username}</p>
                            <p className="text-blue-100 text-base md:text-lg mb-4">{profileData.email}</p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                              <Badge className="bg-white/20 text-white border-white/30 text-sm px-4 py-2 backdrop-blur-sm">
                                {profileData.dsaLevel.charAt(0).toUpperCase() + profileData.dsaLevel.slice(1)} Level
                              </Badge>
                              <Badge className="bg-white/20 text-white border-white/30 text-sm px-4 py-2 backdrop-blur-sm">
                                📍 {profileData.location}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex flex-col items-center gap-4">
                            <div className="text-center">
                              <div className="text-4xl md:text-5xl font-bold mb-2">{profileCompletion.percentage}%</div>
                              <div className="text-sm text-blue-100">Profile Complete</div>
                            </div>
                            <Button
                              onClick={() => setIsEditingProfile(!isEditingProfile)}
                              variant="secondary"
                              className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm px-6 py-2"
                            >
                              <Settings className="h-4 w-4 mr-2" />
                              {isEditingProfile ? "Save Changes" : "Edit Profile"}
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Profile Content */}
                      <div className="p-6 md:p-8 space-y-8 md:space-y-10">
                        {/* Bio Section */}
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-3">
                            <div className="p-2 bg-blue-100 rounded-xl">
                              <Users className="h-6 w-6 text-blue-600" />
                            </div>
                            About Me
                          </h2>
                          {isEditingProfile ? (
                            <textarea
                              value={profileData.bio}
                              onChange={(e) => setProfileData((prev) => ({ ...prev, bio: e.target.value }))}
                              className="w-full p-4 border border-gray-300 rounded-xl resize-none text-base shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              rows={4}
                              placeholder="Tell others about yourself, your coding journey, and what you're looking for in a study buddy..."
                            />
                          ) : (
                            <div className="bg-gray-50 rounded-xl p-6">
                              <p className="text-gray-700 leading-relaxed text-base md:text-lg">{profileData.bio}</p>
                            </div>
                          )}
                        </div>

                        {/* Two Column Layout for Details */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                          {/* Left Column */}
                          <div className="space-y-8">
                            {/* DSA Level */}
                            <div>
                              <h3 className="font-bold text-gray-900 mb-3 text-lg md:text-xl flex items-center gap-2">
                                <Target className="h-5 w-5 text-blue-500" />
                                DSA Level
                              </h3>
                              {isEditingProfile ? (
                                <Select
                                  value={profileData.dsaLevel}
                                  onValueChange={(value) => setProfileData((prev) => ({ ...prev, dsaLevel: value }))}
                                >
                                  <SelectTrigger className="h-12 rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-500">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="beginner">Beginner</SelectItem>
                                    <SelectItem value="intermediate">Intermediate</SelectItem>
                                    <SelectItem value="advanced">Advanced</SelectItem>
                                    <SelectItem value="expert">Expert</SelectItem>
                                  </SelectContent>
                                </Select>
                              ) : (
                                <Badge className="bg-blue-100 text-blue-700 text-lg px-4 py-2">
                                  {profileData.dsaLevel.charAt(0).toUpperCase() + profileData.dsaLevel.slice(1)}
                                </Badge>
                              )}
                            </div>

                            {/* Location */}
                            <div>
                              <h3 className="font-bold text-gray-900 mb-3 text-lg md:text-xl flex items-center gap-2">
                                <Calendar className="h-5 w-5 text-purple-500" />
                                Location
                              </h3>
                              {isEditingProfile ? (
                                <Input
                                  value={profileData.location}
                                  onChange={(e) => setProfileData((prev) => ({ ...prev, location: e.target.value }))}
                                  placeholder="e.g., San Francisco, CA"
                                  className="h-12 rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-500"
                                />
                              ) : (
                                <p className="text-gray-600 text-base md:text-lg bg-gray-50 rounded-xl p-4">
                                  📍 {profileData.location}
                                </p>
                              )}
                            </div>

                            {/* Preferred Language */}
                            <div>
                              <h3 className="font-bold text-gray-900 mb-3 text-lg md:text-xl flex items-center gap-2">
                                <Star className="h-5 w-5 text-green-500" />
                                Preferred Language
                              </h3>
                              {isEditingProfile ? (
                                <Select
                                  value={profileData.preferredLanguage}
                                  onValueChange={(value) =>
                                    setProfileData((prev) => ({ ...prev, preferredLanguage: value }))
                                  }
                                >
                                  <SelectTrigger className="h-12 rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-500">
                                    <SelectValue placeholder="Select a language" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {availableLanguages.map((lang) => (
                                      <SelectItem key={lang} value={lang}>
                                        {lang}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              ) : (
                                <Badge className="bg-green-100 text-green-700 text-lg px-4 py-2">
                                  💻 {profileData.preferredLanguage}
                                </Badge>
                              )}
                            </div>

                            {/* Coding Platform */}
                            <div>
                              <h3 className="font-bold text-gray-900 mb-3 text-lg md:text-xl flex items-center gap-2">
                                <TrendingUp className="h-5 w-5 text-orange-500" />
                                Coding Platform
                              </h3>
                              {isEditingProfile ? (
                                <div className="space-y-3">
                                  <Select
                                    value={profileData.codingPlatform.name}
                                    onValueChange={(value) => {
                                      const platform = availablePlatforms.find((p) => p.name === value)
                                      setProfileData((prev) => ({
                                        ...prev,
                                        codingPlatform: {
                                          ...prev.codingPlatform,
                                          name: value,
                                          icon: platform?.icon || "",
                                        },
                                      }))
                                    }}
                                  >
                                    <SelectTrigger className="h-12 rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-500">
                                      <SelectValue placeholder="Select a platform" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {availablePlatforms.map((platform) => (
                                        <SelectItem key={platform.name} value={platform.name}>
                                          <div className="flex items-center gap-2">
                                            <span>{platform.icon}</span>
                                            {platform.name}
                                          </div>
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <Input
                                    value={profileData.codingPlatform.username}
                                    onChange={(e) =>
                                      setProfileData((prev) => ({
                                        ...prev,
                                        codingPlatform: { ...prev.codingPlatform, username: e.target.value },
                                      }))
                                    }
                                    placeholder="Your username on this platform"
                                    className="h-12 rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-500"
                                  />
                                </div>
                              ) : (
                                <div className="bg-purple-50 rounded-xl p-4">
                                  <div className="flex items-center gap-3">
                                    <Badge className="bg-purple-100 text-purple-700 text-lg px-4 py-2">
                                      {availablePlatforms.find((p) => p.name === profileData.codingPlatform.name)?.icon}{" "}
                                      {profileData.codingPlatform.name}
                                    </Badge>
                                    <span className="text-gray-600 text-base">
                                      @{profileData.codingPlatform.username}
                                    </span>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Right Column */}
                          <div className="space-y-8">
                            {/* Study Goals */}
                            <div>
                              <h3 className="font-bold text-gray-900 mb-3 text-lg md:text-xl flex items-center gap-2">
                                <Target className="h-5 w-5 text-indigo-500" />
                                Study Goals
                              </h3>
                              {isEditingProfile ? (
                                <textarea
                                  value={profileData.studyGoals}
                                  onChange={(e) => setProfileData((prev) => ({ ...prev, studyGoals: e.target.value }))}
                                  className="w-full p-4 border border-gray-300 rounded-xl resize-none text-base shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                  rows={3}
                                  placeholder="What are your coding and learning goals?"
                                />
                              ) : (
                                <div className="bg-indigo-50 rounded-xl p-4">
                                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                    {profileData.studyGoals}
                                  </p>
                                </div>
                              )}
                            </div>

                            {/* Topics of Interest */}
                            <div>
                              <h3 className="font-bold text-gray-900 mb-3 text-lg md:text-xl flex items-center gap-2">
                                <Star className="h-5 w-5 text-yellow-500" />
                                Topics of Interest
                              </h3>
                              {isEditingProfile ? (
                                <Input
                                  value={profileData.interests}
                                  onChange={(e) => setProfileData((prev) => ({ ...prev, interests: e.target.value }))}
                                  placeholder="e.g., arrays, trees, dynamic programming, graphs"
                                  className="h-12 rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-500"
                                />
                              ) : (
                                <div className="flex flex-wrap gap-2">
                                  {profileData.interests.split(",").map((interest, index) => (
                                    <Badge
                                      key={index}
                                      variant="outline"
                                      className="text-sm px-3 py-1 border-yellow-200 text-yellow-700 bg-yellow-50"
                                    >
                                      {interest.trim()}
                                    </Badge>
                                  ))}
                                </div>
                              )}
                            </div>

                            {/* Availability */}
                            <div>
                              <h3 className="font-bold text-gray-900 mb-3 text-lg md:text-xl flex items-center gap-2">
                                <Clock className="h-5 w-5 text-green-500" />
                                Availability
                              </h3>
                              {isEditingProfile ? (
                                <Select
                                  value={profileData.availability}
                                  onValueChange={(value) =>
                                    setProfileData((prev) => ({ ...prev, availability: value }))
                                  }
                                >
                                  <SelectTrigger className="h-12 rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-500">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="mornings">Mornings</SelectItem>
                                    <SelectItem value="afternoons">Afternoons</SelectItem>
                                    <SelectItem value="evenings">Evenings</SelectItem>
                                    <SelectItem value="weekends">Weekends</SelectItem>
                                    <SelectItem value="flexible">Flexible</SelectItem>
                                  </SelectContent>
                                </Select>
                              ) : (
                                <Badge className="bg-orange-100 text-orange-700 text-lg px-4 py-2">
                                  🕐{" "}
                                  {profileData.availability.charAt(0).toUpperCase() + profileData.availability.slice(1)}
                                </Badge>
                              )}
                            </div>

                            {/* Social Links */}
                            <div>
                              <h3 className="font-bold text-gray-900 mb-4 text-lg md:text-xl flex items-center gap-2">
                                <Users className="h-5 w-5 text-blue-500" />
                                Social Links
                              </h3>
                              <div className="space-y-3">
                                {isEditingProfile ? (
                                  <>
                                    <Input
                                      value={profileData.github}
                                      onChange={(e) => setProfileData((prev) => ({ ...prev, github: e.target.value }))}
                                      placeholder="GitHub URL"
                                      className="h-12 rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-500"
                                    />
                                    <Input
                                      value={profileData.linkedin}
                                      onChange={(e) =>
                                        setProfileData((prev) => ({ ...prev, linkedin: e.target.value }))
                                      }
                                      placeholder="LinkedIn URL"
                                      className="h-12 rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-500"
                                    />
                                    <Input
                                      value={profileData.website}
                                      onChange={(e) => setProfileData((prev) => ({ ...prev, website: e.target.value }))}
                                      placeholder="Personal Website"
                                      className="h-12 rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-500"
                                    />
                                  </>
                                ) : (
                                  <div className="space-y-3">
                                    {profileData.github && (
                                      <a
                                        href={profileData.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                                      >
                                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                                          <span className="text-white text-sm font-bold">G</span>
                                        </div>
                                        <span className="text-blue-600 hover:underline">GitHub Profile</span>
                                      </a>
                                    )}
                                    {profileData.linkedin && (
                                      <a
                                        href={profileData.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                                      >
                                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                          <span className="text-white text-sm font-bold">in</span>
                                        </div>
                                        <span className="text-blue-600 hover:underline">LinkedIn Profile</span>
                                      </a>
                                    )}
                                    {profileData.website && (
                                      <a
                                        href={profileData.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                                      >
                                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                                          <span className="text-white text-sm font-bold">🌐</span>
                                        </div>
                                        <span className="text-blue-600 hover:underline">Personal Website</span>
                                      </a>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Profile Completion Status */}
                        {profileCompletion.percentage < 100 && (
                          <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200 border-2 shadow-lg">
                            <CardContent className="p-6 md:p-8">
                              <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-yellow-100 rounded-full">
                                  <TrendingUp className="h-6 w-6 text-yellow-600" />
                                </div>
                                <div>
                                  <h3 className="font-bold text-yellow-800 text-xl mb-1">
                                    Complete Your Profile ({profileCompletion.percentage}%)
                                  </h3>
                                  <p className="text-yellow-700">
                                    Unlock better matches by completing the remaining fields
                                  </p>
                                </div>
                              </div>
                              <div className="space-y-4">
                                <div className="w-full bg-yellow-200 rounded-full h-3">
                                  <div
                                    className="bg-gradient-to-r from-yellow-500 to-orange-500 h-3 rounded-full transition-all duration-500"
                                    style={{ width: `${profileCompletion.percentage}%` }}
                                  />
                                </div>
                                <div className="bg-white/80 rounded-xl p-4">
                                  <p className="text-yellow-800 font-medium mb-2">Missing fields:</p>
                                  <div className="flex flex-wrap gap-2">
                                    {profileCompletion.missingFields.map((field) => (
                                      <Badge
                                        key={field}
                                        variant="outline"
                                        className="border-yellow-300 text-yellow-700"
                                      >
                                        {formatFieldName(field)}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        )}

                        {/* Perfect Profile Celebration */}
                        {profileCompletion.percentage === 100 && (
                          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 border-2 shadow-lg">
                            <CardContent className="p-6 md:p-8 text-center">
                              <div className="p-4 bg-green-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                <Check className="h-10 w-10 text-green-600" />
                              </div>
                              <h3 className="text-2xl font-bold text-green-800 mb-2">🎉 Perfect Profile!</h3>
                              <p className="text-green-700 text-lg">
                                Your profile is complete and optimized for finding the best study matches!
                              </p>
                            </CardContent>
                          </Card>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}
