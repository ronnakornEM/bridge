"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, Plus } from "lucide-react"

interface PaymentMethod {
  id: string
  type: string
  last4: string
  expiryMonth: number
  expiryYear: number
  isDefault: boolean
}

export function BillingSettings() {
  const [isAddingPayment, setIsAddingPayment] = useState(false)
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    // Sample data - replace with actual data from your backend
    {
      id: "1",
      type: "visa",
      last4: "4242",
      expiryMonth: 12,
      expiryYear: 2024,
      isDefault: true,
    },
  ])

  const handleAddPayment = () => {
    setIsAddingPayment(true)
    // Implement payment method addition logic
  }

  const handleSetDefault = (id: string) => {
    setPaymentMethods(
      paymentMethods.map((method) => ({
        ...method,
        isDefault: method.id === id,
      }))
    )
    // Implement set default payment method logic
  }

  const handleRemovePayment = (id: string) => {
    setPaymentMethods(paymentMethods.filter((method) => method.id !== id))
    // Implement remove payment method logic
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Payment Methods</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <CreditCard className="w-6 h-6 text-gray-600" />
                  <div>
                    <p className="font-medium">
                      {method.type.toUpperCase()} ending in {method.last4}
                    </p>
                    <p className="text-sm text-gray-500">
                      Expires {method.expiryMonth}/{method.expiryYear}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {!method.isDefault && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleSetDefault(method.id)}
                    >
                      Set as Default
                    </Button>
                  )}
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleRemovePayment(method.id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}

            <Button
              variant="outline"
              className="w-full"
              onClick={handleAddPayment}
              disabled={isAddingPayment}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Payment Method
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Add billing history table or list here */}
            <p className="text-gray-500">No billing history available.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 