/**
 * Collapsible Component
 *
 * A collapsible component built on Radix UI Collapsible primitive.
 * Provides an interactive component which expands/collapses content.
 * Uses CSS variables for theming and supports dark mode.
 *
 * @module navigation/Collapsible
 *
 * @example
 * ```tsx
 * import {
 *   Collapsible,
 *   CollapsibleTrigger,
 *   CollapsibleContent,
 * } from '@/components/navigation/Collapsible';
 * import { Button } from '@/components/Button';
 *
 * function MyCollapsible() {
 *   return (
 *     <Collapsible>
 *       <CollapsibleTrigger asChild>
 *         <Button variant="ghost">Toggle Details</Button>
 *       </CollapsibleTrigger>
 *       <CollapsibleContent>
 *         <div className="p-4 border rounded-md">
 *           <p>This content can be collapsed and expanded.</p>
 *         </div>
 *       </CollapsibleContent>
 *     </Collapsible>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Controlled collapsible with state
 * import { useState } from 'react';
 * import { ChevronDown } from 'lucide-react';
 *
 * function ControlledCollapsible() {
 *   const [isOpen, setIsOpen] = useState(false);
 *
 *   return (
 *     <Collapsible open={isOpen} onOpenChange={setIsOpen}>
 *       <CollapsibleTrigger asChild>
 *         <Button variant="outline" className="w-full justify-between">
 *           Advanced Settings
 *           <ChevronDown
 *             className={`h-4 w-4 transition-transform ${
 *               isOpen ? 'rotate-180' : ''
 *             }`}
 *           />
 *         </Button>
 *       </CollapsibleTrigger>
 *       <CollapsibleContent className="pt-4">
 *         <div className="space-y-2">
 *           <p>Advanced setting 1</p>
 *           <p>Advanced setting 2</p>
 *         </div>
 *       </CollapsibleContent>
 *     </Collapsible>
 *   );
 * }
 * ```
 */

import * as React from "react"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
