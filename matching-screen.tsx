"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, Target, Sparkles, Bot, Users } from "lucide-react"

type MatchingState = "form" | "matching" | "results"

interface UserPreferences {
  dsaLevel: string
  studyTime: string
  availability: string
  topics: string[]
  timezone: string
}

interface MatchedUser {
  id: string
  name: string
  username: string
  avatar: string
  dsaLevel: string
  studyTime: string
  sharedTopics: string[]
  matchScore: number
}

const topics = [
  "Arrays",
  "Trees",
  "Graphs",
  "Dynamic Programming",
  "Competitive Programming",
  "Strings",
  "Sorting",
  "Searching",
  "Linked Lists",
  "Hash Tables",
  "Recursion",
  "Greedy Algorithms",
]

const mockMatches: MatchedUser[] = [
  {
    id: "1",
    name: "Alex Chen",
    username: "@alexchen",
    avatar: "/placeholder.svg?height=40&width=40",
    dsaLevel: "Intermediate",
    studyTime: "Evening",
    sharedTopics: ["Arrays", "Trees", "Dynamic Programming"],
    matchScore: 92,
  },
  {
    id: "2",
    name: "Sarah Kim",
    username: "@sarahk",
    avatar: "/placeholder.svg?height=40&width=40",
    dsaLevel: "Advanced",
    studyTime: "Morning",
    sharedTopics: ["Graphs", "Competitive Programming"],
    matchScore: 88,
  },
  {
    id: "3",
    name: "Mike Johnson",
    username: "@mikej",
    avatar: "/placeholder.svg?height=40&width=40",
    dsaLevel: "Intermediate",
    studyTime: "Evening",
    sharedTopics: ["Arrays", "Strings", "Hash Tables"],
    matchScore: 85,
  },
  {
    id: "4",
    name: "Priya Patel",
    username: "@priyap",
    avatar: "/placeholder.svg?height=40&width=40",
    dsaLevel: "Beginner",
    studyTime: "Flexible",
    sharedTopics: ["Trees", "Recursion", "Sorting"],
    matchScore: 82,
  },
  {
    id: "5",
    name: "David Lee",
    username: "@davidl",
    avatar: "/placeholder.svg?height=40&width=40",
    dsaLevel: "Advanced",
    studyTime: "Late Night",
    sharedTopics: ["Dynamic Programming", "Greedy Algorithms"],
    matchScore: 79,
  },
  {
    id: "6",
    name: "Emma Wilson",
    username: "@emmaw",
    avatar: "/placeholder.svg?height=40&width=40",
    dsaLevel: "Intermediate",
    studyTime: "Morning",
    sharedTopics: ["Graphs", "Trees", "Searching"],
    matchScore: 76,
  },
]

const loadingMessages = [
  "🤖 Hang tight! We're analyzing your preferences to find the perfect buddy...",
  "Matching you with someone who shares your learning vibe...",
  "Finding developers who complement your coding style...",
  "Almost there! Preparing your personalized matches...",
]

