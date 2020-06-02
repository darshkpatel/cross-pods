import Head from 'next/head';
import { Box, Button } from 'grommet';
import { Github } from 'grommet-icons';

const LoginPage = (props) => (
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


      <Box
        pad="medium"
        alignContent="between"
        direction="row"
        basis="1/3"
      >

        <Box
          justify="center"
          height="100px"
          width="300px"
          alignSelf="center"
          align="center"
        >
          <Button
            size="small"
          >
            <Box pad="small" direction="row" align="center" gap="small" background="black">
              <Github />
              {' '}
              Login With Github
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>

  </>
);

export default LoginPage;
