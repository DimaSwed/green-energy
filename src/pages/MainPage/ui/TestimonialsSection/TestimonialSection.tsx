import { FC, useState } from 'react'
import { Box, Stack } from '@mui/material'
import { SubtitleName } from '@/shared/ui/SubtitleName'
import { useTranslation } from 'react-i18next'
import { TestimonialCard } from './TestimonialCard'
import ShowMore from '@/shared/ui/ShowMoreButton'

export const TestimonialSection: FC = () => {
  const { t } = useTranslation()

  const testimonialsKeys = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth']

  const [isExpanded, setIsExpanded] = useState(false)

  const buttonText = isExpanded ? t('testimonial show less') : t('testimonial show more')

  const displayedTestimonials = isExpanded ? testimonialsKeys : testimonialsKeys.slice(0, 3)

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
          <SubtitleName title={t('testimonial subtitle')} />
        </Box>
        <Stack
          sx={{
            flex: '1 1 40%',
            gap: '30px',
            '@media (max-width: 992px) ': {
              flexDirection: 'column',
              gap: '20px'
            }
          }}
        >
          <Stack gap="10px">
            {displayedTestimonials.map((key, index) => {
              const data = t(`testimonial description.${key}`, { returnObjects: true }) as {
                title: string
                description: string
                author: string
                country: string
              }

              return (
                <TestimonialCard
                  key={index}
                  title={data.title}
                  description={data.description}
                  author={data.author}
                  country={data.country}
                />
              )
            })}
          </Stack>

          <ShowMore
            isExpanded={isExpanded}
            onClick={() => setIsExpanded(!isExpanded)}
            text={buttonText}
          />
        </Stack>
      </Box>
    </Stack>
  )
}
