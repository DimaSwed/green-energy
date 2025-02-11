import { FC } from 'react'
import { Box, Stack, Typography, useMediaQuery } from '@mui/material'
import { SubtitleName } from '@/shared/ui/SubtitleName'
import { useTranslation } from 'react-i18next'
import { Language } from '@/app/types/language.types'
import aboutImage from '@/shared/assets/aboutsection/about-image.png'
import aboutTabletImage from '@/shared/assets/aboutsection/about-image-tablet.png'
import aboutDesktopImage from '@/shared/assets/aboutsection/about-image-desktop.png'
import aboutMobileLImage from '@/shared/assets/aboutsection/about-image-mobileL.png'
import aboutMobilePImage from '@/shared/assets/aboutsection/about-image-mobileP.png'

export const AboutSection: FC = () => {
  const { t, i18n } = useTranslation()
  const isEnglish = i18n.language === Language.ENG
  const isDesktop = useMediaQuery(`(max-width: 992px) and (min-width: 769px)`)
  const isTablet = useMediaQuery(`(max-width: 768px) and (min-width: 481px)`)
  const isMobileL = useMediaQuery(`(max-width: 480px) and (min-width: 321px)`)
  const isMobileP = useMediaQuery(`(max-width: 320px)`)

  const aboutKeys: string[] = ['first', 'second', 'third', 'fourth']

  return (
    <Stack
      sx={{
        position: 'relative',
        maxWidth: '1440px',
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        m: '0 auto',
        padding: '100px 36px 100px 36px',
        '@media (max-width: 1280px) and (min-width: 993px)': {
          padding: '100px 40px 100px 40px'
        },
        '@media (max-width: 992px) and (min-width: 769px)': {
          padding: '100px 16px 100px 16px'
        },
        '@media (max-width: 768px) and (min-width: 481px)': {
          padding: '80px 20px 80px 20px'
        },
        '@media (max-width: 480px) and (min-width: 321px)': {
          padding: '60px 16px 60px 16px'
        },
        '@media (max-width: 320px) ': {
          padding: '60px 10px 60px 10px'
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          '@media (max-width: 768px)': {
            flexDirection: 'column',
            gap: '10px'
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 10%',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <SubtitleName title={t('about subtitle')} />
        </Box>
        <Stack
          sx={{
            flex: '1 1 40%',
            gap: '30px'
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textTransform: 'uppercase',
              maxWidth: isEnglish ? '892px' : '940px',
              color: 'secondary.main',
              width: '100%',
              '@media (max-width: 768px)': {
                maxWidth: isEnglish ? '892px' : '720px'
              }
            }}
          >
            {t('about title')}
          </Typography>

          <Box
            component={'img'}
            src={
              (isDesktop && aboutDesktopImage) ||
              (isTablet && aboutTabletImage) ||
              (isMobileL && aboutMobileLImage) ||
              (isMobileP && aboutMobilePImage) ||
              aboutImage
            }
            // src={aboutTabletImage}
            sx={{
              maxWidth: '892px',
              width: '100%',
              height: '340px',
              '@media (max-width: 992px) and (min-width: 769px)': {
                maxWidth: '630px'
              },
              '@media (max-width:320px)': {
                maxWidth: '300px',
                height: '340px'
              }
            }}
          />

          <Stack gap="15px">
            {aboutKeys.map((key, index) => {
              const data = t(`about description.${key}`, { returnObjects: true }) as {
                title: string
                description: string
              }

              return (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    p: '5px 0',
                    borderTop: '1px solid #CFD7DE',
                    '@media (max-width:480px)': {
                      gap: '15px'
                    },
                    '@media (max-width:320px)': {
                      flexDirection: 'column'
                    }
                  }}
                >
                  <Typography variant="body1">{data.title}</Typography>
                  <Typography
                    variant="body2"
                    color="primary.dark"
                    sx={{
                      maxWidth: '416px',
                      fontWeight: 400,
                      '@media (max-width:1280px)': {
                        maxWidth: '360px'
                      },
                      '@media (max-width:992px)': {
                        maxWidth: '300px'
                      },
                      '@media (max-width:768px)': {
                        maxWidth: '354px'
                      },
                      '@media (max-width:480px)': {
                        maxWidth: '219px'
                      },
                      '@media (max-width:320px)': { maxWidth: '100%' }
                    }}
                  >
                    {data.description}
                  </Typography>
                </Box>
              )
            })}
          </Stack>
        </Stack>
      </Box>
    </Stack>
  )
}
