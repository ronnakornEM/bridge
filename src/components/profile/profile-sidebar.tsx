"use client"

import { User, Settings, CreditCard, History, Shield, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface ProfileSidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function ProfileSidebar({ activeTab, setActiveTab }: ProfileSidebarProps) {
  const router = useRouter()

  const handleLogout = async () => {
    // Add logout logic here
    router.push("/logout")
  }

  const menuItems = [
    { id: "overview", label: "Profile Overview", icon: User },
    { id: "settings", label: "Profile Settings", icon: Settings },
    { id: "billing", label: "Billing & Payment", icon: CreditCard },
    { id: "purchases", label: "Purchase History", icon: History },
    { id: "security", label: "Security", icon: Shield },
  ]

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab(item.id)}
            >
              <Icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          )
        })}
      </div>

      <div className="pt-4 border-t">
        <Button
          variant="ghost"
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  )
} 