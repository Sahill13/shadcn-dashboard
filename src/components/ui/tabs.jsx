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

export function TabsList({ children, className, value, onValueChange }) {
  return (
    <div className={cn("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1", className)}>
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
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        isActive ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground",
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
    <div className={cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)}>
      {children}
    </div>
  );
}