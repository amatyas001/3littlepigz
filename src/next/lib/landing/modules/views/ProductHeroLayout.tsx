import { Theme, styled } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreOutlined';

const ProductHeroLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    height: '80vh',
    minHeight: 500,
    maxHeight: 1300,
  },
}));

const Background = styled(Box)(() => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: -2,
}));

const MoreButton = styled(ExpandMoreRoundedIcon)(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'absolute',
  bottom: '35px',
  minWidth: '4rem',
})) as unknown as typeof ExpandMoreRoundedIcon;

interface ProductHeroLayoutProps {
  sxBackground: SxProps<Theme>;
}

export default function ProductHeroLayout(
  props: React.HTMLAttributes<HTMLDivElement> & ProductHeroLayoutProps
) {
  const { sxBackground, children } = props;

  return (
    <ProductHeroLayoutRoot>
      <Container
        sx={{
          mt: 3,
          mb: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {children}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: 'common.black',
            opacity: 0.5,
            zIndex: -1,
          }}
        />
        <Background sx={sxBackground} />
        <MoreButton viewBox="0 0 20 25" />
      </Container>
    </ProductHeroLayoutRoot>
  );
}
