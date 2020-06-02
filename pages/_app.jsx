import '../components/styles/GlobalStyles.scss';
import { Grommet } from 'grommet';

const theme = {
  global: {
    font: {
      family: "'Roboto', sans-serif;",
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
    </>
  );
}
export default CustomApp;
