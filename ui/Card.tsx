import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  featured?: boolean;
}

export default function Card({
  children,
  className = "",
  featured = false,
}: CardProps) {
  const baseClasses =
    "bg-white rounded-2xl border p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1";
  const featuredClasses = featured
    ? "border-accent/30 ring-1 ring-accent/20 shadow-md"
    : "border-gray-100";
  const combinedClasses = `${baseClasses} ${featuredClasses} ${className}`;

  return <div className={combinedClasses}>{children}</div>;
}
