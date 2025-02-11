import { FC, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import ShowMoreProducts from './ShowMoreProducts'
import { SubtitleName } from '@/shared/ui/SubtitleName'
import { useTranslation } from 'react-i18next'
import { Language } from '@/app/types/language.types'

export const WhySection: FC = () => {
  const { t, i18n } = useTranslation()
  const isEnglish = i18n.language === Language.ENG

  const [expandedIndex, setExpandedIndex] = useState<number>(0)
  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? 0 : index)
  }

  const whyKeys: string[] = ['first', 'second', 'third', 'fourth', 'fifth']

  return (
    <Stack
      id="why-section"
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
          mb: '30px',
          alignItems: 'flex-start',
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
          <SubtitleName title={t('why subtitle')} />
        </Box>

        <Box
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
            }}
          >
            {t('why title')}
          </Typography>
        </Box>
      </Box>

      <Stack>
        {whyKeys.map((key, index) => {
          const data = t(`why description.${key}`, { returnObjects: true }) as {
            number: string
            title: string
            description: string
            caption: string[]
          }

          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                borderTop: '1px solid #CFD7DE',
                backgroundColor: expandedIndex === index ? '#d7e0e7' : 'transparent',
                transition: 'background-color 0.3s, '
              }}
            >
              <ShowMoreProducts
                isExpanded={expandedIndex === index}
                onClick={() => handleToggle(index)}
                id={data.number}
                title={data.title}
                description={data.description}
                caption={data.caption}
              />
            </Box>
          )
        })}
      </Stack>
    </Stack>
  )
}
