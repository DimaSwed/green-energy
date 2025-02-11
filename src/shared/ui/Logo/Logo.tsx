import { FC } from 'react'
import { Box } from '@mui/material'

const Logo: FC = () => {
  return (
    <Box
      component="img"
      sx={{
        height: '30px',
        width: '197px',
        cursor: 'pointer'
        // '@media (max-width:480px)': { height: '40px', width: '182px' },
        // '@media (max-width:320px)': { height: '33px', width: '150px' }
      }}
      alt="Logo"
      src="../../assets/brand.svg"
    />
  )
}

export default Logo
