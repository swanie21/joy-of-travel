import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>World Adventurer</title>
        <meta name="description" content="The joy of traveling as a world adventurer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome</h1>
      </main>
    </div>
  );
};

export default Home;
