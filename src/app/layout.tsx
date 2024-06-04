import "~/styles/globals.css";

import { Reddit_Mono } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import { TRPCReactProvider } from "~/trpc/react";

import { NextUIProvider } from "@nextui-org/system";

const redditMono = Reddit_Mono({
  subsets: ["latin"],
});

export const metadata = {
  title: "Be Studious",
  description:
    "A community led notes taking app for student. Chat with your notes",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${redditMono.className}`}>
        <body>
          <NextUIProvider>
            <TRPCReactProvider>{children}</TRPCReactProvider>
          </NextUIProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
