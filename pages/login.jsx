import Head from 'next/head';
import {
  Box, Button, Grid, Heading, Text,
} from 'grommet';
import { Github } from 'grommet-icons';

const LoginPage = () => (
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
        <Box
          pad={{ left: 'large' }}
          gridArea="left-mid"
          direction="column"
          justify="center"
        >
          <Box alignSelf="end" alignContent="center">
            <Heading textAlign="left" margin={{ bottom: 'xsmall' }}>Cross Pods</Heading>
            <Text textAlign="left">The final piece to the MLH Fellowship experience.</Text>
            <br />
            <Button>
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
        </Box>
      </Grid>
    </Box>
  </>
);

export default LoginPage;
