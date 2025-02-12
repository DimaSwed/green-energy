import { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'

interface ITestimonialCard {
  title: string
  description: string
  author: string
  country: string
}

export const TestimonialCard: FC<ITestimonialCard> = ({ title, description, author, country }) => {
  return (
    <Stack
      sx={{
        maxWidth: '892px',
        height: 'fit-content',
        borderRadius: '20px',
        border: '1px solid rgba(207, 215, 222, 1.0)',
        p: '20px',
        gap: '15px'
      }}
    >
      <Typography variant="h5" color="divider" sx={{ fontWeight: 400, textTransform: 'initial' }}>
        {description}
      </Typography>
      <Stack gap="2px">
        <Typography
          variant="body2"
          color="text.primary"
          sx={{ fontWeight: 700, lineHeight: '130%' }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
            '@media (max-width: 320px) ': {
              flexDirection: 'column',
              gap: '3px'
            }
          }}
        >
          <Typography variant="subtitle2" color="primary.main">
            {author}
          </Typography>
          <Typography
            variant="subtitle2"
            color="primary.main"
            sx={{
              '@media (max-width: 320px) ': {
                display: 'none'
              }
            }}
          >
            /
          </Typography>
          <Typography variant="subtitle2" color="primary.main">
            {country}
          </Typography>
        </Box>
      </Stack>
    </Stack>
  )
}
