import Head from 'next/head';
import auth0 from '../utils/auth';


const Index = () => (
  <div className="container">
    <Head>
      <title>Cross Pods</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <h2>
        You will soon be Redirected
      </h2>
    </main>
    <style jsx>
      {`
      .container {
           min-height: 100vh;
           padding: 0 0.5rem;
           display: flex;
           flex-direction: column;
           justify-content: center;
           align-items: center;
         }`}
    </style>
  </div>
);


Index.getInitialProps = async ({ req, res }) => {
  if (typeof window === 'undefined') {
    const session = await auth0.getSession(req);
    if (!session || !session.user) {
      res.writeHead(302, {
        Location: '/login',
      });
      res.end();
      return;
    }
    // If Logged in, redirect to discover
    res.writeHead(302, {
      Location: '/discover',
    });
    res.end();
  }
  return;
};

export default Index;
