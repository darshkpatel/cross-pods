import Head from 'next/head';
import Router from 'next/router';
import React, { useEffect } from 'react';

export default function Index() {
  const isLoggedIn = false; // Temporary: Should Check Auth

  useEffect(() => {
    const { pathname } = Router;
    if (pathname === '/' && !isLoggedIn) {
      Router.push('/login');
    } else {
      Router.push('/discover');
    }
  });

  return (
    <div className="container">
      <Head>
        <title>Cross Pods</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>
          You Should Be Redirected Soon
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
}
