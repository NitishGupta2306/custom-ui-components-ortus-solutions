/**
 * TableSkeleton Component
 *
 * A skeleton loading component for tables.
 * Displays placeholder rows and columns while table data is loading.
 * Uses CSS variables for theming and supports dark mode.
 *
 * @module specialized/TableSkeleton
 *
 * @example
 * ```tsx
 * import TableSkeleton from '@/components/specialized/TableSkeleton';
 *
 * function DataTable() {
 *   const { data, loading } = useTableData();
 *
 *   if (loading) {
 *     return <TableSkeleton rows={10} columns={5} />;
 *   }
 *
 *   return <table>{/* Render actual table data */}</table>;
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Custom sized table skeleton
 * function SmallTableSkeleton() {
 *   return <TableSkeleton rows={3} columns={3} />;
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

interface TableSkeletonProps {
  rows?: number;
  columns?: number;
}

const TableSkeleton: React.FC<TableSkeletonProps> = ({ rows = 5, columns = 4 }) => {
  return (
    <div className="w-full space-y-3">
      {/* Header */}
      <div className="flex gap-4 pb-3 border-b">
        {Array.from({ length: columns }).map((_, i) => (
          <Skeleton key={`header-${i}`} className="h-4 flex-1" />
        ))}
      </div>

      {/* Rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={`row-${rowIndex}`} className="flex gap-4 py-2">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <Skeleton key={`cell-${rowIndex}-${colIndex}`} className="h-6 flex-1" />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TableSkeleton;
