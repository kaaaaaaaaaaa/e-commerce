import { Box, IconButton } from '@material-ui/core';
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
import { makeStyles } from '@material-ui/styles';

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
    flexGrow: 'row no-wrap',
    alignItem: 'center',
    maxWidth: '170px',
  },
}));

function QuantityField(props) {
  const classes = useStyles();
  const { name, form, label } = props;
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
      <Typography>{label}</Typography>

      <Controller
        //
        name={name} // is required
        control={form.control} // is required
        size="small"
        render={({ onChange, onBlur, value, name }) => (
          <Box className={classes.box}>
            <IconButton
              onClick={() =>
                setValue(
                  name,
                  Number.parseInt(value) ? Number.parseInt(value) - 1 : 1
                )
              }
            >
              <RemoveIcon />
            </IconButton>
            <OutlinedInput
              size="small"
              id={name}
              type="number"
              //
              //bind value
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
            <IconButton
              onClick={() => setValue(name, Number.parseInt(value) + 1)}
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
