"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Target, MapPin, Clock, Code, Trophy, Heart, X, Check, Star, MessageCircle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Mock user profile data (this would come from the dashboard profile)
const userProfile = {
  preferredLanguage: "JavaScript",
  codingPlatform: { name: "LeetCode", username: "johndoe123", rating: "1850" },
  dsaLevel: "intermediate",
  location: "San Francisco, CA",
  locationPreference: "global",
}

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

interface MatchingFormData {
  dsaLevel: string
  topicsOfInterest: string
  studyGoals: string
  availability: string
  studyTime: string
  locationPreference: string
  city: string
}

interface MatchResult {
  id: string
  name: string
  username: string
  avatar: string
  bio: string
  dsaLevel: string
  matchScore: number
  location: string
  sharedTopics: string[]
  preferredLanguage: string
  codingPlatform: { name: string; username: string; rating: string }
  studyTime: string
  availability: string
}

const mockMatches: MatchResult[] = [
  {
    id: "1",
    name: "Alex Chen",
    username: "@alexchen",
    avatar: "/placeholder.svg?height=80&width=80",
    bio: "Software engineer at Google with 4+ years of experience. Passionate about competitive programming and system design. Looking for someone to practice advanced algorithms with.",
    dsaLevel: "Advanced",
    matchScore: 95,
    location: "San Francisco, CA",
    sharedTopics: ["dynamic programming", "graphs", "system design", "trees"],
    preferredLanguage: "JavaScript",
    codingPlatform: { name: "LeetCode", username: "alexc_codes", rating: "2100" },
    studyTime: "evening",
    availability: "weekdays",
  },
  {
    id: "2",
    name: "Sarah Kim",
    username: "@sarahk",
    avatar: "/placeholder.svg?height=80&width=80",
    bio: "CS student at Stanford preparing for tech interviews. Love solving challenging problems and explaining concepts to others. Available for daily practice sessions.",
    dsaLevel: "Intermediate",
    matchScore: 88,
    location: "Palo Alto, CA",
    sharedTopics: ["arrays", "strings", "binary search", "sorting"],
    preferredLanguage: "Python",
    codingPlatform: { name: "HackerRank", username: "sarah_codes", rating: "5 Star" },
    studyTime: "morning",
    availability: "daily",
  },
  {
    id: "3",
    name: "Mike Johnson",
    username: "@mikej",
    avatar: "/placeholder.svg?height=80&width=80",
    bio: "Full-stack developer transitioning to backend. Focusing on data structures and algorithms to improve problem-solving skills. Prefer collaborative learning.",
    dsaLevel: "Intermediate",
    matchScore: 82,
    location: "New York, NY",
    sharedTopics: ["hash tables", "linked lists", "recursion"],
    preferredLanguage: "Java",
    codingPlatform: { name: "CodeChef", username: "mike_dev", rating: "1650" },
    studyTime: "evening",
    availability: "weekends",
  },
  {
    id: "4",
    name: "Priya Patel",
    username: "@priyap",
    avatar: "/placeholder.svg?height=80&width=80",
    bio: "Recent bootcamp graduate diving deep into algorithms. Enthusiastic learner who enjoys breaking down complex problems into simple steps.",
    dsaLevel: "Beginner",
    matchScore: 76,
    location: "Austin, TX",
    sharedTopics: ["arrays", "loops", "basic sorting"],
    preferredLanguage: "JavaScript",
    codingPlatform: { name: "LeetCode", username: "priya_learns", rating: "1200" },
    studyTime: "flexible",
    availability: "evenings",
  },
]

