import Head from 'next/head';
import {
  Box, Button, Grid, Heading, Text,
} from 'grommet';
import { Github } from 'grommet-icons';
import React, { useEffect } from 'react';
import axios from 'axios';
import auth0 from '../utils/auth';


// To check if login flow actually completed
const checkLoggedIn = async () => {
  const client = axios.create();
  client.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        console.log('Not logged in yet');
        // ToDo: Add error popup
      }

      return Promise.reject(error);
    },
  );
  try {
    await client.get('/api/me');
    return true;
  } catch (err) {
    return false;
  }
};

const LoginPage = () => {
  useEffect(() => {
    window.addEventListener('focus', async (ev) => {
      ev.preventDefault();
      if (await checkLoggedIn()) {
        window.open('/discover', '_self');
      }
    });
  });
  return (
    <>
      <Head>
        <title>Cross Pods | Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        direction="row"
        background={{ image: 'url(/cross-pod-bg.png)' }}
        fill
      >
        <Grid
          fill
          columns={['1/4', '3/4']}
          rows={['1/3', '1/3', '1/3']}
          gap="small"
          areas={[
            ['left-top', 'right'],
            ['left-mid', 'right'],
            ['left-bottom', 'right'],
          ]}
        >
          <Box alignSelf="end" alignContent="center">
            <Heading margin={{ bottom: 'xsmall' }}>Cross Pods</Heading>
            <Text>The final piece to the MLH Fellowship experience.</Text>
            <br />
            <Button target="_blank" href="/api/login">
              <Box
                round="xsmall"
                pad="small"
                direction="row"
                align="center"
                gap="small"
                background="black"
                width={{ max: '225px' }}
              >
                <Github />
                Login with GitHub
              </Box>
            </Button>
          </Box>
        </Grid>
      </Box>
    </>
  );
};


LoginPage.getInitialProps = async ({ req, res }) => {
  if (typeof window === 'undefined') {
    const session = await auth0.getSession(req);
    if (!session || !session.user) {
      return { user: null };
    }
    // If Logged in, redirect to discover
    res.writeHead(302, {
      Location: '/discover',
    });
    res.end();
  }
  return '';
};

export default LoginPage;
