import { AppType } from 'next/dist/shared/lib/utils';

const App: AppType = ({ Component, pageProps }) => {
  /* eslint-disable react/jsx-props-no-spreading */
  return <Component {...pageProps} />;
  /* eslint-enable react/jsx-props-no-spreading */
};

export default App;
