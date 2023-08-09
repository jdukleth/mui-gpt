import { resolution } from 'utilities/breakpoints'
import { fontSize } from 'utilities/fonts'

/* --- CLAMPULATOR UTILITY FUNCTION --- */
export const clampulator = (thresholds) => {
  const min = thresholds.min ?? fontSize.min
  const max = thresholds.max ?? fontSize.max
  const minVw = thresholds.minVw ?? resolution.min
  const maxVw = thresholds.maxVw ?? resolution.max

  const slope = (max - min) / (maxVw - minVw)
  const base = min - slope * minVw

  return `
    clamp(
      ${min}px, 
      calc(${base}px + ${slope * 100}vw), 
      ${max}px
    )
  `
}
