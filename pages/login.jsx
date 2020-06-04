import Head from 'next/head';
import {
  Box, Button, Grid, Heading, Text,
} from 'grommet';
import { Github } from 'grommet-icons';

const LoginPage = () => (
  <>
    <Head>
      <title>Cross Pods Login</title>
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

        <Box gridArea="left-top" direction="row">
          <Box alignSelf="end" alignContent="center">
            <Heading textAlign="center" margin={{ bottom: 'xsmall' }}>Cross Pods</Heading>
            <Text textAlign="center">Final Piece To The MLH Fellowship Experience </Text>
          </Box>
        </Box>

        {/* left side , middle box in grid */}
        <Box gridArea="left-mid" direction="row">
          {/* Github Login Button */}

          <Box
            justify="center"
            height="100px"
            width="400px"
            alignSelf="start"
            align="center"
          >
            <Button size="small" target="_blank" href="/api/login">
              <Box pad="small" direction="row" align="center" gap="small" background="black">
                <Github />
                {' '}
                Login With Github
              </Box>
            </Button>
          </Box>
        </Box>
      </Grid>

    </Box>

  </>
);

export default LoginPage;
