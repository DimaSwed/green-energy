import React, { FC } from 'react'
import { Typography } from '@mui/material'
import { Box, Stack, styled } from '@mui/system'
import dotsIcon from '@/shared/assets/icons/dots.svg'

const ShowMoreButton = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px',
  color: theme.palette.text.primary,
  fontFamily: 'Roboto, sans-serif',
  borderRadius: '0px',
  backgroundColor: 'transparent',
  '@media (max-width: 320px)': {
    padding: '10px'
  }
}))

const ArrowIcon = styled('img')(() => ({
  cursor: 'pointer',
  width: '32px',
  height: '32px'
}))

interface ShowMoreProps {
  isExpanded: boolean
  onClick: () => void
  id: string
  title: string
  description: string
  caption: string[]
}

const ShowMoreProducts: FC<ShowMoreProps> = ({
  isExpanded,
  onClick,
  id,
  title,
  description,
  caption
}) => {
  return (
    <ShowMoreButton
      sx={{
        height: isExpanded ? '187px' : 'auto',
        '@media (max-width:768px)': {
          height: isExpanded ? '225px' : 'auto',
          flexDirection: 'column',
          gap: '15px'
        },
        '@media (max-width:480px)': {
          height: isExpanded ? 'fit-content' : 'auto'
        }
      }}
    >
      <Box
        sx={{
          flex: '1 1 10%'
        }}
      >
        <Box
          sx={{
            maxWidth: '396px',
            width: '100%'
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: 'secondary.main'
            }}
          >
            {id}
          </Typography>
        </Box>
      </Box>

      <Stack
        sx={{
          flex: '1 1 40%',
          display: 'flex',
          position: 'relative',
          gap: '10px',
          '@media (max-width:768px)': { flex: 90 }
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: 'text.primary'
          }}
        >
          {title}
        </Typography>
        {isExpanded && (
          <Stack
            sx={{
              gap: '10px'
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'primary.main',
                maxWidth: '510px',
                width: '100%',
                fontWeight: '400',
                lineHeight: '130%',
                '@media (max-width: 320px)': {
                  maxWidth: '238px'
                }
              }}
            >
              {description}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                '@media (max-width: 320px)': {
                  maxWidth: '270px',
                  flexWrap: 'wrap',
                  gap: '10px'
                }
              }}
            >
              {caption.map((text, index) => (
                <React.Fragment key={index}>
                  <Typography variant="subtitle2" color="text.secondary">
                    {text}
                  </Typography>
                  {index < caption.length - 1 && (
                    <Typography variant="subtitle2" color="text.secondary">
                      &nbsp;/&nbsp;
                    </Typography>
                  )}
                </React.Fragment>
              ))}
            </Box>
          </Stack>
        )}
      </Stack>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: '20px',
          top: '20px',
          '@media (max-width: 320px)': {
            right: '10px',
            top: '10px'
          }
        }}
      >
        <ArrowIcon onClick={onClick} src={dotsIcon} alt="dots icon" />
      </Box>
    </ShowMoreButton>
  )
}

export default ShowMoreProducts
