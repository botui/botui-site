import '../styles/globals.css'
// import "@botui/react/default-theme"

import '../styles/homebot.scss'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
