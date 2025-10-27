/**
 * LoadingSkeleton Component
 *
 * A loading skeleton component with animated spinner and message.
 * Provides visual feedback during data loading or async operations.
 * Uses CSS variables for theming and supports dark mode.
 *
 * @module utilities/LoadingSkeleton
 *
 * @example
 * ```tsx
 * import { LoadingSkeleton } from '@/components/utilities/LoadingSkeleton';
 *
 * function MyComponent() {
 *   const [loading, setLoading] = useState(true);
 *
 *   if (loading) {
 *     return <LoadingSkeleton message="Loading data..." />;
 *   }
 *
 *   return <div>Your content here</div>;
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Loading skeleton as a card
 * function LoadingCard() {
 *   return (
 *     <LoadingSkeleton
 *       variant="card"
 *       message="Fetching information..."
 *     />
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Inline loading indicator
 * function InlineLoading() {
 *   return (
 *     <div>
 *       <h2>Results</h2>
 *       <LoadingSkeleton
 *         variant="inline"
 *         message="Loading results..."
 *       />
 *     </div>
 *   );
 * }
 * ```
 */

import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/shared/utils/cn';

interface LoadingSkeletonProps {
  message?: string;
  className?: string;
  variant?: 'default' | 'card' | 'inline';
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  message = 'Loading...',
  className,
  variant = 'default',
}) => {
  const content = (
    <div className="flex flex-col items-center justify-center gap-3">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <p className="text-sm font-medium text-muted-foreground">{message}</p>
    </div>
  );

  if (variant === 'card') {
    return (
      <div className={cn('rounded-lg border border-dashed bg-card text-card-foreground shadow-sm', className)}>
        <div className="p-12">{content}</div>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className={cn('flex items-center gap-2', className)}>
        <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
        <span className="text-sm text-muted-foreground">{message}</span>
      </div>
    );
  }

  return (
    <div className={cn('flex items-center justify-center min-h-[400px]', className)}>
      {content}
    </div>
  );
};
