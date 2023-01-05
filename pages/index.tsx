import Head from 'next/head';
import { Box, Footer, Header } from '@components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hadist of The Day</title>
        <meta name="description" content="Get hadist every day at this site" />
      </Head>
      <Box className="container home-container">
        <Header />
        <Footer />
      </Box>
    </>
  );
}
