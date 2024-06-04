"use client";

import { cn } from "@nextui-org/theme";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const RenderList = ({
  data,
}: {
  data: Array<{ name: string; description: string; id: string }>;
}) => {
  const pathname = usePathname();

  return (
    <div className="mb-2 flex flex-col gap-y-1">
      {data.map((communtiy) => (
        <Link
          className={cn(
            "flex h-8 flex-row items-center rounded-medium px-3 hover:bg-foreground-200",
            pathname.startsWith(`/c/${communtiy.id}`) && "bg-foreground-200",
          )}
          key={communtiy.id}
          href={`/c/${communtiy.id}`}
        >
          {communtiy.name}
        </Link>
      ))}
    </div>
  );
};
