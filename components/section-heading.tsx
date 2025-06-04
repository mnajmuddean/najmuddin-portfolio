import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-bold capitalize mb-8 text-center relative inline-block">
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-0 left-0 w-full h-3 bg-indigo-100 dark:bg-indigo-900/30 -z-10 transform -rotate-1"></span>
    </h2>
  );
}
