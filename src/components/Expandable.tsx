"use client"

import { PropsWithChildren, useState } from "react";

type ExpandableProps = PropsWithChildren<{
  label?: string;
}>;

// Client Component
export default function Expandable({ children, label = "" }: ExpandableProps) { 
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div>
      <button
        className={`${isExpanded ? "bg-red-100" : "bg-blue-100"} rounded-md px-3 py-3 leading-none whitespace-nowrap text-sm font-semibold text-cyan-700`}
        onClick={() => setIsExpanded(prevValue => !prevValue)}
      >
        {isExpanded ? `Collapse ${label}` : `Expand ${label}`}
      </button>
      {isExpanded && children}
    </div>
  )
}