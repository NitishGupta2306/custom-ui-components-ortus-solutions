import { cn } from '@/shared/utils/cn'

interface SkillLevelProps {
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  className?: string
}

const levelConfig = {
  beginner: { dots: 1, color: 'bg-slate-400', label: 'Beginner' },
  intermediate: { dots: 2, color: 'bg-blue-500', label: 'Intermediate' },
  advanced: { dots: 3, color: 'bg-purple-500', label: 'Advanced' },
  expert: { dots: 4, color: 'bg-accent', label: 'Expert' }
}

/**
 * A visual skill level indicator using animated colored dots.
 *
 * @component
 * @description
 * SkillLevel displays proficiency levels through a 4-dot visualization:
 * - beginner: 1 gray dot (slate-400)
 * - intermediate: 2 blue dots (blue-500)
 * - advanced: 3 purple dots (purple-500)
 * - expert: 4 accent-colored dots
 *
 * Features:
 * - Smooth transitions between states
 * - Scale and opacity effects for inactive dots
 * - Accessible title attribute with level name
 * - Dark mode support
 * - Compact, minimal design
 *
 * Perfect for displaying skill proficiency in profiles, resumes, or dashboards.
 *
 * @param {('beginner'|'intermediate'|'advanced'|'expert')} level - Skill proficiency level
 * @param {string} [className=''] - Additional CSS classes for the wrapper
 *
 * @example
 * // Show expert level
 * <SkillLevel level="expert" />
 *
 * @example
 * // Skill list with labels
 * <div className="space-y-2">
 *   <div className="flex items-center justify-between">
 *     <span>React</span>
 *     <SkillLevel level="expert" />
 *   </div>
 *   <div className="flex items-center justify-between">
 *     <span>TypeScript</span>
 *     <SkillLevel level="advanced" />
 *   </div>
 *   <div className="flex items-center justify-between">
 *     <span>GraphQL</span>
 *     <SkillLevel level="intermediate" />
 *   </div>
 * </div>
 *
 * @example
 * // Skills grid
 * <div className="grid grid-cols-2 gap-4">
 *   {skills.map(skill => (
 *     <Card key={skill.name}>
 *       <div className="flex items-center justify-between">
 *         <h4>{skill.name}</h4>
 *         <SkillLevel level={skill.level} />
 *       </div>
 *     </Card>
 *   ))}
 * </div>
 */
export function SkillLevel({ level, className = '' }: SkillLevelProps) {
  const config = levelConfig[level]

  return (
    <div className={cn('flex items-center gap-1', className)} title={config.label}>
      {[1, 2, 3, 4].map((dot) => (
        <div
          key={dot}
          className={cn(
            'w-1.5 h-1.5 rounded-full transition-all duration-300',
            dot <= config.dots
              ? cn(config.color, 'scale-100 opacity-100')
              : 'bg-slate-300 dark:bg-slate-600 scale-75 opacity-50'
          )}
        />
      ))}
    </div>
  )
}
