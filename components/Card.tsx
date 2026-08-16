import React from "react";

type CardProps = {
  icon: React.ReactNode;
  title: string;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
};

export default function Card({ icon, title, subtitle, children }: CardProps) {
  return (
    <div className="h-full relative border border-gray-300/20 rounded-xl p-4 group overflow-hidden">
      <div className="flex items-center justify-between w-full mb-4">
        <div className="flex items-center gap-2 flex-1">
          <span>{icon}</span>
          <p className="font-semibold">{title}</p>
        </div>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div>{children}</div>
    </div>
  );
}
