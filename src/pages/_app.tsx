import { AppProps } from 'next/app'
import withApollo from '@/lib/with-apollo'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const MyComponent = withApollo(Component)
  return (
    <ThemeProvider theme={theme}>
      <MyComponent {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
