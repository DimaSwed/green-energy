import * as Yup from 'yup'

export const formValidationSchema = (t: (key: string) => string) =>
  Yup.object({
    name: Yup.string()
      .required(t('validation.name.required'))
      .min(2, t('validation.name.min'))
      .matches(/^[A-Za-z\s\-]+$/, t('validation.name.matches')),

    telephone: Yup.string()
      .required(t('validation.telephone.required'))
      .matches(/^[0-9]+$/, t('validation.telephone.numbers')),
    // .matches(/^\+39 $$\d{2}$$ \d{8}$/, t('validation.telephone.matches')),

    mail: Yup.string()
      .email(t('validation.mail.email'))
      .matches(/.*\..*/, t('validation.mail.matches'))
      .required(t('validation.mail.required'))
      .min(8, t('validation.mail.min'))
      .max(64, t('validation.mail.max')),

    message: Yup.string()
      .required(t('validation.message.required'))
      .min(10, t('validation.message.min'))
  })
