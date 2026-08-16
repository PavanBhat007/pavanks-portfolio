import React from "react"

type CardProps = {
  icon: React.ReactNode,
  title: string,
  children: React.ReactNode
}

export default function Card({ icon, title, children }: CardProps) {
  return (
    <div className="relative border border-gray-300/20 rounded-xl p-4 group">
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