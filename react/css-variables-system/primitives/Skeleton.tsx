import * as React from 'react'
import { cn } from '@/shared/utils/cn'

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Skeleton component for loading states
 * Displays a pulsing placeholder while content loads
 *
 * @example
 * ```tsx
 * import { Skeleton } from '@/css-variables-system/primitives/Skeleton'
 *
 * // Basic usage
 * <Skeleton className="h-4 w-full" />
 *
 * // Card skeleton
 * <div className="space-y-2">
 *   <Skeleton className="h-12 w-12 rounded-full" />
 *   <Skeleton className="h-4 w-full" />
 *   <Skeleton className="h-4 w-3/4" />
 * </div>
 * ```
 */
function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-muted', className)}
      {...props}
    />
  )
}

export { Skeleton }
