import { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { SubtitleName } from '@/shared/ui/SubtitleName'
import { useTranslation } from 'react-i18next'
import { Language } from '@/app/types/language.types'
import shapeImage from '@/shared/assets/advantagesection/shape.png'
import advantageImage from '@/shared/assets/advantagesection/advantage-image-box.png'

export const AdvantageSection: FC = () => {
  const { t, i18n } = useTranslation()
  const isEnglish = i18n.language === Language.ENG

  const advantageKeys: string[] = ['first', 'second', 'third', 'fourth']

  return (
    <Box
      sx={{
        position: 'relative',
        maxWidth: '1440px',
        width: '100%',
        height: '100%',
        display: 'flex',
        backgroundColor: 'transparent',
        m: '0 auto',
        padding: '100px 36px 100px 36px',
        '@media (max-width: 1280px) and (min-width: 993px)': {
          padding: '100px 40px 100px 40px'
        },
        '@media (max-width: 992px) and (min-width: 769px)': {
          padding: '100px 16px 100px 16px'
        },
        '@media (max-width: 768px)': {
          padding: '80px 20px 80px 20px',
          flexDirection: 'column',
          gap: '20px'
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
          flex: '1 1 10%',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'space-between'
        }}
      >
        <SubtitleName title={t('advantage subtitle')} />
        <Box
          component={'img'}
          src={shapeImage}
          sx={{
            maxWidth: '416px',
            width: '100%',
            height: '424px',
            '@media (max-width: 1280px) and (min-width: 993px)': {
              maxWidth: '360px',
              height: '367px'
            },
            '@media (max-width: 992px) and (min-width: 769px)': {
              maxWidth: '300px',
              height: '306px'
            },
            '@media (max-width:768px)': {
              display: 'none'
            }
          }}
        />
      </Box>

      <Stack
        sx={{
          flex: '1 1 40%',
          gap: '30px',
          '@media (max-width: 992px)': {
            flex: '1 1 42%'
          }
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
              maxWidth: isEnglish ? '892px' : '100%'
            }
          }}
        >
          {t('advantage title')}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            '@media (max-width: 480px)': {
              flexDirection: 'column',
              alignItems: 'start',
              gap: '20px'
            }
          }}
        >
          <Stack gap="15px">
            {advantageKeys.map((key, index) => {
              const data = t(`advantage description.${key}`, { returnObjects: true }) as {
                number: string
                description: string
              }

              return (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                    '@media (max-width:480px)': {
                      gap: '10px'
                    }
                  }}
                >
                  <Typography variant="h5" color="text.secondary">
                    {data.number}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="divider"
                    sx={{
                      maxWidth: '416px',
                      fontWeight: 400,
                      lineHeight: '130%',
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
                        maxWidth: '100%'
                      }
                    }}
                  >
                    {data.description}
                  </Typography>
                </Box>
              )
            })}
          </Stack>

          <Box
            component={'img'}
            src={advantageImage}
            sx={{
              maxWidth: '416px',
              width: '100%',
              height: '416px',
              '@media (max-width: 1280px) and (min-width: 993px)': {
                maxWidth: '360px',
                height: '361px'
              },
              '@media (max-width: 992px) and (min-width: 769px)': {
                maxWidth: '300px',
                height: '300px'
              },
              '@media (max-width:768px)': {
                maxWidth: '354px',
                height: '355px'
              },
              '@media (max-width:480px)': {
                m: '0 auto'
              },
              '@media (max-width:320px)': {
                maxWidth: '300px',
                height: '301px'
              }
            }}
          />
        </Box>
      </Stack>
    </Box>
  )
}
