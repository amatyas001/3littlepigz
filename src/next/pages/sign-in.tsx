import { useState } from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from 'lib/landing/modules/components/Typography';
import AppFooter from 'lib/landing/modules/views/AppFooter';
import AppAppBar from 'lib/landing/modules/views/AppAppBar';
import AppForm from 'lib/landing/modules/views/AppForm';
import RFTextField from 'lib/landing/modules/form/RFTextField';
import FormButton from 'lib/landing/modules/form/FormButton';
import FormFeedback from 'lib/landing/modules/form/FormFeedback';
import {
  email as validateEmail,
  required as validateRequired,
} from 'lib/landing/modules/form/validation';
import withRoot from 'lib/landing/modules/withRoot';

function SignIn() {
  const [sent, setSent] = useState(false);

  const validate = (values: { [index: string]: string }) => {
    const errors = validateRequired(['email', 'password'], values);
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
            Sign In
          </Typography>
          <Typography variant="body2" align="center">
            {'Not a member yet? '}
            <Link href="/sign-up/" align="center" underline="always">
              Sign Up here
            </Link>
          </Typography>
        </>
        <Form onSubmit={handleSubmit} subscription={{ submitting: true }} validate={validate}>
          {({ handleSubmit: handleSubmit2, form: { getState } }) => (
            <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
              <Field
                autoComplete="email"
                autoFocus
                component={RFTextField}
                disabled={getState().submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
                size="large"
              />
              <Field
                fullWidth
                size="large"
                component={RFTextField}
                disabled={getState().submitting || sent}
                required
                name="password"
                autoComplete="current-password"
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
                size="large"
                color="secondary"
                fullWidth
              >
                {getState().submitting || sent ? 'In progress???' : 'Sign In'}
              </FormButton>
            </Box>
          )}
        </Form>
        <Typography align="center">
          <Link underline="always" href="/forgot-password">
            Forgot password?
          </Link>
        </Typography>
      </AppForm>
      <AppFooter />
    </>
  );
}

export default withRoot(SignIn);
