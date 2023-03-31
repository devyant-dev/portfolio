import Layout from '@/component/Layout';
import '@/styles/globals.scss';
import Head from 'next/head';
import Link from 'next/link';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Generated by create next app; charSet=UTF-8" />
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href='/'>home</Link>
      <Link href='/profile'>profile</Link>
      <Link href='/work'>work</Link>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
