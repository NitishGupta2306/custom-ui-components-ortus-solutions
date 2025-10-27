import { useState, memo } from 'react'
import { Linkedin, Github, Twitter, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface SocialLinks {
  linkedin?: string
  github?: string
  twitter?: string
  email?: string
}

interface TeamMember {
  id: string
  name: string
  title: string
  tagline: string
  photo: string
  expertise: string[]
  bio: string[]
  yearsOfExperience: number
  socialLinks: SocialLinks
}

interface TeamMemberCardProps {
  member: TeamMember
}

/**
 * A team member card with expandable bio and social links.
 *
 * @component
 * @description
 * TeamMemberCard displays team member information in an interactive card with:
 * - Professional photo with gradient overlay
 * - Name, title, and tagline
 * - Top 4 expertise tags
 * - Social media links (LinkedIn, GitHub, Twitter, Email)
 * - Expandable bio section with smooth animation
 * - Years of experience badge
 * - Glassmorphism styling
 * - Hover effects
 * - Full accessibility support (ARIA attributes)
 * - Image error handling with placeholder
 *
 * Uses React.memo for performance optimization.
 *
 * @param {TeamMember} member - Team member object
 * @param {string} member.id - Unique identifier
 * @param {string} member.name - Full name
 * @param {string} member.title - Job title/role
 * @param {string} member.tagline - Short description
 * @param {string} member.photo - Photo URL
 * @param {string[]} member.expertise - Array of skills/expertise
 * @param {string[]} member.bio - Array of biography paragraphs
 * @param {number} member.yearsOfExperience - Years of professional experience
 * @param {SocialLinks} member.socialLinks - Social media profile URLs
 *
 * @example
 * // Basic usage
 * const member = {
 *   id: '1',
 *   name: 'Jane Doe',
 *   title: 'Senior Developer',
 *   tagline: 'Full-stack engineer passionate about clean code',
 *   photo: '/images/jane.jpg',
 *   expertise: ['React', 'TypeScript', 'Node.js', 'AWS'],
 *   bio: [
 *     'Jane has been building web applications for over 8 years.',
 *     'She specializes in modern frontend architectures.'
 *   ],
 *   yearsOfExperience: 8,
 *   socialLinks: {
 *     linkedin: 'https://linkedin.com/in/janedoe',
 *     github: 'https://github.com/janedoe',
 *     email: 'jane@example.com'
 *   }
 * }
 *
 * <TeamMemberCard member={member} />
 *
 * @example
 * // Team grid
 * <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 *   {teamMembers.map(member => (
 *     <TeamMemberCard key={member.id} member={member} />
 *   ))}
 * </div>
 *
 * @example
 * // With animation
 * <SlideUp delay={0.1}>
 *   <TeamMemberCard member={member} />
 * </SlideUp>
 */
export const TeamMemberCard = memo(function TeamMemberCard({ member }: TeamMemberCardProps) {
  const [showBio, setShowBio] = useState(false)

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget
    img.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=600&background=random`
  }

  return (
    <div className="p-6 rounded-lg border bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border-white/20 dark:border-slate-700/50 shadow-xl transition-[transform,box-shadow] duration-300 hover:shadow-2xl hover:-translate-y-1 h-full">
      <div className="flex flex-col h-full">
        {/* Photo */}
        <div className="mb-4">
          <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-accent/20 to-accent-light/20">
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              onError={handleImageError}
            />
          </div>
        </div>

        {/* Name & Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
          {member.name}
        </h3>
        <p className="text-accent dark:text-accent-light font-medium text-sm mb-2">
          {member.title}
        </p>

        {/* Tagline */}
        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
          {member.tagline}
        </p>

        {/* Expertise Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {member.expertise.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 text-xs bg-accent/10 dark:bg-accent/20 text-accent dark:text-accent-light rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex gap-3 mb-4">
          {member.socialLinks.linkedin && (
            <a
              href={member.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent-light transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
              aria-label={`${member.name}'s LinkedIn`}
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {member.socialLinks.github && (
            <a
              href={member.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent-light transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
              aria-label={`${member.name}'s GitHub`}
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {member.socialLinks.twitter && (
            <a
              href={member.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent-light transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
              aria-label={`${member.name}'s Twitter`}
            >
              <Twitter className="w-5 h-5" />
            </a>
          )}
          {member.socialLinks.email && (
            <a
              href={`mailto:${member.socialLinks.email}`}
              className="text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent-light transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
              aria-label={`Email ${member.name}`}
            >
              <Mail className="w-5 h-5" />
            </a>
          )}
        </div>

        {/* View Bio Button */}
        <button
          type="button"
          onClick={() => setShowBio(!showBio)}
          className="mt-auto text-sm text-accent dark:text-accent-light hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
          aria-expanded={showBio}
          aria-controls={`bio-${member.id}`}
        >
          {showBio ? 'Hide Bio' : 'Read Bio'}
        </button>

        {/* Expandable Bio */}
        <AnimatePresence>
          {showBio && (
            <motion.div
              id={`bio-${member.id}`}
              role="region"
              aria-label={`${member.name}'s biography`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 space-y-3">
                {member.bio.map((paragraph, index) => (
                  <p key={index} className="text-sm text-slate-600 dark:text-slate-300">
                    {paragraph}
                  </p>
                ))}
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <span className="font-medium text-accent dark:text-accent-light">
                    {member.yearsOfExperience}+ years
                  </span>
                  <span>of experience</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
})
