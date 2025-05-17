import React from "react";
import { cn } from "../../lib/utils";

export function Button({ 
  className, 
  variant = "default", 
  size = "default", 
  children, 
  fullWidth = false,
  responsiveSize = false,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 touch-action-manipulation";
  
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/95",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground active:bg-accent/90",
    ghost: "hover:bg-accent hover:text-accent-foreground active:bg-accent/90",
    link: "text-primary underline-offset-4 hover:underline",
  };
  
  const sizes = {
    default: responsiveSize ? "h-9 md:h-10 py-1.5 md:py-2 px-3 md:px-4 text-sm md:text-base" : "h-10 py-2 px-4",
    sm: responsiveSize ? "h-8 md:h-9 rounded-md px-2.5 md:px-3 text-xs" : "h-9 rounded-md px-3 text-xs",
    lg: responsiveSize ? "h-10 md:h-11 rounded-md px-6 md:px-8 text-base" : "h-11 rounded-md px-8",
    icon: responsiveSize ? "h-8 w-8 md:h-9 md:w-9" : "h-9 w-9",
    mobile: "h-10 py-2 px-3 text-sm", // Touch-friendly size specifically for mobile
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}