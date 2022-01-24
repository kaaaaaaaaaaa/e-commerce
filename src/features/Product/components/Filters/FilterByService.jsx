import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';

FilterByService.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: ` 0.5px solid ${theme.palette.grey[300]}`,
    '& .MuiOutlinedInput-input': {
      padding: '6px',
    },
  },
  services: {
    padding: '0',
    margin: '0',
    listStyleType: 'none',

    '& >li': {
      margin: '0',
      fontSize: '13px',
    },
  },
  title: { fontWeight: 'bold' },
}));

function FilterByService({ filters, onChange }) {
  const classes = useStyles();

  // handle change=> set value
  const handleChange = (e) => {
    if (!onChange) return;
    const { name, checked } = e.target;
    onChange({ [name]: checked });
  };

  return (
    <Box className={classes.root}>
      <Typography>Dịch vụ</Typography>
      <ul className={classes.services}>
        {[
          { value: 'isPromotion', label: 'Khuyến Mãi' },
          { value: 'isFreeShip', label: 'Miến phí vận chuyển' },
        ].map((service) => (
          <li key={service.value}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={!!filters[service.value]}
                  onChange={handleChange}
                  name={service.value}
                  color="primary"
                />
              }
              label={service.label}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByService;
