/* --- IMPORTS --- */
import { Typography } from '@mui/material'
import { clampulator } from 'utilities/clampulator'

/* --- <Text> COMPONENT ---------------------------------------------------- */
/* uses CSS clamp to scale fonts perfect with viewport width                 */
/* ------------------------------------------------------------------------- */
export const Text = ({ children, clamp = {}, sx = {}, ...props }) => {
  const clampCss = css.text(clamp)
  const textCss = { ...sx, ...clampCss }

  return (
    <Typography sx={textCss} {...props}>
      {children}
    </Typography>
  )
}

/* --- STYLES --- */
const css = {
  text: (thresholds) => ({
    fontSize: clampulator(thresholds)
  })
}
