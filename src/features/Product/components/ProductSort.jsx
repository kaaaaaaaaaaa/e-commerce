import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@material-ui/core';

ProductSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

function ProductSort(props) {
  const { currentSort, onChange } = props;
  console.log(currentSort);

  //
  const handleSortChange = (e, newValue) => {
    if (onChange) {
      onChange(newValue);
    }
  };
  return (
    <Tabs
      value={currentSort}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleSortChange}
      aria-label="disabled tabs example"
    >
      <Tab label="Giá thấp đến cao" value="salePrice:ASC" />
      <Tab label="Giá cao đến thấp" value="salePrice:DESC" />
    </Tabs>
  );
}

export default ProductSort;
