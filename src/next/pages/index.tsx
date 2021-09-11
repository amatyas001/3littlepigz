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

const Index: NextPage = () => {
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

export default withRoot(Index);
