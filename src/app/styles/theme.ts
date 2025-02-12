import { createTheme, ThemeOptions } from '@mui/material/styles'

const commonSettings: ThemeOptions = {
  breakpoints: { values: { xs: 320, sm: 480, md: 992, lg: 1280, xl: 1440 } }
}

const lightTheme = createTheme({
  ...commonSettings,
  typography: {
    fontFamily: 'Roboto, sans-serif',
    allVariants: {
      color: 'text.primary'
    },
    body1: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 600,
      fontSize: '18px',
      lineHeight: '127%',
      transition: 'font-size 2s ease'
      // '@media (max-width:992px)': { fontSize: '20px' }
    },
    body2: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '16px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '110%'
    },
    button: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '110%',
      fontStyle: 'normal',
      textAlign: 'center',
      cursor: 'pointer',
      textTransform: 'inherit',
      transition: 'font-size 2s ease'
      // '@media (max-width:768px)': { fontSize: '34px' },
      // '@media (max-width:320px)': { fontSize: '28px' }
    },
    subtitle1: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '20px',
      fontWeight: '500',
      fontStyle: 'normal',
      lineHeight: '115%',
      transition: 'font-size 2s ease'
      // '@media (max-width:320px)': { fontSize: '14px' }
    },
    subtitle2: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '120%',
      transition: 'font-size 2s ease'
      // '@media (max-width:1440px)': { fontSize: '13px' },
      // '@media (max-width:720px)': { fontSize: '12px' }
    },
    h1: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '82px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '100%',
      textTransform: 'none',
      transition: 'font-size 2s ease',
      '@media (max-width:1280px)': { fontSize: '72px' },
      '@media (max-width:992px)': { fontSize: '58px' },
      '@media (max-width:768px)': { fontSize: '44px' },
      '@media (max-width:480px)': { fontSize: '26px' },
      '@media (max-width:320px)': { fontSize: '18px' }
    },
    h2: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '58px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '100%',
      textTransform: 'none',
      transition: 'font-size 2s ease',
      '@media (max-width:768px)': { fontSize: '46px' },
      '@media (max-width:480px)': { fontSize: '28px' },
      '@media (max-width:320px)': { fontSize: '22px' }
    },
    h3: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '38px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '110%',
      letterSpacing: '-0.06em',
      textTransform: 'none',
      transition: 'font-size 2s ease'
      // '@media (max-width: 768px)': {
      //   fontSize: '32px'
      // },
      // '@media (max-width: 480px)': {
      //   fontSize: '26px',
      //   letterSpacing: -2
      // }
    },
    h4: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '32px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '110%',
      textTransform: 'none',
      transition: 'font-size 2s ease',
      '@media (max-width: 480px)': {
        fontSize: '22px'
      }
    },
    h5: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '22px',
      fontWeight: 700,
      fontStyle: 'normal',
      textTransform: 'uppercase',
      lineHeight: '120%',
      transition: 'font-size 2s ease'
    }
  },

  palette: {
    mode: 'light',
    primary: {
      dark: '#949494',
      main: '#888', // Серый (grey) +
      light: '#fff' // Белый (white) +
    },
    secondary: {
      main: '#10466d' // Темно-синий (dark-blue) +
    },
    background: {
      default: '#e4e9ec', // Фоновый цвет (bg) +
      paper: '#cfd7de' // light-grey
    },
    text: {
      primary: '#1c1c1c', // Текст основной (black) +
      secondary: '#2a6ca0' // Голубой (blue) +
    },
    success: {
      main: '#f2f2f2' // Светло-серый (light-grey) +
    },
    error: {
      main: '#FF0004' // Ошибка (red) +
    },
    divider: '#515151' // dark-grey
  }
})

export { lightTheme }
