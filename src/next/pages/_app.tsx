import { AppType } from 'next/dist/shared/lib/utils';
import { Provider } from 'react-redux';
import { store } from 'lib/store';
import client from 'lib/utils/apollo';
import { ApolloProvider } from '@apollo/client';

const App: AppType = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store(pageProps?.initialState ?? undefined)}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
};

export default App;
