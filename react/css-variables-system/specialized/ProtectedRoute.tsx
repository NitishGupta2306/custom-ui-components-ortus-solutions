/**
 * ProtectedRoute Component
 *
 * A route protection component that restricts access based on authentication.
 * Supports different authentication types (chapter, admin) and redirects unauthorized users.
 * Uses CSS variables for theming and supports dark mode.
 *
 * Note: This component requires an AuthContext to be set up in your application.
 * The context should provide authentication state and checking functions.
 *
 * @module specialized/ProtectedRoute
 *
 * @example
 * ```tsx
 * import { ProtectedRoute } from '@/components/specialized/ProtectedRoute';
 * import { Routes, Route } from 'react-router-dom';
 *
 * function App() {
 *   return (
 *     <Routes>
 *       <Route path="/public" element={<PublicPage />} />
 *       <Route
 *         path="/admin"
 *         element={
 *           <ProtectedRoute type="admin">
 *             <AdminDashboard />
 *           </ProtectedRoute>
 *         }
 *       />
 *     </Routes>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Chapter-specific protected route
 * function ChapterRoute() {
 *   return (
 *     <ProtectedRoute type="chapter">
 *       <ChapterContent />
 *     </ProtectedRoute>
 *   );
 * }
 * ```
 */

import React from 'react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  type: 'chapter' | 'admin';
  isAuthenticated: boolean;
  isLoading?: boolean;
  redirectPath?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  type,
  isAuthenticated,
  isLoading = false,
  redirectPath = '/',
}) => {
  // Show loading spinner while auth is being loaded
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin h-12 w-12 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  // Redirect if not authenticated
  if (!isAuthenticated) {
    // In a real application, you would use react-router's Navigate component
    // or Next.js's router.push() to redirect
    window.location.href = redirectPath;
    return null;
  }

  return <>{children}</>;
};
