import Head from 'next/head';
import Router from 'next/router';
import React from 'react';
import { useFetchUser } from '../utils/user';


const Redirect = (props) => {
  Router.push(props.url);
  return 'Redirecting';
};

export default function Index() {
  const { user, loading } = useFetchUser();

  return (
    <div className="container">
      <Head>
        <title>Cross Pods</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>
          You will soon be Redirected
          { !loading && user ? <Redirect url="/discover" /> : '' }
          { !loading && !user ? <Redirect url="/login" /> : '' }
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
