"use client"

import { useState } from "react"
import { ProfileSidebar } from "./profile-sidebar"
import { ProfileOverview } from "./profile-overview"
import { ProfileSettings } from "./profile-settings"
import { BillingSettings } from "./billing-settings"
import { PurchaseHistory } from "./purchase-history"
import { SecuritySettings } from "./security-settings"

interface Profile {
  id: string
  email: string
  name: string
  role: string
  avatar_url?: string
}

type Tab = "overview" | "settings" | "billing" | "purchases" | "security"

export function ProfileLayout({ profile }: { profile: Profile }) {
  const [activeTab, setActiveTab] = useState<Tab>("overview")

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <ProfileOverview profile={profile} />
      case "settings":
        return <ProfileSettings profile={profile} />
      case "billing":
        return <BillingSettings />
      case "purchases":
        return <PurchaseHistory />
      case "security":
        return <SecuritySettings />
      default:
        return <ProfileOverview profile={profile} />
    }
  }

  return (
    <div className="flex gap-8">
      <div className="w-64 flex-shrink-0">
        <ProfileSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="flex-1">
        {renderContent()}
      </div>
    </div>
  )
} 