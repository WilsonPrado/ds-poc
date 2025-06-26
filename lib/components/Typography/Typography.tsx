import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps
} from '@mui/material'

export type TypographyProps = MuiTypographyProps

export const Typography = (props: TypographyProps) => {
  return <MuiTypography {...props} />
}