export default function MatchingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [matches, setMatches] = useState<MatchResult[]>([])
  const [formData, setFormData] = useState<MatchingFormData>({
    dsaLevel: "",
    topicsOfInterest: "",
    studyGoals: "",
    availability: "",
    studyTime: "",
    locationPreference: "",
    city: "",
  })

  const handleInputChange = (field: keyof MatchingFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate required fields
    if (
      !formData.dsaLevel ||
      !formData.topicsOfInterest ||
      !formData.studyGoals ||
      !formData.availability ||
      !formData.studyTime ||
      !formData.locationPreference
    ) {
      alert("Please fill in all required fields")
      return
    }

    if (formData.locationPreference === "local" && !formData.city) {
      alert("Please enter your city for local matching")
      return
    }

    setIsLoading(true)
    setCurrentStep(2)

    // Simulate API call
    setTimeout(() => {
      setMatches(mockMatches)
      setIsLoading(false)
      setCurrentStep(3)
    }, 3000)
  }

  const handleConnect = (matchId: string) => {
    alert(`Connection request sent to user ${matchId}!`)
  }

  const handlePass = (matchId: string) => {
    setMatches((prev) => prev.filter((match) => match.id !== matchId))
  }

  const resetForm = () => {
    setCurrentStep(1)
    setMatches([])
    setFormData({
      dsaLevel: "",
      topicsOfInterest: "",
      studyGoals: "",
      availability: "",
      studyTime: "",
      locationPreference: "",
      city: "",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <Navbar showUserActions={false} />

      <div className="container mx-auto px-4 py-6 md:py-12 max-w-4xl">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6 md:space-y-8"
            >
              {/* Header */}
              <div className="text-center space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Your Perfect Study Buddy</h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                  Tell us about your learning preferences and we'll match you with compatible coding partners
                </p>
              </div>

              {/* User Profile Info */}
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-800">
                    <Users className="h-5 w-5" />
                    Your Profile Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                      <Code className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Primary Language</p>
                        <p className="text-sm text-gray-900">{userProfile.preferredLanguage}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                      <Trophy className="h-5 w-5 text-yellow-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Coding Platform</p>
                        <p className="text-sm text-gray-900">
                          {availablePlatforms.find((p) => p.name === userProfile.codingPlatform.name)?.icon}{" "}
                          {userProfile.codingPlatform.name}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-blue-700 bg-blue-100 p-2 rounded">
                    💡 These preferences are taken from your profile and will be used for matching
                  </p>
                </CardContent>
              </Card>

              {/* Matching Form */}
              <Card className="shadow-xl border-0">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
                  <CardTitle className="text-xl md:text-2xl">Matching Preferences</CardTitle>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                    {/* DSA Level */}
                    <div className="space-y-3">
                      <Label className="text-base font-semibold text-gray-900 flex items-center gap-2">
                        <Target className="h-5 w-5 text-blue-600" />
                        What's your current DSA skill level? *
                      </Label>
                      <RadioGroup
                        value={formData.dsaLevel}
                        onValueChange={(value) => handleInputChange("dsaLevel", value)}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                      >
                        {["beginner", "intermediate", "advanced"].map((level) => (
                          <div key={level} className="flex items-center space-x-2">
                            <RadioGroupItem value={level} id={level} />
                            <Label
                              htmlFor={level}
                              className="capitalize cursor-pointer flex-1 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                            >
                              {level}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* Topics of Interest */}
                    <div className="space-y-3">
                      <Label htmlFor="topics" className="text-base font-semibold text-gray-900 flex items-center gap-2">
                        <Code className="h-5 w-5 text-green-600" />
                        Topics you want to focus on *
                      </Label>
                      <Input
                        id="topics"
                        placeholder="e.g., dynamic programming, graphs, system design, binary search"
                        value={formData.topicsOfInterest}
                        onChange={(e) => handleInputChange("topicsOfInterest", e.target.value)}
                        className="text-base p-4 h-12"
                      />
                      <p className="text-sm text-gray-500">
                        💡 Examples: arrays, strings, trees, graphs, dynamic programming, sorting, searching
                      </p>
                    </div>

                    {/* Study Goals */}
                    <div className="space-y-3">
                      <Label htmlFor="goals" className="text-base font-semibold text-gray-900 flex items-center gap-2">
                        <Star className="h-5 w-5 text-yellow-600" />
                        What are your study goals? *
                      </Label>
                      <Input
                        id="goals"
                        placeholder="e.g., preparing for FAANG interviews, improving problem-solving skills"
                        value={formData.studyGoals}
                        onChange={(e) => handleInputChange("studyGoals", e.target.value)}
                        className="text-base p-4 h-12"
                      />
                    </div>

                    {/* Availability */}
                    <div className="space-y-3">
                      <Label className="text-base font-semibold text-gray-900 flex items-center gap-2">
                        <Clock className="h-5 w-5 text-purple-600" />
                        When are you available to study? *
                      </Label>
                      <Select
                        value={formData.availability}
                        onValueChange={(value) => handleInputChange("availability", value)}
                      >
                        <SelectTrigger className="text-base p-4 h-12">
                          <SelectValue placeholder="Select your availability" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekdays">Weekdays</SelectItem>
                          <SelectItem value="weekends">Weekends</SelectItem>
                          <SelectItem value="evenings">Evenings</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Study Time */}
                    <div className="space-y-3">
                      <Label className="text-base font-semibold text-gray-900 flex items-center gap-2">
                        <Clock className="h-5 w-5 text-indigo-600" />
                        What time of day do you prefer to study? *
                      </Label>
                      <Select
                        value={formData.studyTime}
                        onValueChange={(value) => handleInputChange("studyTime", value)}
                      >
                        <SelectTrigger className="text-base p-4 h-12">
                          <SelectValue placeholder="Select your preferred study time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (6 AM - 12 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12 PM - 6 PM)</SelectItem>
                          <SelectItem value="evening">Evening (6 PM - 10 PM)</SelectItem>
                          <SelectItem value="late-night">Late Night (10 PM - 2 AM)</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Location Preference */}
                    <div className="space-y-4">
                      <Label className="text-base font-semibold text-gray-900 flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-red-600" />
                        Location preference *
                      </Label>
                      <RadioGroup
                        value={formData.locationPreference}
                        onValueChange={(value) => handleInputChange("locationPreference", value)}
                        className="space-y-3"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="local" id="local" />
                          <Label
                            htmlFor="local"
                            className="cursor-pointer flex-1 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                          >
                            🏠 Local - Connect with people from my city/region
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="global" id="global" />
                          <Label
                            htmlFor="global"
                            className="cursor-pointer flex-1 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                          >
                            🌍 Global - Connect with people from anywhere
                          </Label>
                        </div>
                      </RadioGroup>

                      {formData.locationPreference === "local" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-2"
                        >
                          <Label htmlFor="city" className="text-sm font-medium text-gray-700">
                            Your city *
                          </Label>
                          <Input
                            id="city"
                            placeholder="e.g., San Francisco, New York, London"
                            value={formData.city}
                            onChange={(e) => handleInputChange("city", e.target.value)}
                            className="text-base p-4 h-12"
                          />
                        </motion.div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Find My Study Buddies
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-12 md:py-20"
            >
              <Card className="max-w-md mx-auto shadow-2xl border-0 bg-gradient-to-br from-blue-50 to-purple-50">
                <CardContent className="p-8 md:p-12">
                  <div className="space-y-6">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="w-16 h-16 md:w-20 md:h-20 mx-auto"
                    >
                      <div className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                        <Users className="h-8 w-8 md:h-10 md:w-10 text-white" />
                      </div>
                    </motion.div>

                    <div className="space-y-2">
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900">Finding Your Perfect Matches</h2>
                      <p className="text-gray-600">
                        Analyzing your preferences and connecting you with compatible study buddies...
                      </p>
                    </div>

                    <div className="space-y-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3, ease: "easeInOut" }}
                        className="h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                      />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Matching preferences...</span>
                        <span>Almost done!</span>
                      </div>
                    </div>

                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="flex justify-center space-x-1"
                    >
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                          className="w-2 h-2 bg-blue-600 rounded-full"
                        />
                      ))}
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6 md:space-y-8"
            >
              {/* Header */}
              <div className="text-center space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-4"
                >
                  <Check className="h-8 w-8 md:h-10 md:w-10 text-white" />
                </motion.div>
                <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
                  Found {matches.length} Perfect Matches!
                </h1>
                <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                  Here are study buddies who share your interests and learning goals
                </p>
              </div>

              {/* Matches Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {matches.map((match, index) => (
                  <motion.div
                    key={match.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full shadow-xl border-0 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                      {/* Match Score Header */}
                      <div
                        className={`p-4 text-center text-white font-bold ${
                          match.matchScore >= 90
                            ? "bg-gradient-to-r from-green-500 to-emerald-500"
                            : match.matchScore >= 80
                              ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                              : "bg-gradient-to-r from-purple-500 to-pink-500"
                        }`}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <Heart className="h-5 w-5" />
                          <span className="text-lg md:text-xl">{match.matchScore}% Match</span>
                        </div>
                      </div>

                      <CardContent className="p-6 md:p-8">
                        {/* Profile Header */}
                        <div className="flex items-start gap-4 mb-6">
                          <Avatar className="h-16 w-16 md:h-20 md:w-20 border-4 border-white shadow-lg">
                            <AvatarImage src={match.avatar || "/placeholder.svg"} alt={match.name} />
                            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg md:text-xl">
                              {match.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{match.name}</h3>
                            <p className="text-sm md:text-base text-gray-600 mb-2">{match.username}</p>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline" className="text-xs">
                                <Target className="h-3 w-3 mr-1" />
                                {match.dsaLevel}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                <MapPin className="h-3 w-3 mr-1" />
                                {match.location}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        {/* Bio */}
                        <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">{match.bio}</p>

                        {/* Compatibility Info */}
                        <div className="space-y-4 mb-6">
                          {/* Language Match */}
                          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <Code className="h-5 w-5 text-green-600" />
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-700">Programming Language</p>
                              <div className="flex items-center gap-2">
                                <Badge
                                  className={`text-xs ${
                                    match.preferredLanguage === userProfile.preferredLanguage
                                      ? "bg-green-100 text-green-700"
                                      : "bg-gray-100 text-gray-700"
                                  }`}
                                >
                                  {match.preferredLanguage}
                                </Badge>
                                {match.preferredLanguage === userProfile.preferredLanguage && (
                                  <Check className="h-4 w-4 text-green-600" />
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Platform Match */}
                          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <Trophy className="h-5 w-5 text-yellow-600" />
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-700">Coding Platform</p>
                              <div className="flex items-center gap-2">
                                <Badge
                                  className={`text-xs ${
                                    match.codingPlatform.name === userProfile.codingPlatform.name
                                      ? "bg-yellow-100 text-yellow-700"
                                      : "bg-gray-100 text-gray-700"
                                  }`}
                                >
                                  {availablePlatforms.find((p) => p.name === match.codingPlatform.name)?.icon}{" "}
                                  {match.codingPlatform.name}
                                </Badge>
                                {match.codingPlatform.name === userProfile.codingPlatform.name && (
                                  <Check className="h-4 w-4 text-yellow-600" />
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Shared Topics */}
                          <div className="space-y-2">
                            <p className="text-sm font-medium text-gray-700 flex items-center gap-2">
                              <Star className="h-4 w-4 text-blue-600" />
                              Shared Interests
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {match.sharedTopics.map((topic) => (
                                <Badge
                                  key={topic}
                                  variant="outline"
                                  className="text-xs bg-blue-50 text-blue-700 border-blue-200"
                                >
                                  {topic}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <Button
                            onClick={() => handleConnect(match.id)}
                            className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Connect
                          </Button>
                          <Button
                            onClick={() => handlePass(match.id)}
                            variant="outline"
                            className="px-4 py-3 border-gray-300 hover:bg-gray-50 rounded-lg transition-colors"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button
                  onClick={resetForm}
                  variant="outline"
                  className="px-8 py-3 text-base font-semibold border-gray-300 hover:bg-gray-50 rounded-lg transition-colors bg-transparent"
                >
                  Find More Matches
                </Button>
                <Button className="px-8 py-3 text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Go to Dashboard
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}
