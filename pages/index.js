import Head from 'next/head'
import Router from 'next/router'
import React, { useEffect } from "react";
export default function Index() {

  let isLoggedIn = true  // Temporary: Should Check Auth

  useEffect(() => {
    const {pathname} = Router
    if(pathname == '/' && !isLoggedIn ){
        Router.push('/login')
    }
    else{
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
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
