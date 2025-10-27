/**
 * Switch Component
 *
 * A switch (toggle) component built on Radix UI Switch primitive.
 * Provides an accessible toggle switch for boolean settings.
 * Uses CSS variables for theming and supports dark mode.
 *
 * @module forms/Switch
 *
 * @example
 * ```tsx
 * import { Switch } from '@/components/forms/Switch';
 * import { Label } from '@/components/forms/Label';
 *
 * function MySwitch() {
 *   return (
 *     <div className="flex items-center space-x-2">
 *       <Switch id="airplane-mode" />
 *       <Label htmlFor="airplane-mode">Airplane Mode</Label>
 *     </div>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Controlled switch with state
 * import { useState } from 'react';
 *
 * function ControlledSwitch() {
 *   const [enabled, setEnabled] = useState(false);
 *
 *   return (
 *     <div className="space-y-4">
 *       <div className="flex items-center space-x-2">
 *         <Switch
 *           id="notifications"
 *           checked={enabled}
 *           onCheckedChange={setEnabled}
 *         />
 *         <Label htmlFor="notifications">
 *           Enable notifications
 *         </Label>
 *       </div>
 *       <p className="text-sm text-muted-foreground">
 *         Notifications are {enabled ? 'enabled' : 'disabled'}
 *       </p>
 *     </div>
 *   );
 * }
 * ```
 */

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/shared/utils/cn"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
