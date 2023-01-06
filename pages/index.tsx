import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Box, Footer, Hadist, Header } from '@components';
import { useHadist } from '@libs/hooks/useHadist';

export default function Home() {
  const data = useHadist();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <>
      <Head>
        <title>Hadist of The Day</title>
        <meta name="description" content="Get hadist every day at this site" />
      </Head>
      <Box className="container home-container">
        <Header />
        {hydrated && data?.id ? <Hadist data={data} /> : 'Loading...'}
        <Footer />
      </Box>
    </>
  );
}
