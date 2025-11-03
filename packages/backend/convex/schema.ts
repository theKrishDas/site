import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
  tasks: defineTable({
    owner: v.string(),
    text: v.string(),
    isCompleted: v.boolean(),
    order: v.number(),
    // dueDate: v.optional(v.string()),
    // priority: v.optional(v.string()),
    // tags: v.optional(v.array(v.string())),
  })
    .index("by_owner", ["owner"])
    .index("by_order", ["owner", "order"]),
})
