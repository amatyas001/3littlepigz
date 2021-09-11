import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Field, Form, FormSpy } from 'react-final-form';
import Typography from '@op/modules/components/Typography';
import AppFooter from '@op/modules/views/AppFooter';
import AppAppBar from '@op/modules/views/AppAppBar';
import AppForm from '@op/modules/views/AppForm';
import { email as validateEmail, required as validateRequired } from '@op/modules/form/validation';
import RFTextField from '@op/modules/form/RFTextField';
import FormButton from '@op/modules/form/FormButton';
import FormFeedback from '@op/modules/form/FormFeedback';
import withRoot from '@op/modules/withRoot';
import { useState } from 'react';

function SignUp() {
  const [sent, setSent] = useState(false);

  const validate = (values: { [index: string]: string }) => {
    const errors = validateRequired(['firstName', 'lastName', 'email', 'password'], values);
    const email = values['email']?.toString() ?? '';

    if (!errors.email) {
      const emailError = validateEmail(email);
      if (emailError) {
        errors.email = emailError;
      }
    }

    return errors;
  };

  const handleSubmit = () => {
    setSent(true);
  };

  return (
    <>
      <AppAppBar />
      <AppForm>
        <>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign Up
          </Typography>
          <Typography variant="body2" align="center">
            <Link href="/premium-themes/onepirate/sign-in/" underline="always">
              Already have an account?
            </Link>
          </Typography>
        </>
        <Form onSubmit={handleSubmit} subscription={{ submitting: true }} validate={validate}>
          {({ handleSubmit: handleSubmit2, form: { getState } }) => (
            <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    autoFocus
                    component={RFTextField}
                    disabled={getState().submitting || sent}
                    autoComplete="fname"
                    fullWidth
                    label="First name"
                    name="firstName"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    component={RFTextField}
                    disabled={getState().submitting || sent}
                    autoComplete="lname"
                    fullWidth
                    label="Last name"
                    name="lastName"
                    required
                  />
                </Grid>
              </Grid>
              <Field
                autoComplete="email"
                component={RFTextField}
                disabled={getState().submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
              />
              <Field
                fullWidth
                component={RFTextField}
                disabled={getState().submitting || sent}
                required
                name="password"
                autoComplete="new-password"
                label="Password"
                type="password"
                margin="normal"
              />
              <FormSpy subscription={{ submitError: true }}>
                {() =>
                  getState().submitError ? (
                    <FormFeedback error sx={{ mt: 2 }}>
                      {getState().submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                sx={{ mt: 3, mb: 2 }}
                disabled={getState().submitting || sent}
                color="secondary"
                fullWidth
              >
                {getState().submitting || sent ? 'In progress…' : 'Sign Up'}
              </FormButton>
            </Box>
          )}
        </Form>
      </AppForm>
      <AppFooter />
    </>
  );
}

export default withRoot(SignUp);
