import { useRef } from 'react'
import { Check } from 'lucide-react'
import { useTilt } from '@/shared/hooks/use-tilt'

interface Service {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  features: string[]
}

interface ServiceCardProps {
  service: Service
}

/**
 * A service card component with 3D tilt effect and glassmorphism.
 *
 * @component
 * @description
 * ServiceCard displays service information in an interactive card with:
 * - 3D tilt effect on hover using useTilt hook
 * - Glassmorphism background with backdrop blur
 * - Dynamic glare effect following mouse position
 * - Icon display with accent background
 * - Feature list with checkmark bullets
 * - Hover lift animation
 * - Dark mode support
 *
 * Note: Requires Card component and useTilt hook.
 *
 * @param {Service} service - Service object containing title, description, icon, and features
 * @param {string} service.title - Service name
 * @param {string} service.description - Service description
 * @param {ComponentType} service.icon - Lucide icon component
 * @param {string[]} service.features - Array of feature descriptions
 *
 * @example
 * // Import required icons
 * import { Code, Database, Cloud } from 'lucide-react'
 *
 * const service = {
 *   title: 'Web Development',
 *   description: 'Custom web applications built with modern technologies',
 *   icon: Code,
 *   features: [
 *     'Responsive Design',
 *     'Performance Optimization',
 *     'SEO Best Practices',
 *     'Accessibility Standards'
 *   ]
 * }
 *
 * <ServiceCard service={service} />
 *
 * @example
 * // Services grid
 * <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 *   {services.map(service => (
 *     <ServiceCard key={service.title} service={service} />
 *   ))}
 * </div>
 *
 * @example
 * // With animation wrapper
 * <SlideUp delay={0.1}>
 *   <ServiceCard service={service} />
 * </SlideUp>
 */
export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon
  const cardRef = useRef<HTMLDivElement>(null)

  // Apply 3D tilt effect with more intensity
  useTilt(cardRef, { max: 20, scale: 1.08, speed: 300 })

  return (
    <div ref={cardRef} className="h-full">
      {/* Replace with Card component import */}
      <div className="p-6 rounded-lg border bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border-white/20 dark:border-slate-700/50 shadow-xl transition-[transform,box-shadow] duration-300 hover:shadow-2xl hover:-translate-y-1 h-full relative overflow-hidden">
        {/*
          Glare effect - more visible
          Note: Inline style required here because CSS custom properties (--glare-x, --glare-y)
          are dynamically set by the useTilt hook via JavaScript. These values update on mousemove
          and cannot be predefined in Tailwind or a stylesheet.
        */}
        <div
          className="absolute inset-0 opacity-0 hover:opacity-40 transition-opacity duration-300 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at var(--glare-x, 50%) var(--glare-y, 50%), rgba(6,182,212,0.4), rgba(255,255,255,0.2) 30%, transparent 60%)',
          }}
        />

        <div className="flex flex-col h-full relative z-10">
          {/* Icon */}
          <div className="w-14 h-14 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center mb-4">
            <Icon className="w-7 h-7 text-accent dark:text-accent-light" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 dark:text-slate-300 mb-4 flex-grow">
            {service.description}
          </p>

          {/* Features */}
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                <Check className="w-4 h-4 text-accent dark:text-accent-light mt-0.5 mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
