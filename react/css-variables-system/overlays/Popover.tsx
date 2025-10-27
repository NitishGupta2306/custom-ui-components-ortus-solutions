/**
 * Popover Component
 *
 * A popover component built on Radix UI Popover primitive.
 * Displays rich content in a portal, triggered by a user action.
 * Uses CSS variables for theming and supports dark mode.
 *
 * @module overlays/Popover
 *
 * @example
 * ```tsx
 * import { Popover, PopoverTrigger, PopoverContent } from '@/components/overlays/Popover';
 * import { Button } from '@/components/Button';
 *
 * function MyPopover() {
 *   return (
 *     <Popover>
 *       <PopoverTrigger asChild>
 *         <Button variant="outline">Open Popover</Button>
 *       </PopoverTrigger>
 *       <PopoverContent>
 *         <div className="space-y-2">
 *           <h4 className="font-medium leading-none">Dimensions</h4>
 *           <p className="text-sm text-muted-foreground">
 *             Set the dimensions for the layer.
 *           </p>
 *         </div>
 *       </PopoverContent>
 *     </Popover>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Popover with custom positioning
 * function PositionedPopover() {
 *   return (
 *     <Popover>
 *       <PopoverTrigger asChild>
 *         <Button>Settings</Button>
 *       </PopoverTrigger>
 *       <PopoverContent align="start" sideOffset={8}>
 *         <div className="space-y-2">
 *           <label>Setting 1</label>
 *           <input type="text" />
 *         </div>
 *       </PopoverContent>
 *     </Popover>
 *   );
 * }
 * ```
 */

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/shared/utils/cn"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }
