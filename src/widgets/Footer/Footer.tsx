import { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'

export const Footer: FC = () => {
  return (
    <Box sx={{ backgroundColor: 'divider' }}>
      <Stack
        id="contacts-section"
        sx={{
          maxWidth: '1440px',
          height: 'fit-content',
          m: '0 auto',
          width: '100%',
          padding: '40px 36px',
          gap: '30px',

          '@media (max-width: 1280px) and (min-width: 993px)': {
            padding: '40px'
          },
          '@media (max-width: 992px) and (min-width: 769px)': {
            padding: '40px 16px'
          },
          '@media (max-width: 768px) and (min-width: 481px)': {
            padding: '40px 20px'
          },
          '@media (max-width: 480px) and (min-width: 321px)': {
            padding: '40px 16px'
          },
          '@media (max-width: 320px)': {
            padding: '40px 10px'
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '60px',
            '@media (max-width:992px)': { gap: '30px' },
            // justifyContent: 'space-between'
            '@media (max-width: 768px)': {
              flexDirection: 'column',
              gap: '20px'
            }
          }}
        >
          <Typography
            component="a"
            href="https://www.google.com/maps?q=Piazza+Navona,+Roma"
            target="_blank"
            rel="noopener noreferrer"
            variant="subtitle1"
            sx={{
              textDecoration: 'none',
              textTransform: 'uppercase',
              color: 'primary.light',
              cursor: 'pointer',
              maxWidth: '416px',
              width: '100%',
              '&:hover': { color: 'text.secondary' },
              '@media (max-width:1280px)': { maxWidth: '360px' },
              '@media (max-width:992px)': { maxWidth: '300px' },
              '@media (max-width: 768px)': {
                maxWidth: '100%'
              }
              // '@media (max-width:320px)': { fontSize: '20px' }
            }}
          >
            VIA TERENZIO 7 - 00193 - ROMA (RM)
          </Typography>

          <Typography
            variant="subtitle1"
            component={'a'}
            href="tel:+390612345678"
            sx={{
              textDecoration: 'none',
              textTransform: 'uppercase',
              color: 'primary.light',
              maxWidth: '416px',
              width: '100%',
              '@media (max-width:1280px)': { maxWidth: '360px' },
              '@media (max-width:992px)': { maxWidth: '300px' },
              '@media (max-width: 768px)': {
                maxWidth: '100%'
              }
              // '@media (max-width:320px)': { fontSize: '20px' }
            }}
          >
            +39 06 12345678
          </Typography>

          <Typography
            variant="subtitle1"
            component={'a'}
            href="mailto:greenenergy-srl@pec.it"
            sx={{
              textDecoration: 'none',
              textTransform: 'uppercase',
              color: 'primary.light',
              '&:hover': { color: 'text.secondary' },
              '@media (max-width:1280px)': { maxWidth: '360px' },
              '@media (max-width:992px)': { maxWidth: '300px' },
              '@media (max-width: 768px)': {
                maxWidth: '100%'
              }
              // '@media (max-width:320px)': { fontSize: '20px' }
            }}
          >
            greenenergy-srl@pec.it
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            width: '100%',
            gap: '60px',
            '@media (max-width:992px)': { gap: '30px' },
            '@media (max-width: 768px)': {
              gap: '20px'
            },
            '@media (max-width: 480px)': {
              gap: '10px'
            },
            '@media (max-width: 320px)': {
              flexDirection: 'column',
              gap: '10px'
            }
          }}
        >
          <Typography
            variant="body2"
            color="primary.dark"
            sx={{
              fontWeight: 400,
              lineHeight: '130%',
              maxWidth: '416px',
              width: '100%',
              '@media (max-width:1280px)': { maxWidth: '360px' },
              '@media (max-width:992px)': { maxWidth: '300px' },
              '@media (max-width: 768px)': {
                maxWidth: '354px'
              },
              '@media (max-width: 480px)': {
                maxWidth: '219px'
              }
            }}
          >
            © 2024 TOP EQUIPMENT
          </Typography>

          <Typography
            variant="body2"
            color="primary.dark"
            sx={{
              fontWeight: 400,
              lineHeight: '130%',
              '@media (max-width:1280px)': { maxWidth: '360px' },
              '@media (max-width: 768px)': {
                maxWidth: '354px'
              },
              '@media (max-width: 480px)': {
                maxWidth: '219px'
              }
            }}
          >
            Partita IVA: 16087171001
          </Typography>
        </Box>
      </Stack>
    </Box>
  )
}
