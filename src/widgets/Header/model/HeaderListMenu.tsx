import React, { FC } from 'react'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

interface HeaderListMenuProps {
  customStyles?: React.CSSProperties
  onClick?: () => void
}

export const HeaderListMenu: FC<HeaderListMenuProps> = ({ customStyles, onClick }) => {
  const { t } = useTranslation()

  const sections: { name: string; id: string }[] = [
    { name: t('about'), id: 'about-section' },
    { name: t('why'), id: 'why-section' },
    { name: t('services'), id: 'services-section' },
    { name: t('contacts'), id: 'contacts-section' }
  ]

  return (
    <>
      {sections.map((section) => (
        <Typography
          key={section.name}
          component="a"
          onClick={onClick}
          href={`#${section.id}`}
          variant="body2"
          sx={{
            cursor: 'pointer',
            color: 'divider',
            transition: 'color 0.2s ease-in-out',
            borderBottom: '1px solid transparent',
            '&:hover': {
              color: 'text.secondary',
              borderBottom: '1px solid #2a6ca0'
            },
            '@media (max-width:768px)': {
              fontSize: '38px'
            },
            '@media (max-width:320px)': {
              fontSize: '34px'
            },
            ...customStyles
          }}
        >
          {section.name}
        </Typography>
      ))}
    </>
  )
}
