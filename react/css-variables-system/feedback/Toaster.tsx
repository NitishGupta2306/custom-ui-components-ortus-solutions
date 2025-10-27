/**
 * Toaster Component
 *
 * A container component that renders all active toast notifications.
 * Works with the useToast hook to display toast messages.
 * Uses CSS variables for theming and supports dark mode.
 *
 * @module feedback/Toaster
 *
 * @example
 * ```tsx
 * // Add to your app's root layout
 * import { Toaster } from '@/components/feedback/Toaster';
 *
 * function App() {
 *   return (
 *     <>
 *       <YourAppContent />
 *       <Toaster />
 *     </>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Use with the useToast hook
 * import { useToast } from '@/components/feedback/use-toast';
 * import { Toaster } from '@/components/feedback/Toaster';
 * import { Button } from '@/components/Button';
 *
 * function MyComponent() {
 *   const { toast } = useToast();
 *
 *   return (
 *     <>
 *       <Button
 *         onClick={() => {
 *           toast({
 *             title: "Success!",
 *             description: "Your changes have been saved.",
 *           });
 *         }}
 *       >
 *         Save Changes
 *       </Button>
 *       <Toaster />
 *     </>
 *   );
 * }
 * ```
 */

import { useToast } from "./use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./Toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider duration={5000}>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} duration={5000}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
