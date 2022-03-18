import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@material-ui/core';
import QuantityField from 'components/form-controls/QuantityField';
import { cartItemsSlector } from 'features/Cart/selectors';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import * as yup from 'yup';

AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

function AddToCartForm({ onSubmit = null, product = {} }) {
  const cartItems = useSelector(cartItemsSlector);
  // console.log(cartItems);
  // console.log(product);
  //
  // const cart = cartItems.find((item) => item.id === product.id);
  // console.log(cart);

  const schema = yup
    .object({
      quantity: yup
        .number()
        .required('Please Enter a quantity')
        .min(1, 'Please enter at least 1.')
        .typeError('please enter a number.'),
    })
    .required();

  //
  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema), // no valodation cho minh
  });

  const handleSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
    // form.reset();
  };
  const onChange = (values) => {
    // console.log('input chanfge');
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <QuantityField
        name="quantity"
        label="Quantity"
        form={form}
        onChange={onChange}
      />

      <Button
        type="submit"
        color="primary"
        variant="contained"
        size="large"
        style={{ width: '250px' }}
      >
        Buy
      </Button>
    </form>
  );
}

export default AddToCartForm;
