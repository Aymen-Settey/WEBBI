import * as React from "react";
import { cn } from "@/lib/utils";

export interface MessageBoxProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  rows?: number;
}

const MessageBox = React.forwardRef<HTMLTextAreaElement, MessageBoxProps>(
  ({ className, rows = 3, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        rows={rows}
        {...props}
      />
    );
  }
);
MessageBox.displayName = "MessageBox";

export { MessageBox };
