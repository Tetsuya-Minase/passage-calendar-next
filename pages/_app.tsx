import '../styles/globals.css';
import '../src/components/calendar/Calendar.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
