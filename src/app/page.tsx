import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CourseCard } from "@/components/course-card"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Award, Play, ArrowRight } from "lucide-react"
import { fetchProfile } from "@/app/api/fetchprofile"

// Mock data - in real app, this would come from your database
const featuredCourses = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp 2024",
    description: "Learn HTML, CSS, JavaScript, React, Node.js, and MongoDB to become a full-stack developer",
    instructor_id: "instructor-1",
    category_id: "web-dev",
    price: 89.99,
    level: "beginner" as const,
    status: "published" as const,
    thumbnail_url: "/course-1.jpg",
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
    instructor: { name: "Angela Yu" },
    _count: { enrollments: 12540 }
  },
  {
    id: "2", 
    title: "Advanced React and Redux",
    description: "Master React hooks, Redux toolkit, and advanced patterns for scalable applications",
    instructor_id: "instructor-2",
    category_id: "web-dev",
    price: 79.99,
    level: "advanced" as const,
    status: "published" as const,
    thumbnail_url: "/course-2.jpg",
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
    instructor: { name: "Stephen Grider" },
    _count: { enrollments: 8750 }
  },
  {
    id: "3",
    title: "Python for Data Science and Machine Learning",
    description: "Complete guide to Python programming for data analysis and machine learning",
    instructor_id: "instructor-3",
    category_id: "data-science",
    price: 94.99,
    level: "intermediate" as const,
    status: "published" as const,
    thumbnail_url: "/course-3.jpg",
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
    instructor: { name: "Jose Portilla" },
    _count: { enrollments: 15200 }
  },
  {
    id: "4",
    title: "AWS Solutions Architect Associate",
    description: "Prepare for AWS certification with hands-on projects and real-world scenarios",
    instructor_id: "instructor-4",
    category_id: "cloud",
    price: 109.99,
    level: "intermediate" as const,
    status: "published" as const,
    thumbnail_url: "/course-4.jpg",
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
    instructor: { name: "Ryan Kroonenburg" },
    _count: { enrollments: 6800 }
  }
]

const categories = [
  { name: "Web Development", courses: 2540, icon: "💻" },
  { name: "Data Science", courses: 1890, icon: "📊" },
  { name: "Mobile Development", courses: 1230, icon: "📱" },
  { name: "Cloud Computing", courses: 890, icon: "☁️" },
  { name: "Cybersecurity", courses: 760, icon: "🔒" },
  { name: "AI & Machine Learning", courses: 1450, icon: "🤖" },
]

export default async function HomePage() {

  const profile = await fetchProfile();
  console.log(profile);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Education for all
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                การศึกษาที่มีคุณภาพสำหรับทุกคน
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/courses">
                  <Button variant="default" className="text-black">
                    Start Learning Today
                  </Button>
                </Link>
                <Link href="/teach">
                  <Button 
                    variant="outline"  
                  >
                    Become an Instructor
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Course Progress</h3>
                  <Play className="h-6 w-6" />
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">React Fundamentals</span>
                      <span className="text-sm">85%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full w-[85%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">JavaScript Mastery</span>
                      <span className="text-sm">60%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full w-[60%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <BookOpen className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10,000+</h3>
              <p className="text-gray-600">Online Courses</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500K+</h3>
              <p className="text-gray-600">Students Enrolled</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">1,000+</h3>
              <p className="text-gray-600">Expert Instructors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Courses</h2>
            <Link href="/courses">
              <Button variant="outline" className="flex items-center space-x-2">
                <span>View All</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Explore Top Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link key={category.name} href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer text-center p-6">
                  <CardContent className="p-0">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="font-semibold mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.courses} courses</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Transform your life through education
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Learners around the world are launching new careers, advancing in their fields, 
            and enriching their lives.
          </p>
          <Link href="/courses">
            <Button variant="default" className="text-black">
              Join Millions of Learners Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
