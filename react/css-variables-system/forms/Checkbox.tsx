/**
 * Checkbox Component
 *
 * A checkbox component built on Radix UI Checkbox primitive.
 * Provides an accessible checkbox input with custom styling.
 * Uses CSS variables for theming and supports dark mode.
 *
 * @module forms/Checkbox
 *
 * @example
 * ```tsx
 * import { Checkbox } from '@/components/forms/Checkbox';
 * import { Label } from '@/components/forms/Label';
 *
 * function MyCheckbox() {
 *   return (
 *     <div className="flex items-center space-x-2">
 *       <Checkbox id="terms" />
 *       <Label htmlFor="terms">Accept terms and conditions</Label>
 *     </div>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Controlled checkbox
 * import { useState } from 'react';
 *
 * function ControlledCheckbox() {
 *   const [checked, setChecked] = useState(false);
 *
 *   return (
 *     <div className="space-y-2">
 *       <div className="flex items-center space-x-2">
 *         <Checkbox
 *           id="subscribe"
 *           checked={checked}
 *           onCheckedChange={setChecked}
 *         />
 *         <Label htmlFor="subscribe">Subscribe to newsletter</Label>
 *       </div>
 *       <p className="text-sm text-muted-foreground">
 *         Status: {checked ? 'Subscribed' : 'Not subscribed'}
 *       </p>
 *     </div>
 *   );
 * }
 * ```
 */

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/shared/utils/cn";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
