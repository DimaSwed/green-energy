import { FC, useEffect } from 'react'
import { Box, Drawer, Stack, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import { closeNavReducer } from '@/app/store/slices/slice-navigation'
import { HeaderListMenu } from '../model/HeaderListMenu'
import { LanguageSwitcher } from '@/features'
import { LogoMobile } from './LogoMobile'
export interface IWindowProps {
  window?: () => Window
  lang: string
  onChangeLang: (lang: string) => void
}

const drawerWidth = '100%'

export const MobileNav: FC<IWindowProps> = ({ window, lang, onChangeLang }) => {
  const dispatch = useAppDispatch()
  const showNav = useAppSelector((state) => state.navigation.showNav)

  const closeNavHandler = () => dispatch(closeNavReducer())

  useEffect(() => {
    if (showNav) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = 'auto'
    }
  }, [showNav])

  const drawer = (
    <Box
      position={'relative'}
      height={'100vh'}
      sx={{
        backgroundColor: 'secondary.main',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        sx={{
          height: '82px',
          padding: '20px',
          '@media (max-width: 480px)': {
            padding: '20px 16px'
          },
          '@media (max-width: 320px)': {
            padding: '20px 10px'
          }
        }}
      >
        <LogoMobile />
        <Box
          onClick={closeNavHandler}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'divider'
          }}
        >
          <Box
            component="svg"
            xmlns="http://www.w3.org/2000/svg"
            width="42px"
            height="42px"
            viewBox="0 0 42 42"
            fill="#FFFFFF"
            sx={{
              cursor: 'pointer'
            }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M34.163 10.7931L10.1213 34.8347L8 32.7134L32.0416 8.67175L34.163 10.7931Z"
              fill="#fff"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.00111 10.6212L32.0427 34.6628L34.1641 32.5415L10.1224 8.49987L8.00111 10.6212Z"
              fill="#fff"
            />
          </Box>
        </Box>
      </Box>

      <Stack
        sx={{
          // gap: '100px',
          // alignItems: 'center',
          // mt: '130px',
          // '@media (max-width: 480px)': { mt: '100px' },
          // '@media (max-width: 320px)': { mt: '68px', gap: '60px' }
          // gap: '60px',
          alignItems: 'center',
          justifyContent: 'space-around',
          height: '100%',
          m: '0 auto',
          // mt: '130px',
          // mb: '114px',
          '@media (max-width: 480px)': { mt: '40px', gap: '30px', mb: '65px' },
          '@media (max-width: 320px)': { mt: '0px', gap: '10px', mb: '0px' }
        }}
      >
        <Stack
          sx={{
            gap: '30px',
            '@media (max-width: 320px)': { gap: '20px' }
          }}
        >
          <HeaderListMenu
            onClick={closeNavHandler}
            customStyles={{
              fontFamily: 'Roboto, sans-serif',
              fontWeight: '600',
              textAlign: 'center',
              color: 'primary.light'
            }}
          />
        </Stack>

        <Stack
          sx={{
            alignItems: 'center',
            gap: '50px',
            '@media (max-width: 320px)': { gap: '10px' }
          }}
        >
          <LanguageSwitcher lang={lang} onChangeLang={onChangeLang} />

          <Box
            component={'a'}
            href="tel:+390612345678"
            sx={{
              textAlign: 'center'
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: 'primary.light',
                fontFamily: 'Roboto, sans-serif',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s ease-in-out',
                '&:hover': {
                  color: 'text.secondary'
                },
                '@media (max-width:320px)': {
                  fontSize: '32px'
                }
              }}
            >
              +39 06 12345678
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Box>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <nav>
      <Drawer
        container={container}
        variant="temporary"
        open={showNav}
        onClose={closeNavHandler}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          display: { sm: 'block', lg: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        {drawer}
      </Drawer>
    </nav>
  )
}
