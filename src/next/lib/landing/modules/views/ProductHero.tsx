import { useContext } from 'react';
import { AppContext } from 'pages/index';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
  'https://images.unsplash.com/photo-1615392030676-6c532fe0c302?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';

export default function ProductHero() {
  const {
    app: { content },
  } = useContext(AppContext);
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
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
}
