import "server-only";

import { headers } from "next/headers";
import { cache } from "react";

import { NextRequest } from "next/server";
import { createCaller } from "~/server/api/root";
import { createTRPCContext } from "~/server/api/trpc";

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a tRPC call from a React Server Component.
 */
const createContext = cache(() => {
  const fullUrl = headers().get("referer") || "";
  const req = new NextRequest(fullUrl);
  req.headers.set("x-trpc-source", "rsc");
  return createTRPCContext(req);
});

export const api = createCaller(createContext);
