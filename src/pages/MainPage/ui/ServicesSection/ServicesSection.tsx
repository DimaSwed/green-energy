import { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { SubtitleName } from '@/shared/ui/SubtitleName'
import { useTranslation } from 'react-i18next'
import { Language } from '@/app/types/language.types'
import { ServicesGrid } from './ServicesGrid'

export const ServicesSection: FC = () => {
  const { t, i18n } = useTranslation()
  const isEnglish = i18n.language === Language.ENG

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
            gap: '20px'
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
          <SubtitleName title={t('services subtitle')} />
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
              width: '100%'
              // '@media (max-width: 768px)': {
              //   maxWidth: isEnglish ? '892px' : '720px'
              // }
            }}
          >
            {t('services title')}
          </Typography>

          <Stack gap="15px">
            <ServicesGrid />
          </Stack>
        </Stack>
      </Box>
    </Stack>
  )
}
