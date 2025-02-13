declare module 'react-number-format' {
  import * as React from 'react'
  import { TextFieldProps } from '@mui/material/TextField'

  export interface NumberFormatValues {
    value: string
    formattedValue: string
    floatValue: number | string
  }

  // Преобразуем NumberFormatProps, чтобы он корректно включал все свойства TextFieldProps
  export interface NumberFormatProps extends Omit<TextFieldProps, 'onChange'> {
    format: string
    value: string
    onValueChange: (values: NumberFormatValues) => void
    customInput?: React.ComponentType<any>
    mask?: string | boolean
  }

  const NumberFormat: React.FC<NumberFormatProps>

  export default NumberFormat
}
