/**
 * EmptyState Component
 *
 * A flexible empty state component for displaying when there's no content to show.
 * Supports icons, titles, descriptions, and optional action buttons.
 * Uses CSS variables for theming and supports dark mode.
 *
 * @module utilities/EmptyState
 *
 * @example
 * ```tsx
 * import { EmptyState } from '@/components/utilities/EmptyState';
 * import { FileText } from 'lucide-react';
 *
 * function NoDocuments() {
 *   return (
 *     <EmptyState
 *       icon={FileText}
 *       title="No documents found"
 *       description="You haven't created any documents yet. Get started by creating your first document."
 *     />
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Empty state with action button
 * import { Plus, Inbox } from 'lucide-react';
 *
 * function EmptyInbox() {
 *   return (
 *     <EmptyState
 *       icon={Inbox}
 *       title="Your inbox is empty"
 *       description="All caught up! You have no new messages."
 *       action={{
 *         label: "Compose message",
 *         onClick: () => console.log('Composing...'),
 *         icon: Plus,
 *       }}
 *     />
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Empty state as a card
 * function EmptyStateCard() {
 *   return (
 *     <EmptyState
 *       variant="card"
 *       icon={FileText}
 *       title="No results"
 *       description="Try adjusting your search filters."
 *     />
 *   );
 * }
 * ```
 */

import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/shared/utils/cn';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
    icon?: LucideIcon;
  };
  className?: string;
  variant?: 'default' | 'card';
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon: Icon,
  title,
  description,
  action,
  className,
  variant = 'default',
}) => {
  const content = (
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="p-4 rounded-full bg-muted/50">
        <Icon className="h-12 w-12 text-muted-foreground" />
      </div>
      <div className="space-y-2 max-w-md">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
      {action && (
        <button
          onClick={action.onClick}
          className="mt-4 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
        >
          {action.icon && <action.icon className="mr-2 h-4 w-4" />}
          {action.label}
        </button>
      )}
    </div>
  );

  if (variant === 'card') {
    return (
      <div className={cn('rounded-lg border border-dashed bg-card text-card-foreground shadow-sm', className)}>
        <div className="p-12">{content}</div>
      </div>
    );
  }

  return (
    <div className={cn('flex items-center justify-center min-h-[400px] py-12', className)}>
      {content}
    </div>
  );
};
