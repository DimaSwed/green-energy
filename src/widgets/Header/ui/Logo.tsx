import { FC } from 'react'
import { Box } from '@mui/material'

export const Logo: FC = () => {
  return (
    <Box
      component="img"
      sx={{
        height: '30px',
        width: '197px',
        cursor: 'pointer'
      }}
      alt="Logo"
      src={'/src/shared/assets/brand.svg'}
    />
  )
}
