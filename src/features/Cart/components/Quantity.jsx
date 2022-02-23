import { Box, IconButton, makeStyles, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { removeFromCart, setQuantity } from '../CartSlice';
import { useDispatch } from 'react-redux';

Quantity.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},
  box: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '150px',
    width: '122px',
    border: `1px solid ${theme.palette.grey[300]}`,

    borderRadius: '4px',
  },
  // 'MuiInputBase-root': {
  //   height: '30px',
  // },
  button: {
    margin: '5px 10px',
  },
  input: {
    outline: 'none',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function Quantity({ cart, quantity, handleCaculateTotal, onChange }) {
  const classes = useStyles();
  const [value, setValue] = useState(cart.quantity);
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setValue(e.target.value);
    // handleCaculateTotal();
    onChange(e.target.value);
  };
  return (
    <Box className={classes.box}>
      <IconButton
        size="small"
        className={classes.button}
        onClick={() => {
          setValue(Number.parseInt(value) > 0 ? Number.parseInt(value) - 1 : 1);
          dispatch(setQuantity({ id: cart.id, quantity: value - 1 }));
          if (value === 1) {
            dispatch(removeFromCart(cart.id));
          }
        }}
      >
        <RemoveIcon />
      </IconButton>

      <TextField
        id="quantity"
        name="quantity"
        variant="standard"
        InputProps={{
          disableUnderline: true,
        }}
        size="small"
        className={classes.input}
        //
        //bind value
        value={value}
        onChange={handleInputChange}
      />

      <IconButton
        size="small"
        className={classes.button}
        onClick={() => {
          setValue(Number.parseInt(value) + 1);
          dispatch(setQuantity({ id: cart.id, quantity: value + 1 }));
        }}
      >
        <AddIcon />
      </IconButton>
    </Box>
  );
}

export default Quantity;
