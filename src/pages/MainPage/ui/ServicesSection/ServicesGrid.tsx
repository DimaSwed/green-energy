import { FC } from 'react'
import { Box, Grid2, Stack, Typography, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Language } from '@/app/types/language.types'
import servicesImageOne from '@/shared/assets/servicessection/services-image-1.png'
import servicesImageTwo from '@/shared/assets/servicessection/services-image-2.png'
import servicesImageTwoMobileP from '@/shared/assets/servicessection/services-image-mobile-2.png'
import servicesImageThree from '@/shared/assets/servicessection/services-image-3.png'
import servicesImageFour from '@/shared/assets/servicessection/services-image-4.png'
import servicesImageFourMobileP from '@/shared/assets/servicessection/services-image-mobile-4.png'

export const ServicesGrid: FC = () => {
  const { t, i18n } = useTranslation()
  const isEnglish = i18n.language === Language.ENG

  const isMobileP = useMediaQuery(`(max-width: 320px)`)

  return (
    <Grid2
      container
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(4, auto)',
        rowGap: '15px',
        columnGap: '20px',
        '@media (max-width: 768px) and (min-width: 481px)': {
          gap: '10px'
        },
        '@media (max-width: 480px) and (min-width: 321px)': {
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'repeat(6, auto)',
          gap: '10px'
        },
        '@media (max-width: 320px) ': {
          gridTemplateColumns: 'repeat(1, 1fr)',
          gridTemplateRows: 'repeat(10, auto)',
          gap: '10px'
        }
      }}
    >
      <Box
        sx={{
          gridColumn: 'span 2',
          gridRow: '1',
          height: '284px',
          backgroundImage: `url(${servicesImageOne})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '@media (max-width: 1280px) and (min-width: 993px)': {
            height: '250px'
          },
          '@media (max-width: 992px) and (min-width: 769px)': {
            height: '200px'
          },
          '@media (max-width: 768px) and (min-width: 481px)': {
            height: '236px'
          },
          '@media (max-width: 480px) and (min-width: 321px)': {
            height: '219px'
          },
          '@media (max-width: 320px) ': {
            height: '150px'
          }
        }}
      />

      <Stack
        sx={{
          gridColumnStart: 3,
          gridRow: '1',
          position: 'relative',
          bgcolor: 'transparent',
          maxWidth: '284px',
          width: '100%',
          height: '284px',
          border: '1px solid rgba(207, 215, 222, 1.0)',
          justifyContent: 'center',
          gap: '10px',
          px: '10px',
          '@media (max-width: 1280px) and (min-width: 993px)': {
            height: '250px',
            maxWidth: '250px'
          },
          '@media (max-width: 992px) and (min-width: 769px)': {
            height: '200px',
            maxWidth: '200px',
            pr: isEnglish ? '10px' : '3px'
          },
          '@media (max-width: 768px) and (min-width: 481px)': {
            height: '236px',
            maxWidth: '236px',
            pr: isEnglish ? '10px' : '3px'
          },
          '@media (max-width: 480px) and (min-width: 321px)': {
            height: '219px',
            maxWidth: '219px',
            gridColumn: '1',
            gridRow: '2',
            pr: isEnglish ? '10px' : '2px'
          },
          '@media (max-width: 320px) ': {
            height: '150px',
            maxWidth: '300px',
            gridColumn: 1,
            gridRow: '2',
            px: isEnglish ? '10px' : '4px'
          }
        }}
      >
        <Typography variant="body1" color="text.primary">
          {t('services description.first.title')}
        </Typography>
        <Typography variant="body2" color="primary.main" sx={{ fontWeight: 400 }}>
          {t('services description.first.description')}
        </Typography>
      </Stack>

      <Box
        sx={{
          gridColumn: 1,
          gridRow: '2',
          maxWidth: '284px',
          width: '100%',
          height: '284px',
          backgroundImage: isMobileP
            ? `url(${servicesImageTwoMobileP})`
            : `url(${servicesImageTwo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '@media (max-width: 1280px) and (min-width: 993px)': {
            height: '250px',
            maxWidth: '250px'
          },
          '@media (max-width: 992px) and (min-width: 769px)': {
            height: '200px',
            maxWidth: '200px'
          },
          '@media (max-width: 768px) and (min-width: 481px)': {
            height: '236px',
            maxWidth: '236px'
          },
          '@media (max-width: 480px) and (min-width: 321px)': {
            height: '219px',
            maxWidth: '219px',
            gridColumn: 2
          },
          '@media (max-width: 320px) ': {
            height: '150px',
            maxWidth: '300px',
            gridColumn: 1,
            gridRow: '3'
          }
        }}
      />

      <Stack
        sx={{
          gridColumn: 2,
          gridRow: '2',
          position: 'relative',
          bgcolor: 'transparent',
          maxWidth: '284px',
          width: '100%',
          height: '284px',
          border: '1px solid rgba(207, 215, 222, 1.0)',
          justifyContent: 'center',
          gap: '10px',
          px: '10px',
          '@media (max-width: 1280px) and (min-width: 993px)': {
            height: '250px',
            maxWidth: '250px'
          },
          '@media (max-width: 992px) and (min-width: 769px)': {
            height: '200px',
            maxWidth: '200px'
          },
          '@media (max-width: 768px) and (min-width: 481px)': {
            height: '236px',
            maxWidth: '236px'
          },
          '@media (max-width: 480px) and (min-width: 321px)': {
            height: '219px',
            maxWidth: '219px',
            gridColumn: '1',
            gridRow: '3',
            pr: isEnglish ? '7px' : '3px'
          },
          '@media (max-width: 320px) ': {
            height: '150px',
            maxWidth: '300px',
            gridColumn: 1,
            gridRow: '4'
          }
        }}
      >
        <Typography variant="body1" color="text.primary">
          {t('services description.second.title')}
        </Typography>
        <Typography variant="body2" color="primary.main" sx={{ fontWeight: 400 }}>
          {t('services description.second.description')}
        </Typography>
      </Stack>

      <Stack
        sx={{
          gridColumn: 3,
          gridRow: '2',
          position: 'relative',
          bgcolor: 'text.secondary',
          maxWidth: '284px',
          width: '100%',
          height: '284px',
          border: '1px solid rgba(207, 215, 222, 1.0)',
          justifyContent: 'center',
          gap: '10px',
          px: '10px',
          '@media (max-width: 1280px) and (min-width: 993px)': {
            height: '250px',
            maxWidth: '250px'
          },
          '@media (max-width: 992px) and (min-width: 769px)': {
            height: '200px',
            maxWidth: '200px'
          },
          '@media (max-width: 768px) and (min-width: 481px)': {
            height: '236px',
            maxWidth: '236px',
            pr: isEnglish ? '10px' : '3px'
          },
          '@media (max-width: 480px) and (min-width: 321px)': {
            height: '219px',
            maxWidth: '219px',
            gridColumn: '2',
            gridRow: '3'
          },
          '@media (max-width: 320px) ': {
            height: '150px',
            maxWidth: '300px',
            gridColumn: 1,
            gridRow: '5',
            pr: isEnglish ? '10px' : '4px'
          }
        }}
      >
        <Typography variant="body1" color="primary.light">
          {t('services description.third.title')}
        </Typography>
        <Typography variant="body2" color="background.paper" sx={{ fontWeight: 400 }}>
          {t('services description.third.description')}
        </Typography>
      </Stack>

      <Stack
        sx={{
          gridColumn: '1',
          gridRow: '3',
          position: 'relative',
          bgcolor: 'transparent',
          maxWidth: '284px',
          width: '100%',
          height: '284px',
          border: '1px solid rgba(207, 215, 222, 1.0)',
          justifyContent: 'center',
          gap: '10px',
          px: '10px',
          '@media (max-width: 1280px) and (min-width: 993px)': {
            height: '250px',
            maxWidth: '250px'
          },
          '@media (max-width: 992px) and (min-width: 769px)': {
            height: '200px',
            maxWidth: '200px'
          },
          '@media (max-width: 768px) and (min-width: 481px)': {
            height: '236px',
            maxWidth: '236px'
          },
          '@media (max-width: 480px) and (min-width: 321px)': {
            height: '219px',
            maxWidth: '219px',
            gridColumn: '1',
            gridRow: '5',
            pr: isEnglish ? '7px' : '10px'
          },
          '@media (max-width: 320px) ': {
            height: '150px',
            maxWidth: '300px',
            gridColumn: 1,
            gridRow: '7',
            pr: isEnglish ? '10px' : '0px'
          }
        }}
      >
        <Typography variant="body1" color="text.primary">
          {t('services description.fourth.title')}
        </Typography>
        <Typography variant="body2" color="primary.main" sx={{ fontWeight: 400 }}>
          {t('services description.fourth.description')}
        </Typography>
      </Stack>

      <Box
        sx={{
          gridColumn: 'span 2',
          gridRow: '3',
          height: '284px',
          backgroundImage: `url(${servicesImageThree})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '@media (max-width: 1280px) and (min-width: 993px)': {
            height: '250px'
          },
          '@media (max-width: 992px) and (min-width: 769px)': {
            height: '200px'
          },
          '@media (max-width: 768px) and (min-width: 481px)': {
            height: '236px'
          },
          '@media (max-width: 480px) and (min-width: 321px)': {
            height: '219px',
            gridRow: '4'
          },
          '@media (max-width: 320px) ': {
            height: '150px',
            gridColumn: 1,
            gridRow: '6'
          }
        }}
      />

      <Stack
        sx={{
          gridColumn: 1,
          gridRow: '4',
          position: 'relative',
          bgcolor: 'text.secondary',
          maxWidth: '284px',
          width: '100%',
          height: '284px',
          border: '1px solid rgba(207, 215, 222, 1.0)',
          justifyContent: 'center',
          gap: '10px',
          px: '10px',
          '@media (max-width: 1280px) and (min-width: 993px)': {
            height: '250px',
            maxWidth: '250px'
          },
          '@media (max-width: 992px) and (min-width: 769px)': {
            height: '200px',
            maxWidth: '200px'
          },
          '@media (max-width: 768px) and (min-width: 481px)': {
            height: '236px',
            maxWidth: '236px'
          },
          '@media (max-width: 480px) and (min-width: 321px)': {
            height: '219px',
            maxWidth: '219px',
            gridColumn: '2',
            gridRow: '5',
            pr: isEnglish ? '10px' : '3px'
          },
          '@media (max-width: 320px) ': {
            height: '150px',
            maxWidth: '300px',
            gridColumn: 1,
            gridRow: '8',
            px: isEnglish ? '6px' : '10px'
          }
        }}
      >
        <Typography variant="body1" color="primary.light">
          {t('services description.fifth.title')}
        </Typography>
        <Typography variant="body2" color="background.paper" sx={{ fontWeight: 400 }}>
          {t('services description.fifth.description')}
        </Typography>
      </Stack>

      <Box
        sx={{
          gridColumn: 2,
          gridRow: '4',
          maxWidth: '284px',
          width: '100%',
          height: '284px',
          backgroundImage: isMobileP
            ? `url(${servicesImageFourMobileP})`
            : `url(${servicesImageFour})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '@media (max-width: 1280px) and (min-width: 993px)': {
            height: '250px',
            maxWidth: '250px'
          },
          '@media (max-width: 992px) and (min-width: 769px)': {
            height: '200px',
            maxWidth: '200px'
          },
          '@media (max-width: 768px) and (min-width: 481px)': {
            height: '236px',
            maxWidth: '236px'
          },
          '@media (max-width: 480px) and (min-width: 321px)': {
            height: '219px',
            maxWidth: '219px',
            gridColumn: '1',
            gridRow: '6'
          },
          '@media (max-width: 320px) ': {
            height: '150px',
            maxWidth: '300px',
            gridColumn: 1,
            gridRow: '9'
          }
        }}
      />

      <Stack
        sx={{
          gridColumn: 3,
          gridRow: '4',
          position: 'relative',
          bgcolor: 'transparent',
          maxWidth: '284px',
          width: '100%',
          height: '284px',
          border: '1px solid rgba(207, 215, 222, 1.0)',
          justifyContent: 'center',
          gap: '10px',
          px: '10px',
          '@media (max-width: 1280px) and (min-width: 993px)': {
            height: '250px',
            maxWidth: '250px',
            pr: isEnglish ? '10px' : '8px'
          },
          '@media (max-width: 992px) and (min-width: 769px)': {
            height: '200px',
            maxWidth: '200px'
          },
          '@media (max-width: 768px) and (min-width: 481px)': {
            height: '236px',
            maxWidth: '236px'
          },
          '@media (max-width: 480px) and (min-width: 321px)': {
            height: '219px',
            maxWidth: '219px',
            gridColumn: 'span 2',
            gridRow: '6'
          },
          '@media (max-width: 320px) ': {
            height: '150px',
            maxWidth: '300px',
            gridColumn: 1,
            gridRow: '10'
          }
        }}
      >
        <Typography variant="body1" color="text.primary">
          {t('services description.sixth.title')}
        </Typography>
        <Typography
          variant="body2"
          color="primary.main"
          sx={{
            fontWeight: 400
          }}
        >
          {t('services description.sixth.description')}
        </Typography>
      </Stack>
    </Grid2>
  )
}
