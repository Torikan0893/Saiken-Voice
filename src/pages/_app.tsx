import type { AppProps } from 'next/app';
import '../App.css';
import '../styles/header.css';
import '../styles/footer.css';
import '../styles/index.scss';
import '../styles/about.scss';
import '../styles/cast.scss';
import '../styles/kowairo_info.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}