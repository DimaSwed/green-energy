import { FC } from 'react'
import { Box, Stack, Typography, useMediaQuery } from '@mui/material'
import { Language } from '@/app/types/language.types'
import { useTranslation } from 'react-i18next'
import firstImage from '@/shared/assets/herosection/first-img.png'
import firstImageMobile from '@/shared/assets/herosection/first-img-mobile.png'
import secondImage from '@/shared/assets/herosection/second-img.png'
import doubleImgMobile from '@/shared/assets/herosection/double-blocks-mobile.png'
import ColoredButton from '@/shared/ui/ColoredButton'
import BlackButton from '@/shared/ui/BlackButton'

export const HeroSection: FC = () => {
  const { t, i18n } = useTranslation()
  const isEnglish = i18n.language === Language.ENG
  const isMobileL = useMediaQuery(`(max-width: 480px)`)

  return (
    <Stack
      sx={{
        position: 'relative',
        maxWidth: '1440px',
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        m: '0 auto',
        padding: '60px 36px 90px 36px',
        '@media (max-width: 1280px) and (min-width: 993px)': {
          padding: '60px 40px 90px 40px'
        },
        '@media (max-width: 992px) and (min-width: 769px)': {
          padding: '60px 16px 100px 16px'
        },
        '@media (max-width: 768px) and (min-width: 481px)': {
          padding: '38px 20px 80px 20px'
        },
        '@media (max-width: 480px) and (min-width: 321px)': {
          padding: '20px 16px 60px 16px'
        },
        '@media (max-width: 320px) ': {
          padding: '20px 10px 60px 10px'
        }
      }}
    >
      <Stack
        sx={{
          minHeight: '680px',
          height: '100%',
          gap: '50px',
          '@media (max-width: 768px)': {
            minHeight: '0'
          },
          '@media (max-width: 480px)': {
            gap: '20px'
          }
        }}
      >
        <Stack>
          <Typography
            variant="h1"
            sx={{
              color: 'text.secondary',
              textTransform: 'uppercase',
              textAlign: 'center'
            }}
          >
            {t('hero title 1')}
          </Typography>

          <Typography
            variant="h1"
            sx={{
              color: 'text.secondary',
              textTransform: 'uppercase',
              textAlign: 'center'
            }}
          >
            {t('hero title 2')}
          </Typography>
          <Typography
            variant="h1"
            sx={{
              color: 'text.secondary',
              textTransform: 'uppercase',
              textAlign: 'center'
            }}
          >
            {t('hero title 3')}
          </Typography>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              height: '456px',
              maxWidth: '1440px',
              width: '100%',
              margin: '0 auto',
              '@media (max-width:768px)': { height: '300px' },
              '@media (max-width:480px)': {
                height: '261px'
              },
              '@media (max-width:320px)': { height: '175px' }
            }}
          >
            {/* Изображение ветровой турбины */}
            <Box
              sx={{
                maxWidth: '385px',
                width: '100%',
                height: '456px',
                backgroundImage: isMobileL ? `url(${firstImageMobile})` : `url(${firstImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                '@media (max-width:1025px)': { maxWidth: '334px', height: '397px' },
                '@media (max-width:992px)': { maxWidth: '334px', height: '397px' },
                '@media (max-width:768px)': { maxWidth: '254px', height: '301px' },
                '@media (max-width:480px)': {
                  // maxWidth: '100%',
                  // height: '261px',
                  // order: 2,
                  // ml: '-35px'
                  display: 'none'
                },

                '@media (max-width:320px)': { height: '175px', ml: '-25px' }
              }}
            />

            {/* Изображение солнечных панелей */}
            <Box
              sx={{
                maxWidth: '385px',
                width: '100%',
                height: '456px',
                backgroundImage: `url(${secondImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                marginLeft: '-60px',
                '@media (max-width:1025px)': {
                  maxWidth: '334px',
                  height: '397px',
                  marginLeft: '-55px'
                },
                '@media (max-width:992px)': {
                  maxWidth: '334px',
                  height: '397px',
                  marginLeft: '-55px'
                },
                '@media (max-width:768px)': {
                  maxWidth: '254px',
                  height: '301px',
                  marginLeft: '-45px'
                },
                '@media (max-width:480px)': {
                  // maxWidth: '220px',
                  // height: '261px',
                  // marginLeft: 0,
                  // order: 1
                  display: 'none'
                }
                // '@media (max-width:320px)': { maxWidth: '148px', height: '175px' }
              }}
            />

            {/* Двойное изображение */}
            <Box
              sx={{
                maxWidth: '448px',
                width: '100%',
                height: 'auto',
                backgroundImage: `url(${doubleImgMobile})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                display: isMobileL ? 'block' : 'none',
                '&:after': {
                  content: '""',
                  display: 'block',
                  paddingBottom: '58.45%'
                },
                '@media (max-width:320px)': {
                  maxWidth: '300px',
                  '&:after': {
                    paddingBottom: '58.45%'
                  }
                }
              }}
            />

            {/* Текстовый блок */}
            <Box
              sx={{
                maxWidth: '456px',
                width: '100%',
                height: '456px',
                backgroundColor: '#2C6EA4',
                borderRadius: 500,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                textAlign: 'center',
                gap: '30px',
                marginLeft: '-60px',
                '@media (max-width:1025px)': {
                  maxWidth: '397px',
                  height: '397px',
                  marginLeft: '-55px'
                },
                '@media (max-width:992px)': {
                  maxWidth: '397px',
                  height: '397px',
                  marginLeft: '-55px'
                },
                '@media (max-width:768px)': {
                  maxWidth: '301px',
                  height: '300px',
                  marginLeft: '-45px'
                },
                '@media (max-width:480px)': {
                  display: 'none'
                }
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  maxWidth: '77%',
                  fontWeight: 400,
                  lineHeight: '130%',
                  '@media (max-width:992px)': {
                    maxWidth: isEnglish ? '77%' : '75%'
                  },
                  '@media (max-width:768px)': {
                    maxWidth: isEnglish ? '77%' : '80%'
                  }
                }}
              >
                {t('hero subtitle')}
              </Typography>

              <ColoredButton
                type="button"
                sx={{
                  maxWidth: '356px',
                  height: '42px',
                  borderRadius: '100px',
                  backgroundColor: '#FFFFFF',
                  gap: '6px',
                  '@media (max-width:992px)': {
                    maxWidth: '297px'
                  },
                  '@media (max-width:768px)': {
                    maxWidth: '241px'
                  }
                }}
              >
                {t('hero button')}
              </ColoredButton>
            </Box>
          </Box>

          <Stack sx={{ display: isMobileL ? 'flex' : 'none', gap: '20px' }}>
            <Typography
              variant="body2"
              color="divider"
              sx={{ textAlign: 'center', fontWeight: 400, lineHeight: '130%' }}
            >
              {t('hero subtitle')}
            </Typography>
            <BlackButton type="button" sx={{ gap: '6px' }}>
              {t('hero button')}
            </BlackButton>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
