import Link from "next/link"
import Image from "next/image"
import { Star, Users } from "lucide-react"
import { formatPrice } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

interface CourseCardProps {
  course: {
    id: string
    title: string
    description: string
    price: number
    level: 'beginner' | 'intermediate' | 'advanced'
    thumbnail_url?: string
    instructor: {
      name: string
    }
    _count: {
      enrollments: number
    }
  }
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/course/${course.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <div className="aspect-video relative">
          <Image
            src={course.thumbnail_url || "/placeholder-course.jpg"}
            alt={course.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-sm font-semibold">
            {formatPrice(course.price)}
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">
            {course.title}
          </h3>
          <p className="text-sm text-gray-600 mb-2">
            by {course.instructor.name}
          </p>
          <p className="text-sm text-gray-500 mb-3 line-clamp-2">
            {course.description}
          </p>
          
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span>4.5</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-3 w-3" />
                <span>{course._count.enrollments}</span>
              </div>
            </div>
            <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
              {course.level}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
} 