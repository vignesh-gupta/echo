import { query } from "./_generated/server";

export const getMany = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not authenticated");
    }

    const orgId = identity.orgId as string;

    if(!orgId) {
      throw new Error("Missing Organization");
    }

    return await ctx.db.query("users").collect();
  },
});
