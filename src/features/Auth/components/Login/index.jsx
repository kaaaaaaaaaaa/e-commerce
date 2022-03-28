import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import LoginForm from '../LoginForm';
import { login } from 'features/Auth/userSlice';
// import { unwrapResult } from '@reduxjs/toolkit';

Login.propTypes = {
  handleCloseDialog: PropTypes.func,
};

function Login(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (values) => {
    try {
      //Thunks may return a value when dispatched
      //
      // const resultAction = await dispatch(register(values));
      // const user = unwrapResult(resultAction);
      //
      const user = await dispatch(login(values)).unwrap(); // unwrap()=> get result when fullfilled, throw error when rejected
      //handle when Register successfully
      // console.log('user login: ', user);
      enqueueSnackbar('Login successfully!.', { variant: 'success' });

      //close dialog when register successfully
      const { handleCloseDialog } = props;
      if (handleCloseDialog) {
        handleCloseDialog();
      }
    } catch (error) {
      console.log('failed to login', error.message);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
