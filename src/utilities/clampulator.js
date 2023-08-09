import { resolution } from './breakpoints'
import { fontSize } from './fonts'

/* --- CLAMPULATOR UTILITY FUNCTION --- */
export const clampulator = (
  minPixels = fontSize.min,
  maxPixels = fontSize.max,
  minViewport = resolution.min,
  maxViewport = resolution.max
) => {
  const slope = (maxPixels - minPixels) / (maxViewport - minViewport)
  const base = minPixels - slope * minViewport

  return `
    clamp(
      ${minPixels}px, 
      calc(${base}px + ${slope * 100}vw), 
      ${maxPixels}px
    )
  `
}
