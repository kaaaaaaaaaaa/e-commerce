import React from 'react';
import PropTypes from 'prop-types';
import FilterByCategory from './Filters/FilterByCategory';

productFilter.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function productFilter({ filters, onChange }) {
  const handleCategoryChange = (categoryId) => {
    const newFilters = {
      ...filters,
      'category.id': categoryId,
    };

    if (onChange) {
      onChange(newFilters);
    }
  };
  return (
    <div>
      <FilterByCategory onChange={handleCategoryChange} />
    </div>
  );
}

export default productFilter;
