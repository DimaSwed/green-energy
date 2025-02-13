import { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Language } from '@/app/types/language.types'
import ContactForm from './Form'

const FormSection: FC = () => {
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
        <Stack
          sx={{
            flex: '1 1 10%',
            alignItems: 'start'
          }}
        >
          <Typography
            variant="h2"
            color="primary.light"
            sx={{
              textTransform: 'uppercase',
              maxWidth: '416px',
              width: '100%',
              '@media (max-width: 1280px) and (min-width: 993px)': {
                maxWidth: '360px'
              },
              '@media (max-width: 992px) and (min-width: 769px)': {
                maxWidth: '300px'
              },
              '@media (max-width: 768px)': {
                maxWidth: '100%'
              },
              '@media (max-width:320px)': {
                fontSize: '28px',
                maxWidth: isEnglish ? '250px' : '100%'
              }
            }}
          >
            {t('form title')}
          </Typography>
        </Stack>
        <Stack
          sx={{
            flex: '1 1 40%',
            gap: '40px'
          }}
        >
          <Typography
            variant="h4"
            color="primary.light"
            sx={{
              textTransform: 'uppercase',
              maxWidth: isEnglish ? '892px' : '940px',
              width: '100%'
              // '@media (max-width: 768px)': {
              //   maxWidth: isEnglish ? '892px' : '720px'
              // }
            }}
          >
            {t('form subtitle')}
          </Typography>

          <ContactForm />
        </Stack>
      </Box>
    </Stack>
  )
}

export default FormSection
