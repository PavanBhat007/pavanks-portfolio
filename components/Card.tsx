import React from "react"

type CardProps = {
  icon: React.ReactNode,
  title: string,
  children: React.ReactNode,
  colSpan?: 1 | 2 | 3 | 4,
}

const colSpanClasses = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4"
}

export default function Card({ icon, title, children, colSpan }: CardProps) {
  const colSpanClass = colSpan ? colSpanClasses[colSpan] : "";
  
  return (
    <div className={`relative border border-gray-300/20 rounded-xl p-4 group overflow-hidden ${colSpanClass}`}>
      <div className="flex items-center gap-2 mb-4 bg-gray-600/10 rounded px-2 py-1 group-hover:bg-gray-400/10 transition-colors duration-300">
        <span className="text-neon">{icon}</span>
        <p className="font-semibold">{title}</p>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}