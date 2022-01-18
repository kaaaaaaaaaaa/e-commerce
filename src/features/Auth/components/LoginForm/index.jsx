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

LoginForm.propTypes = {
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

function LoginForm({ onSubmit }) {
  const schema = yup
    .object({
     
      identifier: yup
        .string()
        .required('Please enter your email address.')
        .email('Please enter a valid email address'),
      password: yup
        .string()
        .required('Please enter your password.')
      
    })
    .required();

  //
  const form = useForm({
    defaultValues: {
      identifier: '',
      password: '',
    },
    resolver: yupResolver(schema), // no valodation cho minh
  });

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
        <InputField name="identifier" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
       
        <Button
          type="submit"
          color="primary"
          className={classes.submit}
          variant="contained"
          fullWidth
          disabled={isSubmitting}
          size="large"
        >
      Sign in
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
