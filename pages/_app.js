import { AuthProvider } from '@/lib/auth'
import { ThemeProvider, CSSReset } from '@chakra-ui/react'

import customTheme from '@/styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <AuthProvider>
        <CSSReset />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp
