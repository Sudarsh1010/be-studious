"use server";

import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { db } from "~/server/db";
import { communityTable, memberTable, userTable } from "~/server/db/schema";
import { RenderList } from "./render-list";

export const CommunitiesList = async () => {
  const user = auth();
  const data = await db
    .select({
      id: communityTable.id,
      name: communityTable.name,
      description: communityTable.description,
    })
    .from(communityTable)
    .innerJoin(memberTable, eq(communityTable.id, memberTable.community_id))
    .innerJoin(userTable, eq(memberTable.user_id, userTable.id))
    .where(eq(userTable.clerk_user_id, user.userId!));

  return <RenderList data={data} />;
};
