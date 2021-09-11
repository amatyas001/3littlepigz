import { useState } from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import Box from '@mui/material/Box';
import Typography from 'lib/landing/modules/components/Typography';
import AppFooter from 'lib/landing/modules/views/AppFooter';
import AppAppBar from 'lib/landing/modules/views/AppAppBar';
import AppForm from 'lib/landing/modules/views/AppForm';
import { email, required } from 'lib/landing/modules/form/validation';
import RFTextField from 'lib/landing/modules/form/RFTextField';
import FormButton from 'lib/landing/modules/form/FormButton';
import FormFeedback from 'lib/landing/modules/form/FormFeedback';
import withRoot from 'lib/landing/modules/withRoot';

function ForgotPassword() {
  const [sent, setSent] = useState(false);

  const validate = (values: { [index: string]: string }) => {
    const errors = required(['email'], values);

    if (!errors.email) {
      const emailError = email(values['email'] ?? '');
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
            Forgot your password?
          </Typography>
          <Typography variant="body2" align="center">
            {"Enter your email address below and we'll " +
              'send you a link to reset your password.'}
          </Typography>
        </>
        <Form onSubmit={handleSubmit} subscription={{ submitting: true }} validate={validate}>
          {({ handleSubmit: handle, form: { getState } }) => (
            <Box component="form" onSubmit={handle} noValidate sx={{ mt: 6 }}>
              <Field
                autoFocus
                autoComplete="email"
                component={RFTextField}
                disabled={getState().submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
                size="large"
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
                {getState().submitting || sent ? 'In progress…' : 'Send reset link'}
              </FormButton>
            </Box>
          )}
        </Form>
      </AppForm>
      <AppFooter />
    </>
  );
}

export default withRoot(ForgotPassword);
