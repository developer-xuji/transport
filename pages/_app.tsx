import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "./components/Header";
import styles from "../styles/Home.module.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tieyi</title>
        <meta name="description" content="Tieyi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.pageArea}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp
