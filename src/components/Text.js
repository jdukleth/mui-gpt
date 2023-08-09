/* --- IMPORTS --- */
import { Box } from '@mui/material'
import breakpoints from '../utilities/breakpoints'
import { fontSize } from '../utilities/fontUtilities'
import clampulator from '../utilities/clampulator'

/* --- COMPONENT --- */
const Text = ({ 
  children, 
  minFontSize = fontSize.min, 
  maxFontSize = fontSize.max,
  minViewport = breakpoints.sm, 
  maxViewport = breakpoints.lg 
}) => (
  <Box sx={css.textBox(minFontSize, maxFontSize, minViewport, maxViewport)}>
    {children}
  </Box>
)

/* --- STYLES --- */
const css = {
  textBox: (minFontSize, maxFontSize, minViewport, maxViewport) => ({
    fontSize: `clamp(
      ${minFontSize}px, 
      ${clampulator(minFontSize, maxFontSize, minViewport, maxViewport)}, 
      ${maxFontSize}px
    )`,
  }),
}

/* --- EXPORTS --- */
export default Text
