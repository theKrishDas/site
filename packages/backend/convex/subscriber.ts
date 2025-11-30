import { v } from "convex/values"
import { mutation, query } from "./_generated/server"

export const listSubscribers = query({
  handler: async (ctx) => await ctx.db.query("subscribers").collect(),
})

export const listActiveSubscribers = query({
  handler: async (ctx) =>
    await ctx.db
      .query("subscribers")
      .withIndex("by_status", (q) => q.eq("status", "subscribed"))
      .collect(),
})

export const getSubscriberByEmail = query({
  args: { email: v.string() },
  handler: async (ctx, { email }) => {
    // TODO: validate email
    const normalized = email.trim().toLowerCase()
    return await ctx.db
      .query("subscribers")
      .withIndex("by_email", (q) => q.eq("email", normalized))
      .unique()
  },
})

export const addSubscriber = mutation({
  args: { email: v.string(), source: v.optional(v.string()) },
  handler: async (ctx, { email, source }) => {
    const normalized = email.trim().toLowerCase()

    // TODO: validate email
    // Basic validation
    if (!normalized.includes("@")) {
      throw new Error("Invalid email.")
    }

    // Check existing
    const existing = await ctx.db
      .query("subscribers")
      .withIndex("by_email", (q) => q.eq("email", normalized))
      .unique()

    if (existing) {
      // If unsubscribed before → resubscribe
      if (existing.status === "unsubscribed") {
        return await ctx.db.patch(existing._id, {
          status: "subscribed",
          unsubscribedAt: undefined,
          consentAt: Date.now(),
          source,
        })
      }

      // Already subscribed → do nothing
      return existing
    }

    // Create new subscriber
    return await ctx.db.insert("subscribers", {
      email: normalized,
      status: "subscribed",
      consentAt: Date.now(),
      source,
    })
  },
})

export const unsubscribe = mutation({
  args: { email: v.string() },
  handler: async (ctx, { email }) => {
    // TODO: validate email
    const normalized = email.trim().toLowerCase()

    const existing = await ctx.db
      .query("subscribers")
      .withIndex("by_email", (q) => q.eq("email", normalized))
      .unique()

    if (!existing) return null

    return await ctx.db.patch(existing._id, {
      status: "unsubscribed",
      unsubscribedAt: Date.now(),
    })
  },
})
