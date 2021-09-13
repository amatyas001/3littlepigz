import Link from 'next/link';
import Box from '@mui/material/Box';
import MaterialLink from '@mui/material/Link';
import { useSelector } from 'react-redux';
import { FunctionComponent } from 'react';
import AppBar from 'lib/landing/modules/components/AppBar';
import Toolbar from 'lib/landing/modules//components/Toolbar';

const rightMaterialLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

const AppAppBar: FunctionComponent = () => {
  const content = useSelector((state: RootState) => state.content.home);

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link href="/" passHref>
            <MaterialLink
              variant="h6"
              underline="none"
              color="inherit"
              sx={{ fontSize: 24, textTransform: 'none', letterSpacing: '0.3rem' }}
            >
              {content.Title}
            </MaterialLink>
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link href="/sign-in" passHref>
              <MaterialLink
                color="inherit"
                variant="h6"
                underline="none"
                href="/premium-themes/onepirate/sign-in/"
                sx={rightMaterialLink}
              >
                {'Sign In'}
              </MaterialLink>
            </Link>
            <Link href="/sign-up" passHref>
              <MaterialLink
                variant="h6"
                underline="none"
                sx={{ ...rightMaterialLink, color: 'secondary.main' }}
              >
                {'Sign Up'}
              </MaterialLink>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default AppAppBar;
