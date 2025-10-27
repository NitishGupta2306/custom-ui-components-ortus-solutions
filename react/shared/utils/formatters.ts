/**
 * Format a number with K/M abbreviations for large numbers
 *
 * @param num - Number to format
 * @returns Formatted string with abbreviation
 *
 * @example
 * ```ts
 * formatNumber(500)       // => '500'
 * formatNumber(1500)      // => '1.5K'
 * formatNumber(1500000)   // => '1.5M'
 * ```
 */
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

/**
 * Format a number as currency with internationalization support
 *
 * @param amount - Amount to format
 * @param currency - Currency code (default: 'AED')
 * @param locale - Locale for formatting (default: 'en-AE')
 * @returns Formatted currency string
 *
 * @example
 * ```ts
 * formatCurrency(1234.56)                    // => 'AED 1,235'
 * formatCurrency(1234.56, 'USD', 'en-US')    // => '$1,235'
 * formatCurrency(1234.56, 'EUR', 'de-DE')    // => '1.235 €'
 * ```
 */
export function formatCurrency(
  amount: number,
  currency: string = 'AED',
  locale: string = 'en-AE'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * Format a number as a percentage with configurable decimal places
 *
 * @param value - Value to format (e.g., 75.5 for 75.5%)
 * @param decimals - Number of decimal places (default: 1)
 * @returns Formatted percentage string
 *
 * @example
 * ```ts
 * formatPercentage(75.5)      // => '75.5%'
 * formatPercentage(75.567, 2) // => '75.57%'
 * formatPercentage(75, 0)     // => '75%'
 * ```
 */
export function formatPercentage(value: number, decimals: number = 1): string {
  return `${value.toFixed(decimals)}%`
}

/**
 * Format month_year string (YYYY-MM) to long format (e.g., "January 2025")
 *
 * @param monthYear - Month year string in format YYYY-MM (e.g., "2025-01")
 * @returns Formatted string (e.g., "January 2025")
 *
 * @example
 * ```ts
 * formatMonthYearLong('2025-01')  // => 'January 2025'
 * formatMonthYearLong('2025-12')  // => 'December 2025'
 * ```
 */
export function formatMonthYearLong(monthYear: string): string {
  try {
    const [year, month] = monthYear.split('-')
    const date = new Date(parseInt(year), parseInt(month) - 1)
    return date.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    })
  } catch {
    return monthYear
  }
}

/**
 * Format month_year string (YYYY-MM) to short format (e.g., "Jan 2025")
 *
 * @param monthYear - Month year string in format YYYY-MM (e.g., "2025-01")
 * @returns Formatted string (e.g., "Jan 2025")
 *
 * @example
 * ```ts
 * formatMonthYearShort('2025-01')  // => 'Jan 2025'
 * formatMonthYearShort('2025-12')  // => 'Dec 2025'
 * ```
 */
export function formatMonthYearShort(monthYear: string): string {
  try {
    const [year, month] = monthYear.split('-')
    const date = new Date(parseInt(year), parseInt(month) - 1)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    })
  } catch {
    return monthYear
  }
}
