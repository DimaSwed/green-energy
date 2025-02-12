import { FC } from 'react'
import { Box } from '@mui/material'
import headerLogo from '@/shared/assets/brand.svg'

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
      src={headerLogo}
    />
  )
}
