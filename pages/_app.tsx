import Script from 'next/script'
import '../styles/globals.css'
// import "@botui/react/default-theme"

import '../styles/homebot.scss'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy='afterInteractive'
        src='https://www.googletagmanager.com/gtag/js?id=G-587LLC14KB'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-587LLC14KB');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
