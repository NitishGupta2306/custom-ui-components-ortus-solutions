/**
 * Tooltip Component
 *
 * A tooltip component built on Radix UI Tooltip primitive.
 * Displays informative text when users hover over or focus on an element.
 * Uses CSS variables for theming and supports dark mode.
 *
 * @module overlays/Tooltip
 *
 * @example
 * ```tsx
 * import {
 *   Tooltip,
 *   TooltipTrigger,
 *   TooltipContent,
 *   TooltipProvider,
 * } from '@/components/overlays/Tooltip';
 * import { Button } from '@/components/Button';
 *
 * function MyTooltip() {
 *   return (
 *     <TooltipProvider>
 *       <Tooltip>
 *         <TooltipTrigger asChild>
 *           <Button variant="outline">Hover me</Button>
 *         </TooltipTrigger>
 *         <TooltipContent>
 *           <p>This is a helpful tooltip</p>
 *         </TooltipContent>
 *       </Tooltip>
 *     </TooltipProvider>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Multiple tooltips with shared provider
 * function MultipleTooltips() {
 *   return (
 *     <TooltipProvider delayDuration={300}>
 *       <div className="flex gap-2">
 *         <Tooltip>
 *           <TooltipTrigger asChild>
 *             <Button>First</Button>
 *           </TooltipTrigger>
 *           <TooltipContent>First tooltip</TooltipContent>
 *         </Tooltip>
 *
 *         <Tooltip>
 *           <TooltipTrigger asChild>
 *             <Button>Second</Button>
 *           </TooltipTrigger>
 *           <TooltipContent side="bottom">Second tooltip</TooltipContent>
 *         </Tooltip>
 *       </div>
 *     </TooltipProvider>
 *   );
 * }
 * ```
 */

"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/shared/utils/cn"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
