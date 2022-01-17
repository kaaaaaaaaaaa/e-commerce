import { yupResolver } from '@hookform/resolvers/yup';
import {
  Avatar,
  Button,
  LinearProgress,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { LockClockOutlined } from '@mui/icons-material';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
  root: { position: 'relative', padding: theme.spacing(4) },
  avatar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    textAlign: 'center',
    margin: '1rem 0',
  },
  submit: {
    margin: theme.spacing(2, 0),
  },
  progress: {
    position: 'absolute',
    top: theme.spacing(1),
    left: 0,
    right: 0,
  },
}));

function RegisterForm({ onSubmit }) {
  const schema = yup
    .object({
      fullName: yup
        .string()
        .required('Please enter your name.')
        .test(
          'should has at least 2 words',
          'Please enter at least two words',
          (value) => {
            // console.log(value);
            return value.split(' ').length >= 2;
          }
        ),
      email: yup
        .string()
        .required('Please enter your email address.')
        .email('Please enter a valid email address'),
      password: yup
        .string()
        .required('Please enter your password.')
        .min(6, 'Please enter at latest 6 characters.'),
      retypePassword: yup
        .string()
        .required('Please retype your password.')
        .oneOf([yup.ref('password')], 'Password does not match.'),
    })
    .required();

  //
  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema), // no valodation cho minh
  });

  // console.log(form);
  const handleSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
    // form.reset();
  };
  const { isSubmitting } = form.formState;

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}
      <Avatar className={classes.avatar}>
        <LockClockOutlined />
      </Avatar>
      <Typography className={classes.title} component="h1" variant="h5">
        Create New Account
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField
          name="retypePassword"
          label="Retype Password"
          form={form}
        />
        <Button
          type="submit"
          color="primary"
          className={classes.submit}
          variant="contained"
          fullWidth
          disabled={isSubmitting}
        >
          Create New Account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
