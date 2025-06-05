import { RegisterForm } from "@/components/auth/register-form"
import Link from "next/link"
import { BookOpen } from "lucide-react"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/" className="flex justify-center items-center space-x-2 mb-6">
          <BookOpen className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-gray-900">Bridge the Gap</span>
        </Link>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Join our learning community
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Start your journey to acquire new skills and knowledge
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <RegisterForm />
      </div>

      <div className="mt-8 text-center">
        <p className="text-xs text-gray-500">
          By creating an account, you agree to our{" "}
          <Link href="/terms" className="text-blue-600 hover:text-blue-800">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-blue-600 hover:text-blue-800">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  )
} 