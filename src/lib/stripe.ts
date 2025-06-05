import Stripe from "stripe"
import { loadStripe, Stripe as StripeType } from "@stripe/stripe-js"

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
})

let stripePromise: Promise<StripeType | null>

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
  }
  return stripePromise
} 