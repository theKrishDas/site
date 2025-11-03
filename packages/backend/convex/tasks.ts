import { internalQuery, query } from "./_generated/server"

export const get = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) {
      throw new Error("Not authenticated")
    }
    const { subject: owner } = identity
    return await ctx.db
      .query("tasks")
      .withIndex("by_owner", (q) => q.eq("owner", owner))
      .collect()
  },
})

/**
 * --- Internals ---
 */

export const overrideRootTaskDump = internalQuery({
  handler: async (ctx) => await ctx.db.query("tasks").collect(),
})
