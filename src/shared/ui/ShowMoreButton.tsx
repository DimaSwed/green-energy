import { FC } from 'react'
import { Box } from '@mui/material'
import { styled } from '@mui/system'
import iconArrowUp from '@/shared/assets/icons/icon-arrow-up.svg'
import iconArrowDown from '@/shared/assets/icons/icon-arrow-down.svg'

export const ShowMoreButton = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '42px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '6px',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: '1px solid rgba(42, 108, 160, 1.0)',
  color: theme.palette.text.secondary,
  fontFamily: 'Open Sans, sans-serif',
  fontSize: '16px',
  fontWeight: 500,
  fontStyle: 'normal',
  borderRadius: '100px',
  outline: 'none'
}))

const ArrowIcon = styled('img')(() => ({
  width: '15px',
  height: '15px'
}))

interface ShowMoreProps {
  isExpanded: boolean
  onClick: () => void
  text: string
}

const ShowMore: FC<ShowMoreProps> = ({ isExpanded, onClick, text }) => {
  return (
    <ShowMoreButton onClick={onClick}>
      {text}
      <ArrowIcon src={isExpanded ? iconArrowUp : iconArrowDown} alt="Arrow Icon" />
    </ShowMoreButton>
  )
}

export default ShowMore
