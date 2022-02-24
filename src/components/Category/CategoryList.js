import React from 'react';
import CategoryItem from './CategoryItem';
import './style.scss';

CategoryList.propTypes = {};

function CategoryList({ categoryList }) {
  return (
    <ul className="category-list">
      {categoryList.map((item, index) => (
        <CategoryItem key={index} category={item} />
      ))}
    </ul>
  );
}

export default CategoryList;
