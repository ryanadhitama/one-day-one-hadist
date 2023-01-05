import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hadist of The Day</title>
        <meta name="description" content="Get your hadist every day from this site" />
      </Head>
      <h1 className="title">Hadist of The Day</h1>
    </>
  );
}
