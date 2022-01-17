import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';
import { useDispatch } from 'react-redux';
import { register } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
// import { unwrapResult } from '@reduxjs/toolkit';

Register.propTypes = {
  handleCloseDialog: PropTypes.func,
};

function Register(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (values) => {
    try {
      values.username = values.email;
      //Thunks may return a value when dispatched
      //
      // const resultAction = await dispatch(register(values));
      // const user = unwrapResult(resultAction);
      //
      const user = await dispatch(register(values)).unwrap(); // unwrap()=> get result when fullfilled, throw error when rejected
      //handle when Register successfully
      console.log('new user:', user);
      enqueueSnackbar('Register successfully.', { variant: 'success' });

      //close dialog
      const { handleCloseDialog } = props;
      if (handleCloseDialog) {
        handleCloseDialog();
      }
    } catch (error) {
      console.log('failed to register', error.me);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
