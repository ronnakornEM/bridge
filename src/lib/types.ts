export interface User {
  id: string
  email: string
  name: string
  avatar_url?: string
  role: 'student' | 'instructor' | 'admin'
  created_at: string
  updated_at: string
}

export interface Category {
  id: string
  name: string
  description?: string
  created_at: string
  updated_at: string
}

export interface Course {
  id: string
  title: string
  description: string
  instructor_id: string
  category_id: string
  thumbnail_url?: string
  price: number
  level: 'beginner' | 'intermediate' | 'advanced'
  status: 'draft' | 'published' | 'archived'
  created_at: string
  updated_at: string
  instructor?: User
  category?: Category
  chapters?: Chapter[]
  enrollments?: Enrollment[]
  _count?: {
    chapters: number
    enrollments: number
  }
}

export interface Chapter {
  id: string
  title: string
  description?: string
  course_id: string
  position: number
  is_published: boolean
  is_free: boolean
  mux_data?: MuxData
  created_at: string
  updated_at: string
  course?: Course
  user_progress?: UserProgress[]
}

export interface MuxData {
  id: string
  chapter_id: string
  asset_id: string
  playback_id?: string
  created_at: string
  updated_at: string
}

export interface UserProgress {
  id: string
  user_id: string
  chapter_id: string
  is_completed: boolean
  created_at: string
  updated_at: string
}

export interface Purchase {
  id: string
  user_id: string
  course_id: string
  created_at: string
  updated_at: string
  course?: Course
}

export interface Enrollment {
  id: string
  user_id: string
  course_id: string
  created_at: string
  updated_at: string
  user?: User
  course?: Course
}

export interface StripeCustomer {
  id: string
  user_id: string
  stripe_customer_id: string
  created_at: string
  updated_at: string
} 