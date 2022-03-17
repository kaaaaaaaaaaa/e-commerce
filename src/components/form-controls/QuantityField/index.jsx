import { Box, IconButton, makeStyles, TextField } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { FormHelperText } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { Typography } from '@material-ui/core';
import { useSnackbar } from 'notistack';

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

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

function QuantityField(props) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  // enqueueSnackbar(
  //   'The maximum purchase quantity of this product is 5.',
  //   {
  //     variant: 'info',
  //   }
  //   )

  const { name, form, quantity } = props;
  const { errors, setValue } = form;
  const hasError = !!errors[name];
  return (
    <FormControl
      variant="outlined"
      margin="normal"
      error={hasError}
      fullWidth
      size="small"
    >
      <Controller
        //
        name={name} // is required
        control={form.control} // is required
        render={({ onChange, onBlur, value, name }) => (
          <Box className={classes.box}>
            <IconButton
              size="small"
              className={classes.button}
              onClick={() =>
                setValue(
                  name,
                  Number.parseInt(value) ? Number.parseInt(value) - 1 : 1
                )
              }
              disabled={Number.parseInt(value) === 1}
            >
              <RemoveIcon />
            </IconButton>
            <TextField
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              size="small"
              id={name}
              // type="number"
              className={classes.input}
              //
              //bind value
              value={value}
              onChange={(e) => onChange()}
              onBlur={onBlur}
            />
            <IconButton
              size="small"
              className={classes.button}
              onClick={() => {
                if (Number.parseInt(value) === 5) {
                  enqueueSnackbar(
                    'The maximum purchase quantity of this product is 5.',
                    {
                      variant: 'info',
                    }
                  );
                }
                setValue(
                  name,
                  Number.parseInt(value) < 5 ? Number.parseInt(value) + 1 : 5
                );
              }}
            >
              <AddIcon />
            </IconButton>
          </Box>
        )}
        helperText={errors[name]?.message} // error message co the co hoac k
      />
      <FormHelperText error={hasError}>{errors[name]?.message}</FormHelperText>
    </FormControl>
  );
}

export default QuantityField;
