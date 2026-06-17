"use client";

import { cn } from "@/lib/utils";

/** Soft iPhone-style mockup frame, Tiimo-flavored. Children fill the screen. */
export function Phone({
  children,
  className,
  screenClassName,
}: {
  children: React.ReactNode;
  className?: string;
  screenClassName?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[9/19] w-[230px] rounded-[2.4rem] border-[7px] border-[#15121f] bg-[#15121f] shadow-card",
        className
      )}
    >
      <div className="absolute left-1/2 top-2 z-20 h-4 w-20 -translate-x-1/2 rounded-full bg-[#15121f]" />
      <div
        className={cn(
          "relative h-full w-full overflow-hidden rounded-[1.85rem]",
          screenClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
