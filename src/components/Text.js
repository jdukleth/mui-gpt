/* --- IMPORTS --- */
import { Box } from '@mui/material'
import { clampulator } from 'utilities/clampulator'

/* --- <Text> COMPONENT ---------------------------------------------------- */
/* uses CSS clamp to scale fonts perfect with viewport width                 */
/* ------------------------------------------------------------------------- */
export const Text = ({ children, clamp = {}, sx = {}, inline, ...props }) => {
  const clampCss = css.textBox(clamp)
  const inlineCss = inline ? { display: 'inline-block' } : {}
  const boxCss = { ...sx, ...inlineCss, ...clampCss }

  return (
    <Box sx={boxCss} {...props}>
      {children}
    </Box>
  )
}

/* --- STYLES --- */
const css = {
  textBox: (thresholds) => ({
    fontSize: clampulator(thresholds)
  })
}
