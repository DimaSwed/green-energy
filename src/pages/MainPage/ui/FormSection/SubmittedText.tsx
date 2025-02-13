import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const SubmittedText = () => {
  const { t } = useTranslation()

  return (
    <Typography
      variant="h2"
      sx={{
        maxWidth: '565px',
        color: 'primary.light'
      }}
    >
      {t('form submitted text 1')} <br /> {t('form submitted text 2')}
    </Typography>
  )
}

export default SubmittedText
