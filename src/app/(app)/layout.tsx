import type { ReactNode } from "react";
import { RCNavbar } from "./_components/navbar";
import { SideNav } from "./_components/side-nav";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-hidden">
      <RCNavbar />
      <div className="flex h-svh w-svw flex-row">
        <div className="hidden md:block">
          <SideNav />
        </div>
        {children}
      </div>
    </div>
  );
}
