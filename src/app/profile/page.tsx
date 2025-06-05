import { fetchProfile } from '@/app/api/fetchprofile'
import { redirect } from 'next/navigation'
import { ProfileLayout } from '@/components/profile/profile-layout'

export default async function ProfilePage() {
  const profile = await fetchProfile()

  if (!profile) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProfileLayout profile={profile} />
      </div>
    </div>
  )
}
