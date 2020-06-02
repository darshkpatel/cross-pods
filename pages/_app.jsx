import '../components/styles/GlobalStyles.scss';
import { Grommet } from 'grommet';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Grommet
        theme={theme}
        full
      >
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </Grommet>
      <style jsx global>
        {`
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
       `}
      </style>
    </>
  );
}
export default CustomApp;
