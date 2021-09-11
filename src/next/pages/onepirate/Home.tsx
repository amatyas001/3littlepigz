import ProductCategories from '@op/modules/views/ProductCategories';
import ProductSmokingHero from '@op/modules/views/ProductSmokingHero';
import AppFooter from '@op/modules/views/AppFooter';
import ProductHero from '@op/modules/views/ProductHero';
import ProductValues from '@op/modules/views/ProductValues';
import ProductHowItWorks from '@op/modules/views/ProductHowItWorks';
import ProductCTA from '@op/modules/views/ProductCTA';
import AppAppBar from '@op/modules/views/AppAppBar';
import withRoot from '@op/modules/withRoot';
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
