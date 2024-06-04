import { eq } from "drizzle-orm";
import { createCommunitySchema } from "~/app/(app)/_validators/create-community";
import { communityTable } from "~/server/db/schema/community";
import { memberTable } from "~/server/db/schema/member";
import { userTable } from "~/server/db/schema/user";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const communitiesRouter = createTRPCRouter({
  all: protectedProcedure.query(async ({ ctx: { db, auth } }) => {
    return await db
      .select({
        id: communityTable.id,
        name: communityTable.name,
        description: communityTable.description,
      })
      .from(communityTable)
      .innerJoin(memberTable, eq(communityTable.id, memberTable.community_id))
      .innerJoin(userTable, eq(memberTable.user_id, userTable.id))
      .where(eq(userTable.clerk_user_id, auth.userId!));
  }),

  create: protectedProcedure
    .input(createCommunitySchema)
    .mutation(async ({ ctx: { db, auth }, input: { name, description } }) => {
      const [community, user] = await Promise.all([
        await db
          .insert(communityTable)
          .values({
            name,
            description,
          })
          .returning({ id: communityTable.id })
          .execute(),
        await db
          .select({ id: userTable.id })
          .from(userTable)
          .where(eq(userTable.clerk_user_id, auth.userId!))
          .limit(1),
      ]);

      await db.insert(memberTable).values({
        role: "admin",
        community_id: community[0]!.id,
        user_id: user[0]!.id,
      });

      return community[0];
    }),
});
