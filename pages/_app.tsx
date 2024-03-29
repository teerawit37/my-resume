import '../styles/scss/main.scss';
import '@farfetch/react-carousel/styles.css'
import type { AppProps } from 'next/app'
import { Footer } from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
