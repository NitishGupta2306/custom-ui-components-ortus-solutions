/**
 * DownloadProgress Component
 *
 * A download progress panel component that displays active downloads.
 * Shows download status, progress bars, and allows removal of completed downloads.
 * Uses CSS variables for theming and supports dark mode.
 *
 * Note: This component requires a DownloadQueueContext to be set up in your application.
 * The context should provide tasks, removeTask, and clearCompleted functions.
 *
 * @module utilities/DownloadProgress
 *
 * @example
 * ```tsx
 * import { DownloadProgressPanel } from '@/components/utilities/DownloadProgress';
 *
 * function App() {
 *   return (
 *     <>
 *       <YourAppContent />
 *       <DownloadProgressPanel />
 *     </>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Example DownloadTask interface
 * interface DownloadTask {
 *   id: string;
 *   filename: string;
 *   status: 'pending' | 'downloading' | 'completed' | 'error';
 *   progress: number;
 *   error?: string;
 * }
 * ```
 */

import React from 'react';
import { X, Download, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { cn } from '@/shared/utils/cn';

export interface DownloadTask {
  id: string;
  filename: string;
  status: 'pending' | 'downloading' | 'completed' | 'error';
  progress: number;
  error?: string;
}

interface DownloadProgressItemProps {
  task: DownloadTask;
  onRemove: (id: string) => void;
}

const DownloadProgressItem: React.FC<DownloadProgressItemProps> = ({ task, onRemove }) => {
  const getStatusIcon = () => {
    switch (task.status) {
      case 'pending':
      case 'downloading':
        return <Loader2 className="h-4 w-4 animate-spin text-blue-500" />;
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Download className="h-4 w-4" />;
    }
  };

  const getStatusText = () => {
    switch (task.status) {
      case 'pending':
        return 'Queued';
      case 'downloading':
        return `Downloading... ${task.progress}%`;
      case 'completed':
        return 'Complete';
      case 'error':
        return task.error || 'Failed';
      default:
        return 'Unknown';
    }
  };

  return (
    <div
      className={cn(
        'flex items-center gap-3 p-3 border rounded-lg transition-all',
        task.status === 'completed' && 'bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800',
        task.status === 'error' && 'bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-800',
        task.status === 'downloading' && 'bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800'
      )}
    >
      {getStatusIcon()}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate">{task.filename}</p>
        <p className="text-xs text-muted-foreground">{getStatusText()}</p>
        {task.status === 'downloading' && task.progress > 0 && (
          <div className="h-1 mt-1 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${task.progress}%` }}
            />
          </div>
        )}
      </div>
      {(task.status === 'completed' || task.status === 'error') && (
        <button
          onClick={() => onRemove(task.id)}
          className="h-8 w-8 p-0 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

interface DownloadProgressPanelProps {
  tasks: DownloadTask[];
  removeTask: (id: string) => void;
  clearCompleted: () => void;
}

export const DownloadProgressPanel: React.FC<DownloadProgressPanelProps> = ({
  tasks,
  removeTask,
  clearCompleted,
}) => {
  // Don't render if no tasks
  if (tasks.length === 0) {
    return null;
  }

  const hasCompleted = tasks.some((task) => task.status === 'completed');

  return (
    <div className="fixed bottom-4 right-4 z-50 w-96 max-w-[calc(100vw-2rem)]">
      <div className="rounded-lg border-2 bg-card text-card-foreground shadow-lg">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold flex items-center gap-2">
              <Download className="h-4 w-4" />
              Downloads ({tasks.length})
            </h3>
            {hasCompleted && (
              <button
                onClick={clearCompleted}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Clear completed
              </button>
            )}
          </div>
          <div className="space-y-2 max-h-80 overflow-y-auto">
            {tasks.map((task) => (
              <DownloadProgressItem key={task.id} task={task} onRemove={removeTask} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
