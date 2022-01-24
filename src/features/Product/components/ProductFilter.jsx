import React from 'react';
import PropTypes from 'prop-types';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';
import { makeStyles } from '@material-ui/core';
import FilterByService from './Filters/FilterByService';

productFilter.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function productFilter({ filters, onChange }) {
  const handleCategoryChange = (categoryId) => {
    const newFilters = {
      // ...filters,
      'category.id': categoryId,
    };

    if (onChange) {
      onChange(newFilters);
    }
  };
  const handleChange = (values) => {
    if (onChange) {
      onChange(values);
    }
  };
  return (
    <div>
      <FilterByCategory onChange={handleCategoryChange} />
      <FilterByPrice onChange={handleChange} />
      <FilterByService filters={filters} onChange={handleChange} />
    </div>
  );
}

export default productFilter;
