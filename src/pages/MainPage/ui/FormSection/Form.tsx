import { FC, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Typography, Box, TextField, Backdrop, CircularProgress, Stack } from '@mui/material'
import { formValidationSchema } from '@/shared/lib/formValidationSchema'
import { IEmailRequestBody } from '@/app/types/form.types'
import BlackButton from '@/shared/ui/BlackButton'
import SubmittedText from './SubmittedText'
import { useTranslation } from 'react-i18next'
import { yupResolver } from '@hookform/resolvers/yup'

const inputStyles = (hasError: boolean) => ({
  width: '100%',
  '& .MuiInputBase-root': {
    color: '#f2f2f2',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: '130%',
    fontSize: '16px',
    borderRadius: '0px',

    '&:before': { borderColor: '#888', color: '#f2f2f2' },
    '&:after': { borderColor: '#fff' },
    ':hover:not(.Mui-focused)': {
      '&:before': {
        borderColor: '#fff',
        borderWidth: '1px'
      }
    },
    '&::placeholder': {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '16px',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '130%',
      textTransform: 'uppercase',
      color: '#f2f2f2',
      opacity: 1
    }
  },

  '& .MuiOutlinedInput-root': {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: '130%',
    fontSize: '16px',
    transition: 'border 0.4s ease',
    color: '#f2f2f2',
    height: '53px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: hasError ? 'error.main' : 'rgba(255, 255, 255, 0.2)',

    '& fieldset': {
      borderColor: hasError ? 'error.main' : 'rgba(255, 255, 255, 0.2)',
      transition: 'border 0.4s ease'
    },

    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 1.0)'
    },

    '&.Mui-focused fieldset': {
      borderColor: 'rgba(255, 255, 255, 1.0)',
      borderWidth: '2px'
    }
  },

  '& .MuiInputBase-input::placeholder': {
    paddingLeft: '10px',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: '130%',
    color: '#fff',
    textTransform: 'uppercase',
    opacity: 1
  }
})

// const formatPhoneNumber = (value: string) => {
//   return value
//     .replace(/\D/g, '') // Remove all non-digit characters
//     .replace(/^(\d{2})(\d{2})(\d{4})(\d{4})$/, '+39 ($1) $2-$3-$4')
// }

const Form: FC = () => {
  const { t } = useTranslation()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submissionError, setSubmissionError] = useState<string | null>(null)

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IEmailRequestBody>({
    defaultValues: {
      name: '',
      telephone: '',
      mail: '',
      message: ''
    },
    resolver: yupResolver(formValidationSchema(t))
  })

  const onSubmit = async (values: IEmailRequestBody) => {
    try {
      setIsSubmitting(true)
      const endpoint = 'http://localhost:1234/send-email'
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...values })
      })

      if (response.ok) {
        localStorage.setItem('userData', JSON.stringify(values))
        reset()
        setIsSubmitted(true)
      } else {
        const errorData = await response.json()
        setSubmissionError(errorData.message || t('form error text'))
      }
    } catch (error) {
      setSubmissionError(t('form error text'))
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Stack
          sx={{
            maxWidth: '892px',
            width: '100%'
          }}
        >
          {isSubmitted ? (
            <Box sx={{}}>
              <SubmittedText />
            </Box>
          ) : (
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              display="flex"
              flexDirection="column"
              gap="20px"
            >
              {/* Name Field */}
              <Stack>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      placeholder={t('form input name')}
                      variant="standard"
                      sx={inputStyles(!!errors.name)}
                    />
                  )}
                />
                {errors.name && (
                  <Typography color="error.main" fontSize="12px" sx={{ mt: '5px' }}>
                    {errors.name.message}
                  </Typography>
                )}
              </Stack>

              {/* Email Field */}
              <Stack>
                <Controller
                  name="mail"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      placeholder={t('form input email')}
                      variant="standard"
                      sx={inputStyles(!!errors.mail)}
                    />
                  )}
                />
                {errors.mail && (
                  <Typography color="error.main" fontSize="12px" sx={{ mt: '5px' }}>
                    {errors.mail.message}
                  </Typography>
                )}
              </Stack>

              {/* Phone Number Field */}
              <Stack>
                <Controller
                  name="telephone"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      // value={formatPhoneNumber(field.value || '')}
                      value={field.value || ''}
                      onChange={(e) => field.onChange(e.target.value)}
                      placeholder={t('form input telephone')}
                      variant="standard"
                      sx={inputStyles(!!errors.telephone)}
                    />
                  )}
                />
                {errors.telephone && (
                  <Typography color="error.main" fontSize="12px" sx={{ mt: '5px' }}>
                    {errors.telephone.message}
                  </Typography>
                )}
              </Stack>

              {/* Message Field */}
              <Stack>
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      placeholder={t('form input message')}
                      variant="standard"
                      multiline
                      rows={4}
                      sx={inputStyles(!!errors.message)}
                    />
                  )}
                />
                {errors.message && (
                  <Typography color="error.main" fontSize="12px" sx={{ mt: '5px' }}>
                    {errors.message.message}
                  </Typography>
                )}
              </Stack>

              {submissionError && (
                <Typography
                  sx={{
                    fontFamily: 'Open Sans, Sans-serif',
                    fontSize: '18px',
                    fontWeight: '600',
                    fontStyle: 'normal',
                    lineHeight: '120%',
                    color: 'primary.light'
                  }}
                >
                  {submissionError}
                </Typography>
              )}

              <BlackButton
                type="submit"
                disabled={isSubmitting || Object.keys(errors).length > 0}
                iconColor={
                  isSubmitting || Object.keys(errors).length > 0 ? '#C3C3C3' : 'primary.light'
                }
                sx={{
                  maxWidth: '892px',
                  gap: '10px',
                  backgroundColor: 'primary.light',
                  color: '#262626',
                  transition: 'background-color 0.2s, color 0.2s',
                  '&:hover': {
                    backgroundColor: 'text.secondary',
                    color: 'primary.light'
                  }
                }}
              >
                {isSubmitting ? t('form submitting text') : t('form submit text')}
              </BlackButton>
            </Box>
          )}
        </Stack>
      </Box>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isSubmitting}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  )
}

export default Form
