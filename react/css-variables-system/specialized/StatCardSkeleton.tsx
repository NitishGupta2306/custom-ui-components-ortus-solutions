/**
 * StatCardSkeleton Component
 *
 * A skeleton loading component for statistic cards.
 * Displays placeholder content while stat data is loading.
 * Uses CSS variables for theming and supports dark mode.
 *
 * @module specialized/StatCardSkeleton
 *
 * @example
 * ```tsx
 * import StatCardSkeleton from '@/components/specialized/StatCardSkeleton';
 *
 * function Dashboard() {
 *   const { stats, loading } = useStats();
 *
 *   if (loading) {
 *     return (
 *       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
 *         <StatCardSkeleton />
 *         <StatCardSkeleton />
 *         <StatCardSkeleton />
 *         <StatCardSkeleton />
 *       </div>
 *     );
 *   }
 *
 *   return <div>{/* Render actual stat cards */}</div>;
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

const StatCardSkeleton: React.FC = () => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-4 rounded-full" />
      </div>
      <div className="p-6 pt-0">
        <Skeleton className="h-8 w-20 mb-2" />
        <Skeleton className="h-3 w-32" />
      </div>
    </div>
  );
};

export default StatCardSkeleton;
