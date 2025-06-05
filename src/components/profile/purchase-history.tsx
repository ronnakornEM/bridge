"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface Purchase {
  id: string
  date: string
  amount: number
  description: string
  status: "completed" | "pending" | "failed"
  receiptUrl?: string
}

export function PurchaseHistory() {
  const purchases: Purchase[] = [
    // Sample data - replace with actual data from your backend
    {
      id: "1",
      date: "2024-03-15",
      amount: 49.99,
      description: "Premium Course Bundle",
      status: "completed",
      receiptUrl: "/receipts/1.pdf",
    },
    {
      id: "2",
      date: "2024-03-10",
      amount: 29.99,
      description: "Individual Course",
      status: "completed",
      receiptUrl: "/receipts/2.pdf",
    },
  ]

  const handleDownloadReceipt = (receiptUrl: string) => {
    // Implement receipt download logic
    window.open(receiptUrl, "_blank")
  }

  const getStatusColor = (status: Purchase["status"]) => {
    switch (status) {
      case "completed":
        return "text-green-600"
      case "pending":
        return "text-yellow-600"
      case "failed":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Purchase History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {purchases.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Date</th>
                      <th className="text-left py-3 px-4">Description</th>
                      <th className="text-left py-3 px-4">Amount</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-right py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {purchases.map((purchase) => (
                      <tr key={purchase.id} className="border-b">
                        <td className="py-3 px-4">{purchase.date}</td>
                        <td className="py-3 px-4">{purchase.description}</td>
                        <td className="py-3 px-4">
                          ${purchase.amount.toFixed(2)}
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`capitalize ${getStatusColor(
                              purchase.status
                            )}`}
                          >
                            {purchase.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          {purchase.receiptUrl && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                handleDownloadReceipt(purchase.receiptUrl!)
                              }
                            >
                              <Download className="w-4 h-4 mr-2" />
                              Receipt
                            </Button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500">No purchase history available.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 