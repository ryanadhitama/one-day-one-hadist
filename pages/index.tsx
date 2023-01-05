import Head from 'next/head';
import { Box, Footer, Hadist, Header } from '@components';
import { useHadist } from '@libs/hooks/useHadist';

export default function Home() {
  const data = useHadist();
  return (
    <>
      <Head>
        <title>Hadist of The Day</title>
        <meta name="description" content="Get hadist every day at this site" />
      </Head>
      <Box className="container home-container">
        <Header />
        <Hadist data={data} />
        <Footer />
      </Box>
    </>
  );
}
