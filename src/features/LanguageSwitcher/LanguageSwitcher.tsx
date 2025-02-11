import { FC } from 'react'
import { Box, Typography } from '@mui/material'
import i18next from 'i18next'

interface LanguageSwitcherProps {
  lang: string
  onChangeLang: (lang: string) => void
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ lang, onChangeLang }) => {
  const changeLanguage = (language: string) => {
    i18next.changeLanguage(language)
    onChangeLang(language)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        color: 'primary.main'
      }}
    >
      <Typography
        variant="body2"
        onClick={() => changeLanguage('it')}
        border="none"
        sx={{
          color: lang === 'it' ? 'text.secondary' : 'primary.main',
          backgroundColor: 'transparent',
          cursor: 'pointer',
          '@media (max-width:768px)': {
            color: lang === 'it' ? 'background.paper' : 'primary.main',
            fontSize: '34px',
            fontWeight: 600
          },
          '@media (max-width:320px)': { fontSize: '28px' }
        }}
      >
        It
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: 'primary.main',
          '@media (max-width:768px)': {
            color: 'background.paper',
            fontSize: '34px',
            fontWeight: 600
          },
          '@media (max-width:320px)': { fontSize: '28px' }
        }}
      >
        /
      </Typography>
      <Typography
        variant="body2"
        onClick={() => changeLanguage('en')}
        border="none"
        sx={{
          color: lang === 'en' ? 'text.secondary' : 'primary.main',
          backgroundColor: 'transparent',
          cursor: 'pointer',
          '@media (max-width:768px)': {
            color: lang === 'en' ? 'background.paper' : 'primary.main',
            fontSize: '34px',
            fontWeight: 600
          },
          '@media (max-width:320px)': { fontSize: '28px' }
        }}
      >
        Eng
      </Typography>
    </Box>
  )
}

export default LanguageSwitcher
