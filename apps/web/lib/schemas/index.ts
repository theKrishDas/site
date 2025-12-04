import z from "zod"

export const newsletterSubscriptionSchema = z.object({ email: z.email() })
export type NewsletterSubscription = z.infer<
  typeof newsletterSubscriptionSchema
>
