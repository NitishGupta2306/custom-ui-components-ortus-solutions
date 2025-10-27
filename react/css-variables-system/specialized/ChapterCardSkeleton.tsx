/**
 * ChapterCardSkeleton Component
 *
 * A skeleton loading component for chapter cards.
 * Displays placeholder content while chapter data is loading.
 * Uses CSS variables for theming and supports dark mode.
 *
 * Note: This component requires a Skeleton component to be available.
 * It also uses Card components for structure.
 *
 * @module specialized/ChapterCardSkeleton
 *
 * @example
 * ```tsx
 * import ChapterCardSkeleton from '@/components/specialized/ChapterCardSkeleton';
 *
 * function ChapterList() {
 *   const { data, loading } = useChapters();
 *
 *   if (loading) {
 *     return (
 *       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
 *         <ChapterCardSkeleton />
 *         <ChapterCardSkeleton />
 *         <ChapterCardSkeleton />
 *       </div>
 *     );
 *   }
 *
 *   return <div>{/* Render actual chapter cards */}</div>;
 * }
 * ```
 */

import React from 'react';

interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className = '' }) => (
  <div className={`animate-pulse bg-muted rounded ${className}`} />
);

const ChapterCardSkeleton: React.FC = () => {
  return (
    <div className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex flex-col space-y-1.5 p-6">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
      <div className="p-6 pt-0 space-y-4">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-8 w-16" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-8 w-16" />
          </div>
        </div>

        {/* Action button */}
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
};

export default ChapterCardSkeleton;
