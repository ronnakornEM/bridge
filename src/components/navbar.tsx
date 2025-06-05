"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, BookOpen, Play } from "lucide-react";

interface Profile {
  id: string;
  email: string;
  name: string;
  role: string;
}

export function Navbar({ profile }: { profile: Profile | null }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const generateAvatarImage = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">
                Bridge the Gap
              </span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search courses..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/teach"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Teach on LearnHub
            </Link>
            <Link href="/my-learning">
              <Button variant="ghost" className="flex items-center space-x-2">
                <Play className="h-4 w-4" />
                <span>My Learning</span>
              </Button>
            </Link>
            {profile ? (
              <div className="flex items-center space-x-2">
                <Link href="/dashboard">
                  <Button>Dashboard</Button>
                </Link>
                <Link href="/profile">
                  <Button variant="round" size="icon">
                    {generateAvatarImage(profile.name)}
                  </Button>
                </Link>
              </div>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="outline">Log in</Button>
                </Link>
                <Link href="/signup">
                  <Button>Sign up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <Link
                href="/teach"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
              >
                Teach on LearnHub
              </Link>
              <Link
                href="/my-learning"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
              >
                My Learning
              </Link>
              <div className="flex space-x-2 pt-2">
                <Link href="/login" className="flex-1">
                  <Button className="w-full ">Log in</Button>
                </Link>
                <Link href="/signup" className="flex-1">
                  <Button className="w-full">Sign up</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
