import axios from 'axios';
import ProductCategories from 'lib/landing/modules/views/ProductCategories';
import ProductSmokingHero from 'lib/landing/modules/views/ProductSmokingHero';
import AppFooter from 'lib/landing/modules/views/AppFooter';
import ProductHero from 'lib/landing/modules/views/ProductHero';
import ProductValues from 'lib/landing/modules/views/ProductValues';
import ProductHowItWorks from 'lib/landing/modules/views/ProductHowItWorks';
import ProductCTA from 'lib/landing/modules/views/ProductCTA';
import AppAppBar from 'lib/landing/modules/views/AppAppBar';
import withRoot from 'lib/landing/modules/withRoot';
import { NextPage } from 'next';
import { createContext } from 'react';

type TAppContent = {
  Title: string;
  SubTitle: string;
};

type TAppContext = {
  app: {
    content: TAppContent;
    error: string;
  };
};

type TProps = { content: TAppContent; error: string };

const initialState: TAppContext = { app: { content: Object.create(null), error: '' } };

export const AppContext = createContext<TAppContext>(initialState);

const Index: NextPage<TProps> = ({ content, error }) => {
  const context = {
    app: { content, error },
  };

  return (
    <AppContext.Provider value={context}>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </AppContext.Provider>
  );
};

export async function getServerSideProps() {
  const CMS_URL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:1337'
      : 'https://the-pet-project.herokuapp.com';
  const result = await axios.get<TAppContent>(`${CMS_URL}/app-details`);
  const error = (result.status !== 200 && result.statusText) || '';

  return {
    props: { content: { ...(result.data ?? Object.create(null)) }, error },
  };
}

export default withRoot(Index);
