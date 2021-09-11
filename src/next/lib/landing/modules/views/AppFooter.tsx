// import Image from 'next/image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import Typography from '../components/Typography';
// import TextField from '../components/TextField';

function Copyright() {
  return (
    <>
      {'© '}
      <Link color="inherit" href="https://material-ui.com/">
        A Pet Project
      </Link>{' '}
      {new Date().getFullYear()}
    </>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'warning.main',
  mr: 1,
  '&:hover': {
    bgcolor: 'warning.dark',
  },
};

/*
const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'fr-FR',
    name: 'Français',
  },
];
*/

export default function AppFooter() {
  return (
    <Typography component="footer" sx={{ display: 'flex', bgcolor: 'secondary.light' }}>
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: 'flex' }}>
                <Box component="div" sx={iconStyle}>
                  <FacebookIcon width="100%" height="100%" />
                </Box>
                <Box component="div" sx={iconStyle}>
                  <TwitterIcon width="100%" height="100%" />
                </Box>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/terms">Terms</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/privacy">Privacy</Link>
              </Box>
            </Box>
          </Grid>
          {/*
          <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Language
            </Typography>
            <TextField
              select
              size="medium"
              variant="standard"
              SelectProps={{
                native: true,
              }}
              sx={{ mt: 1, width: 150 }}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>
          */}
        </Grid>
      </Container>
    </Typography>
  );
}