export default function Component() {
  const [currentState, setCurrentState] = useState<MatchingState>("form")
  const [preferences, setPreferences] = useState<UserPreferences>({
    dsaLevel: "",
    studyTime: "",
    availability: "",
    topics: [],
    timezone: "",
  })
  const [loadingMessageIndex, setLoadingMessageIndex] = useState(0)
  const [sentRequests, setSentRequests] = useState<Set<string>>(new Set())

  useEffect(() => {
    if (currentState === "matching") {
      const messageInterval = setInterval(() => {
        setLoadingMessageIndex((prev) => (prev + 1) % loadingMessages.length)
      }, 1000)

      const matchingTimeout = setTimeout(() => {
        setCurrentState("results")
      }, 3500)

      return () => {
        clearInterval(messageInterval)
        clearTimeout(matchingTimeout)
      }
    }
  }, [currentState])

  const handleTopicChange = (topic: string, checked: boolean) => {
    setPreferences((prev) => ({
      ...prev,
      topics: checked ? [...prev.topics, topic] : prev.topics.filter((t) => t !== topic),
    }))
  }

  const handleStartMatching = () => {
    setCurrentState("matching")
    setLoadingMessageIndex(0)
  }

  const handleSendRequest = (userId: string) => {
    setSentRequests((prev) => new Set([...prev, userId]))
  }

  const isFormValid =
    preferences.dsaLevel && preferences.studyTime && preferences.availability && preferences.topics.length > 0

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">DSA Buddy</h1>
          </div>
          <p className="text-gray-600 text-lg">Find your perfect coding companion</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* Form State */}
          {currentState === "form" && (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="shadow-lg border-0 bg-white">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl text-gray-900">Tell us about yourself</CardTitle>
                  <p className="text-gray-600">Help us find the perfect study buddy for you</p>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* DSA Level */}
                  <div className="space-y-3">
                    <Label className="text-base font-medium text-gray-900">DSA Level</Label>
                    <Select
                      value={preferences.dsaLevel}
                      onValueChange={(value) => setPreferences((prev) => ({ ...prev, dsaLevel: value }))}
                    >
                      <SelectTrigger className="h-12 border-gray-200 focus:border-blue-500">
                        <SelectValue placeholder="Select your current level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Study Time */}
                  <div className="space-y-3">
                    <Label className="text-base font-medium text-gray-900">Preferred Study Time</Label>
                    <RadioGroup
                      value={preferences.studyTime}
                      onValueChange={(value) => setPreferences((prev) => ({ ...prev, studyTime: value }))}
                      className="grid grid-cols-2 gap-4"
                    >
                      {["Morning", "Evening", "Late Night", "Flexible"].map((time) => (
                        <div key={time} className="flex items-center space-x-2">
                          <RadioGroupItem value={time.toLowerCase().replace(" ", "-")} id={time} />
                          <Label htmlFor={time} className="cursor-pointer">
                            {time}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Availability */}
                  <div className="space-y-3">
                    <Label className="text-base font-medium text-gray-900">Availability</Label>
                    <RadioGroup
                      value={preferences.availability}
                      onValueChange={(value) => setPreferences((prev) => ({ ...prev, availability: value }))}
                      className="grid grid-cols-3 gap-4"
                    >
                      {["Daily", "Weekends", "Custom"].map((availability) => (
                        <div key={availability} className="flex items-center space-x-2">
                          <RadioGroupItem value={availability.toLowerCase()} id={availability} />
                          <Label htmlFor={availability} className="cursor-pointer">
                            {availability}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Topics */}
                  <div className="space-y-3">
                    <Label className="text-base font-medium text-gray-900">Topics of Interest</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {topics.map((topic) => (
                        <div key={topic} className="flex items-center space-x-2">
                          <Checkbox
                            id={topic}
                            checked={preferences.topics.includes(topic)}
                            onCheckedChange={(checked) => handleTopicChange(topic, checked as boolean)}
                          />
                          <Label htmlFor={topic} className="text-sm cursor-pointer">
                            {topic}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timezone */}
                  <div className="space-y-3">
                    <Label htmlFor="timezone" className="text-base font-medium text-gray-900">
                      Timezone <span className="text-gray-500 font-normal">(Optional)</span>
                    </Label>
                    <Input
                      id="timezone"
                      placeholder="e.g., PST, EST, GMT+5:30"
                      value={preferences.timezone}
                      onChange={(e) => setPreferences((prev) => ({ ...prev, timezone: e.target.value }))}
                      className="h-12 border-gray-200 focus:border-blue-500"
                    />
                  </div>

                  <Button
                    onClick={handleStartMatching}
                    disabled={!isFormValid}
                    className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg"
                  >
                    Start Matching
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Matching State */}
          {currentState === "matching" && (
            <motion.div
              key="matching"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="text-center py-16"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="inline-block mb-8"
              >
                <Bot className="h-16 w-16 text-blue-600" />
              </motion.div>

              <motion.div
                key={loadingMessageIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-semibold text-gray-900">Finding Your Perfect Match</h2>
                <p className="text-lg text-gray-600 max-w-md mx-auto">{loadingMessages[loadingMessageIndex]}</p>
              </motion.div>

              <motion.div
                className="flex justify-center gap-2 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 bg-blue-600 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                  />
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Results State */}
          {currentState === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-8"
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Your Perfect Matches</h2>
                  <Sparkles className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-gray-600">We found {mockMatches.length} amazing study buddies for you!</p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockMatches.map((match, index) => (
                  <motion.div
                    key={match.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-200">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={match.avatar || "/placeholder.svg"} alt={match.name} />
                            <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                              {match.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">{match.name}</h3>
                            <p className="text-sm text-gray-500">{match.username}</p>
                          </div>
                          <Badge variant="secondary" className="bg-green-100 text-green-700 font-medium">
                            {match.matchScore}% Match
                          </Badge>
                        </div>

                        <div className="space-y-3 mb-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Target className="h-4 w-4" />
                            <span>{match.dsaLevel}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock className="h-4 w-4" />
                            <span>{match.studyTime}</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <p className="text-sm font-medium text-gray-900 mb-2">Shared Interests:</p>
                          <div className="flex flex-wrap gap-1">
                            {match.sharedTopics.map((topic) => (
                              <Badge key={topic} variant="outline" className="text-xs border-blue-200 text-blue-700">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Button
                          onClick={() => handleSendRequest(match.id)}
                          disabled={sentRequests.has(match.id)}
                          className={`w-full ${
                            sentRequests.has(match.id)
                              ? "bg-green-600 hover:bg-green-600"
                              : "bg-blue-600 hover:bg-blue-700"
                          }`}
                        >
                          {sentRequests.has(match.id) ? "Request Sent ✓" : "Send Request"}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center mt-8"
              >
                <Button
                  variant="outline"
                  onClick={() => setCurrentState("form")}
                  className="border-blue-200 text-blue-600 hover:bg-blue-50"
                >
                  Update Preferences
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
