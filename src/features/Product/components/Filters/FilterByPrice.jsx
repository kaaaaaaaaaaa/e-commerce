import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';

FilterByPrice.propTypes = {
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
  range: {
    margin: theme.spacing(1, 0),
    display: 'flex',
    alignItem: 'center',
    '& >span': {
      margin: theme.spacing(0, 1),
    },
  },
  title: { fontWeight: 'bold' },
}));

function FilterByPrice({ onChange }) {
  const classes = useStyles();
  const [values, setValues] = useState({
    salePrice_gte: '',
    salePrice_lte: '',
  });

  // handle input change=> set value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (onChange) onChange(values);
    // console.log(values);
  };
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle1" className={classes.title}>
        GIÁ
      </Typography>
      <Typography variant="caption" color="textPrimary">
        Chọn khoảng giá
      </Typography>
      <Box className={classes.range}>
        <TextField
          type="number"
          variant="outlined"
          name="salePrice_gte"
          value={values.salePrice_gte >= 0 ? values.salePrice_gte : 0}
          onChange={handleChange}
        />
        <span> - </span>
        <TextField
          type="number"
          variant="outlined"
          name="salePrice_lte"
          value={values.salePrice_lte}
          onChange={handleChange}
        />
      </Box>
      <Button variant="outlined" onClick={handleSubmit}>
        Áp Dụng
      </Button>
    </Box>
  );
}

export default FilterByPrice;
