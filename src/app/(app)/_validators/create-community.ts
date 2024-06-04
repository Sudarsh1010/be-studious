import { z } from "zod";

export const createCommunitySchema = z.object({
  name: z.string().min(3, "Community name must be minimum of 3 characters"),
  description: z.string().min(1, "Required"),
});

export type CreateCommunitySchemaType = z.infer<typeof createCommunitySchema>;
