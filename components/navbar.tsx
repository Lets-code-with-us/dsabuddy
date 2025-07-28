"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Users, Menu, Home, Info, Mail, HelpCircle, Settings, Search } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavbarProps {
  showUserActions?: boolean
}

export function Navbar({ showUserActions = false }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigationItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/dashboard", label: "Dashboard", icon: Users },
    { href: "/matching", label: "Find Buddy", icon: Search },
    { href: "/about", label: "About", icon: Info },
    { href: "/contact", label: "Contact", icon: Mail },
    { href: "/faqs", label: "FAQs", icon: HelpCircle },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Users className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
            <span className="text-xl md:text-2xl font-bold text-gray-900">DSA Buddy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive(item.href) ? "default" : "ghost"}
                  size="sm"
                  className={
                    isActive(item.href)
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  }
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Desktop User Actions */}
          <div className="hidden md:flex items-center gap-4">
            {showUserActions && (
              <>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback className="bg-blue-100 text-blue-600">JD</AvatarFallback>
                </Avatar>
              </>
            )}
            {!showUserActions && (
              <div className="flex items-center gap-2">
                <Link href="/matching">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            {showUserActions && (
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback className="bg-blue-100 text-blue-600">JD</AvatarFallback>
              </Avatar>
            )}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-blue-600" />
                    DSA Buddy
                  </SheetTitle>
                  <SheetDescription>Navigate to different sections</SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-6">
                  {navigationItems.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                      <Button
                        variant={isActive(item.href) ? "default" : "ghost"}
                        className={`w-full justify-start ${
                          isActive(item.href)
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                        }`}
                      >
                        <item.icon className="h-4 w-4 mr-2" />
                        {item.label}
                      </Button>
                    </Link>
                  ))}
                  {showUserActions && (
                    <>
                      <div className="border-t border-gray-200 my-2" />
                      <Button variant="ghost" className="w-full justify-start text-gray-600">
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                      </Button>
                    </>
                  )}
                  {!showUserActions && (
                    <>
                      <div className="border-t border-gray-200 my-2" />
                      <Link href="/matching" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          <Search className="h-4 w-4 mr-2" />
                          Get Started
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
