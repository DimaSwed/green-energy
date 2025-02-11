import { FC } from 'react'
import { Typography, SxProps, Theme } from '@mui/material'

interface TitleNameProps {
  title: string
  sx?: SxProps<Theme>
}

export const SubtitleName: FC<TitleNameProps> = ({ title, sx }) => {
  return (
    <Typography
      variant="body1"
      sx={{
        color: 'primary.dark',
        height: '100%',
        textTransform: 'inherit',
        ...sx
      }}
    >
      {title}
    </Typography>
  )
}
