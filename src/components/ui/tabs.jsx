import React from "react";
import { cn } from "../../lib/utils";

export function Tabs({ defaultValue, onValueChange, children, className }) {
  const [value, setValue] = React.useState(defaultValue);
  
  const handleValueChange = (newValue) => {
    setValue(newValue);
    if (onValueChange) onValueChange(newValue);
  };
  
  return (
    <div className={cn("w-full", className)}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            value,
            onValueChange: handleValueChange
          });
        }
        return child;
      })}
    </div>
  );
}

export function TabsList({ children, className, value, onValueChange, scrollable = false }) {
  return (
    <div className={cn(
      scrollable 
        ? "flex overflow-x-auto pb-1 hide-scrollbar" // Scrollable on mobile
        : "flex flex-wrap sm:inline-flex", // Wrapping on mobile
      "h-auto min-h-[40px] items-center justify-start sm:justify-center rounded-md bg-muted p-1",
      className
    )}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            value,
            onValueChange
          });
        }
        return child;
      })}
    </div>
  );
}

export function TabsTrigger({ children, value: tabValue, className, value, onValueChange }) {
  const isActive = value === tabValue;
  
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm",
        "px-2.5 sm:px-3 py-1.5 sm:py-1.5", // Adjusted padding for mobile
        "text-xs sm:text-sm font-medium", // Smaller text on mobile
        "min-h-[36px] min-w-[36px]", // Minimum touch target size
        "ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        isActive ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground",
        "flex-shrink-0 my-0.5 mx-0.5", // Prevent shrinking and add spacing
        className
      )}
      onClick={() => onValueChange(tabValue)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children, value: tabValue, className, value }) {
  const isActive = value === tabValue;
  
  if (!isActive) return null;
  
  return (
    <div className={cn(
      "mt-2 sm:mt-4 pt-1 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}>
      {children}
    </div>
  );
}
