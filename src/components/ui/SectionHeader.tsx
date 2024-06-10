import { cn } from "@/lib/utils";
import { Baby } from "lucide-react";
import React from "react";

const SectionHeader = ({
  heading,
  className,
}: {
  heading: string;
  className?: string;
}) => {
  return (
    <div className="text-center">
      <h1 className="text-primary-foreground text-4xl font-bold">{heading}</h1>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-1 my-2 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div
          className={cn(
            "absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900",
            className
          )}
        >
          <Baby className="text-muted" />
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
