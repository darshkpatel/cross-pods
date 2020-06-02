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
      // Redirect to Dashboard
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
    </div>
  );
}
