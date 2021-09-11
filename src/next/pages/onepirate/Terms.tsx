import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@op/modules/components/Typography';
import AppAppBar from '@op/modules/views/AppAppBar';
import AppFooter from '@op/modules/views/AppFooter';
import withRoot from '@op/modules/withRoot';

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
