import ProductCategories from 'lib/landing/modules/views/ProductCategories';
import ProductSmokingHero from 'lib/landing/modules/views/ProductSmokingHero';
import AppFooter from 'lib/landing/modules/views/AppFooter';
import ProductHero from 'lib/landing/modules/views/ProductHero';
import ProductValues from 'lib/landing/modules/views/ProductValues';
import ProductHowItWorks from 'lib/landing/modules/views/ProductHowItWorks';
import ProductCTA from 'lib/landing/modules/views/ProductCTA';
import AppAppBar from 'lib/landing/modules/views/AppAppBar';
import withRoot from 'lib/landing/modules/withRoot';
import { GetServerSideProps, NextPage } from 'next';
import { createContext } from 'react';
import client from 'lib/utils/apollo';
import { gql } from '@apollo/client';

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

const Index: NextPage<TProps> = () => {
  return (
    <>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const query = gql`
    query getHomeContent {
      appDetail {
        id
        Title
        SubTitle
        HeroBackground {
          id
          url
        }
      }
    }
  `;
  const { data } = await client.query({ query });
  return {
    props: { initialState: { content: { home: data.appDetail } } },
  };
};

export default withRoot(Index);
