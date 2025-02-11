import { FC } from 'react'
import { Box } from '@mui/material'

export const LogoMobile: FC = () => {
  return (
    <Box
      component="img"
      sx={{
        height: '30px',
        width: '197px',
        cursor: 'pointer',
        '@media (max-width:320px)': { height: '23px', width: '150px' }
      }}
      alt="Logo"
      src={'/src/shared/assets/brand-white.svg'}
    />
  )
}
