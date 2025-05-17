import React from "react";
import { cn } from "../../lib/utils";

export function Button({ 
  className, 
  variant = "default", 
  size = "default", 
  children, 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50";
  
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  };
  
  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 rounded-md px-3 text-xs",
    lg: "h-11 rounded-md px-8",
    icon: "h-9 w-9",
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}