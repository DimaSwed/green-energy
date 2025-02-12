import { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import BlackButton from '@/shared/ui/BlackButton'
import firstImage from '@/shared/assets/actionsection/image-box-1.png'
import secondImage from '@/shared/assets/actionsection/image-box-2.png'
import thirdImage from '@/shared/assets/actionsection/image-box-3.png'
export const ActionSection: FC = () => {
  const { t } = useTranslation()

  return (
    <Stack
      id="action-section"
      sx={{
        position: 'relative',
        maxWidth: '1440px',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        gap: '40px',
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
          padding: '60px 16px 60px 16px',
          gap: '30px'
        },
        '@media (max-width: 320px) ': {
          padding: '60px 10px 60px 10px',
          gap: '20px'
        }
      }}
    >
      <Stack>
        <Box display={'flex'} alignItems={'end'} justifyContent={'center'}>
          <Typography variant="h1" color="text.secondary" textTransform={'uppercase'}>
            {t('action title 1')}
          </Typography>
          &nbsp;&nbsp;
          <Box
            component={'img'}
            src={firstImage}
            sx={{
              maxWidth: '165px',
              width: '100%',
              height: '150px',
              mb: '12px',
              '@media (max-width: 1280px) and (min-width: 993px)': {
                maxWidth: '145px',
                height: '125px'
              },
              '@media (max-width: 992px) and (min-width: 769px)': {
                maxWidth: '116px',
                height: '100px'
              },
              '@media (max-width: 768px) and (min-width: 481px)': {
                maxWidth: '110px',
                height: '100px',
                mb: '6px'
              },
              '@media (max-width: 480px) and (min-width: 321px)': {
                maxWidth: '52px',
                height: '49px',
                mb: '4px'
              },
              '@media (max-width: 320px) ': {
                maxWidth: '35px',
                height: '33px',
                mb: '4px'
              }
            }}
          />
          <Typography variant="h1" color="text.secondary" textTransform={'uppercase'}>
            {t('action title 2')}
          </Typography>
        </Box>
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <Typography variant="h1" color="text.secondary" textTransform={'uppercase'}>
            {t('action title 3')}
          </Typography>
        </Box>
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <Typography variant="h1" color="text.secondary" textTransform={'uppercase'}>
            {t('action title 4')}&nbsp;
          </Typography>
          <Box
            component={'img'}
            src={secondImage}
            sx={{
              maxWidth: '184px',
              width: '100%',
              height: '63px',
              borderRadius: '143px',
              '@media (max-width: 1280px) and (min-width: 993px)': {
                maxWidth: '162px',
                height: '55px'
              },
              '@media (max-width: 992px) and (min-width: 769px)': {
                maxWidth: '130px',
                height: '44px',
                borderRadius: '100px'
              },
              '@media (max-width: 768px) and (min-width: 481px)': {
                maxWidth: '124px',
                height: '42px',
                borderRadius: '125px'
              },
              '@media (max-width: 480px) and (min-width: 321px)': {
                maxWidth: '60px',
                height: '21px',
                borderRadius: '46px'
              },
              '@media (max-width: 320px) ': {
                maxWidth: '40px',
                height: '14px',
                borderRadius: '31px'
              }
            }}
          />
          <Typography variant="h1" color="text.secondary" textTransform={'uppercase'}>
            &nbsp;{t('action title 5')}{' '}
          </Typography>
        </Box>
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <Typography variant="h1" color="text.secondary" textTransform={'uppercase'}>
            {t('action title 6')}{' '}
          </Typography>
        </Box>
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <Typography variant="h1" color="text.secondary" textTransform={'uppercase'}>
            {t('action title 7')}&nbsp;
          </Typography>
          <Box
            component={'img'}
            src={thirdImage}
            sx={{
              maxWidth: '184px',
              width: '100%',
              height: '63px',
              borderRadius: '143px',
              '@media (max-width: 1280px) and (min-width: 993px)': {
                maxWidth: '162px',
                height: '55px',
                borderRadius: '125px'
              },
              '@media (max-width: 992px) and (min-width: 769px)': {
                maxWidth: '130px',
                height: '44px',
                borderRadius: '100px'
              },
              '@media (max-width: 768px) and (min-width: 481px)': {
                maxWidth: '124px',
                height: '42px',
                borderRadius: '125px'
              },
              '@media (max-width: 480px) and (min-width: 321px)': {
                maxWidth: '60px',
                height: '21px',
                borderRadius: '46px'
              },
              '@media (max-width: 320px) ': {
                maxWidth: '40px',
                height: '14px',
                borderRadius: '31px'
              }
            }}
          />
          <Typography variant="h1" color="text.secondary" textTransform={'uppercase'}>
            &nbsp;{t('action title 8')}
          </Typography>
        </Box>
      </Stack>

      <BlackButton
        type="button"
        sx={{
          gap: '6px',
          maxWidth: '416px',
          '@media (max-width: 1280px) and (min-width: 993px)': {
            maxWidth: '360px'
          },
          '@media (max-width: 992px) and (min-width: 769px)': {
            maxWidth: '300px'
          },
          '@media (max-width: 768px) and (min-width: 481px)': {
            maxWidth: '100%'
          }
        }}
      >
        {t('action button')}
      </BlackButton>
    </Stack>
  )
}
