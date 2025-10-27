import { useState, memo } from 'react'
import { ExternalLink, TrendingUp, Users } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ProjectResult {
  value: string
  metric: string
  description?: string
}

interface Project {
  id: string
  title: string
  client: string
  industry: string
  duration?: string
  challenge: string
  solution: string
  technologies: string[]
  results: ProjectResult[]
  images: string[]
  link?: string
  teamMemberIds: string[]
}

interface ProjectCardProps {
  project: Project
  teamMembers?: Array<{ id: string; name: string }>
}

/**
 * A project showcase card with expandable case study details.
 *
 * @component
 * @description
 * ProjectCard displays project information in an expandable card with:
 * - Project image with gradient placeholder
 * - Industry tag and duration
 * - Client name and project title
 * - Team member names
 * - Key result preview (first result highlighted)
 * - Technology tags (top 3 shown, rest indicated)
 * - Expandable case study with full details:
 *   - Challenge description
 *   - Solution overview
 *   - All technologies used
 *   - Complete results with metrics
 *   - External link to full case study
 * - Smooth expand/collapse animation
 * - Glassmorphism styling
 * - Image error handling
 * - Full accessibility support
 *
 * Uses React.memo for performance optimization.
 *
 * @param {Project} project - Project object with all case study information
 * @param {Array} [teamMembers] - Optional array of team member objects for display
 *
 * @example
 * // Basic usage
 * const project = {
 *   id: '1',
 *   title: 'E-commerce Platform Redesign',
 *   client: 'TechCorp Inc.',
 *   industry: 'Retail',
 *   duration: '6 months',
 *   challenge: 'Legacy system causing poor user experience...',
 *   solution: 'Complete platform rebuild with modern stack...',
 *   technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
 *   results: [
 *     { value: '150%', metric: 'Increase in conversions' },
 *     { value: '2.5s', metric: 'Faster page load times' }
 *   ],
 *   images: ['/images/project1.jpg'],
 *   link: 'https://example.com/case-study',
 *   teamMemberIds: ['1', '2']
 * }
 *
 * const team = [
 *   { id: '1', name: 'Jane Doe' },
 *   { id: '2', name: 'John Smith' }
 * ]
 *
 * <ProjectCard project={project} teamMembers={team} />
 *
 * @example
 * // Projects grid
 * <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 *   {projects.map(project => (
 *     <ProjectCard
 *       key={project.id}
 *       project={project}
 *       teamMembers={getTeamMembers(project.teamMemberIds)}
 *     />
 *   ))}
 * </div>
 *
 * @example
 * // With animation wrapper
 * <FadeIn delay={0.2}>
 *   <ProjectCard project={project} />
 * </FadeIn>
 */
export const ProjectCard = memo(function ProjectCard({ project, teamMembers = [] }: ProjectCardProps) {
  const [showDetails, setShowDetails] = useState(false)

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget
    img.src = `https://ui-avatars.com/api/?name=${encodeURIComponent('Project Image')}&size=800&background=random`
  }

  return (
    <div className="p-6 rounded-lg border bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border-white/20 dark:border-slate-700/50 shadow-xl transition-[transform,box-shadow] duration-300 hover:shadow-2xl hover:-translate-y-1 h-full">
      <div className="flex flex-col h-full">
        {/* Project Image */}
        <div className="mb-4">
          <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-accent/20 to-accent-light/20">
            {project.images.length > 0 ? (
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                onError={handleImageError}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-500">
                <span className="text-sm">No image available</span>
              </div>
            )}
          </div>
        </div>

        {/* Industry & Duration */}
        <div className="flex items-center gap-2 text-xs text-accent dark:text-accent-light mb-2">
          <span className="font-semibold">{project.industry}</span>
          {project.duration && (
            <>
              <span>•</span>
              <span>{project.duration}</span>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          {project.title}
        </h3>

        {/* Client */}
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
          {project.client}
        </p>

        {/* Team Members */}
        {teamMembers.length > 0 && (
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-4 h-4 text-slate-500" />
            <div className="flex gap-1 text-xs text-slate-600 dark:text-slate-400">
              {teamMembers.map((member, index) => (
                <span key={member.id}>
                  {member.name}
                  {index < teamMembers.length - 1 && ', '}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Key Result Preview */}
        {project.results.length > 0 && (
          <div className="mb-4 p-3 bg-accent/5 dark:bg-accent/10 rounded-lg">
            <p className="text-2xl font-bold text-accent dark:text-accent-light">
              {project.results[0].value}
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {project.results[0].metric}
            </p>
          </div>
        )}

        {/* Technologies Preview */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs text-slate-500 dark:text-slate-400">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* View Details Button */}
        <button
          type="button"
          onClick={() => setShowDetails(!showDetails)}
          className="mt-auto text-sm text-accent dark:text-accent-light hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
          aria-expanded={showDetails}
          aria-controls={`project-details-${project.id}`}
        >
          {showDetails ? 'Hide Details' : 'View Case Study'}
        </button>

        {/* Expandable Details */}
        <AnimatePresence>
          {showDetails && (
            <motion.div
              id={`project-details-${project.id}`}
              role="region"
              aria-label={`${project.title} case study details`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 space-y-4">
                {/* Challenge */}
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-sm">
                    Challenge
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {project.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-sm">
                    Solution
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {project.solution}
                  </p>
                </div>

                {/* All Technologies */}
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-sm">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* All Results */}
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center text-sm">
                    <TrendingUp className="w-4 h-4 mr-2 text-accent" />
                    Results
                  </h4>
                  <div className="space-y-2">
                    {project.results.map((result, index) => (
                      <div key={index} className="p-2 bg-slate-50 dark:bg-slate-800 rounded">
                        <p className="text-lg font-bold text-accent dark:text-accent-light">
                          {result.value}
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          {result.metric}
                        </p>
                        {result.description && (
                          <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                            {result.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* External Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-accent dark:text-accent-light hover:underline"
                  >
                    View Full Case Study
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
})
