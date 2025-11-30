import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
  subscribers: defineTable({
    // core
    email: v.string(),
    status: v.union(v.literal("subscribed"), v.literal("unsubscribed")),

    // when they gave consent i.e. when they subscribe
    consentAt: v.number(),

    // filled only if they ever unsubscribe / ask removal
    unsubscribedAt: v.optional(v.number()),

    source: v.optional(v.string()), // e.g. "landing_page", "blog_footer"
  })
    .index("by_email", ["email"])
    .index("by_status", ["status"]),
})
