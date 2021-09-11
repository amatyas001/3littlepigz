import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from 'lib/landing/modules/components/Typography';
import AppAppBar from 'lib/landing/modules/views/AppAppBar';
import AppFooter from 'lib/landing/modules/views/AppFooter';
import withRoot from 'lib/landing/modules/withRoot';

function Terms() {
  return (
    <>
      <AppAppBar />
      <Container>
        <Box sx={{ mt: 7, mb: 12 }}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Terms
          </Typography>
        </Box>
      </Container>
      <AppFooter />
    </>
  );
}

export default withRoot(Terms);
