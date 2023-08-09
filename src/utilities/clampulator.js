/* --- CLAMPULATOR UTILITY FUNCTION --- */
const clampulator = (minPixels, maxPixels, minViewport, maxViewport) => {
  const slope = (maxPixels - minPixels) / (maxViewport - minViewport)
  const base = minPixels - slope * minViewport
  return `calc(${base}px + ${slope * 100}vw)`
}

export default clampulator
