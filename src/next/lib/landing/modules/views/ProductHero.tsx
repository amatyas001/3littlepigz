import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const ProductHero: FunctionComponent = () => {
  const content = useSelector((state: RootState) => state.content.home);

  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${content.HeroBackground.url})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      <Typography color="inherit" align="center" variant="h2" marked="center">
        {content.Title}
      </Typography>
      <Typography color="inherit" align="center" variant="h5" sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}>
        {content.SubTitle}
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/sign-up"
        sx={{ minWidth: 200 }}
      >
        Join
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Imagine here some clever quote about astrophysics
      </Typography>
    </ProductHeroLayout>
  );
};

export default ProductHero;
