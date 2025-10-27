/**
 * Common TypeScript type definitions used across components
 */

/** Standard size variants used across multiple components */
export type Size = 'sm' | 'md' | 'lg' | 'xl'

/** Common button/component variants */
export type Variant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'destructive'
  | 'link'

/** Theme type */
export type Theme = 'light' | 'dark'

/** Component status states */
export type Status = 'idle' | 'loading' | 'success' | 'error'

/** Skill level types (used in skill indicators) */
export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert'

/** Background color variants */
export type BackgroundVariant = 'white' | 'subtle' | 'dark' | 'transparent'

/** Common props that most components accept */
export interface BaseComponentProps {
  /** Additional CSS classes */
  className?: string
  /** Component children */
  children?: React.ReactNode
}

/** Props for components with size variants */
export interface SizeableProps {
  /** Size variant */
  size?: Size
}

/** Props for components with visual variants */
export interface VariantProps {
  /** Visual variant */
  variant?: Variant
}

/** Props for clickable components */
export interface ClickableProps {
  /** Click handler */
  onClick?: (event: React.MouseEvent) => void
  /** Disabled state */
  disabled?: boolean
}

/** Props for form components */
export interface FormComponentProps {
  /** Form input name */
  name?: string
  /** Input value */
  value?: string
  /** Change handler */
  onChange?: (value: string) => void
  /** Error state */
  error?: string
  /** Required field */
  required?: boolean
}
