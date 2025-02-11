import { FC, useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { BurgerButton } from './Burger'
import { MobileNav } from './MobileNav'
import { Logo } from './Logo'
import { HeaderListMenu } from '../model/HeaderListMenu'
import { LanguageSwitcher } from '@/features'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'

export const Header: FC = () => {
  const [lang, setLang] = useState<string>('en')

  useEffect(() => {
    const storedLang = Cookies.get('lang')
    if (storedLang) {
      setLang(storedLang)
    }
  }, [])

  const handleLangChange = (newLang: string) => {
    setLang(newLang)
    Cookies.set('lang', newLang)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        zIndex: 1000,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '70px',
        backgroundColor: 'transparent',
        boxShadow: 'none'
        // '@media (max-width:768px)': { height: '82px' }
      }}
    >
      <Box
        display="flex"
        sx={{
          margin: '0 auto',
          maxWidth: '1440px',
          alignSelf: 'center',
          width: '100%',
          position: 'relative',
          padding: '20px 36px',
          justifyContent: 'space-between',
          alignItems: 'center',
          '@media (max-width: 1280px)': {
            padding: '20px 40px'
          },
          '@media (max-width: 992px)': {
            padding: '20px 16px'
          },
          '@media (max-width: 768px)': {
            padding: '20px'
          },
          '@media (max-width: 480px)': {
            padding: '20px 16px'
          },
          '@media (max-width: 320px)': {
            padding: '20px 10px'
          }
        }}
      >
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Logo />
        </Link>

        <Box
          sx={{
            display: 'flex',
            gap: '15px',
            '@media (max-width:768px)': { display: 'none' }
          }}
        >
          <HeaderListMenu />
        </Box>

        <Box
          sx={{
            '@media (max-width:768px)': { display: 'none' }
          }}
        >
          <LanguageSwitcher lang={lang} onChangeLang={handleLangChange} />
        </Box>

        <Box
          display="flex"
          sx={{
            '@media (max-width:768px)': { display: 'none' }
          }}
        >
          <MobileNav lang={lang} onChangeLang={handleLangChange} />

          <Link
            to="tel:+390612345678"
            target="_blank"
            style={{
              textDecoration: 'none'
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'divider',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s ease-in-out',
                '&:hover': {
                  color: 'text.secondary'
                }
              }}
            >
              +39 06 12345678
            </Typography>
          </Link>
        </Box>
        <BurgerButton />
      </Box>
    </Box>
  )
}
