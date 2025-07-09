// interfaces/index.ts

// 🎴 Card Props
export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

// 🔘 Button Props
import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}
