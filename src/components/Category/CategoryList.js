import React from 'react';
import CategoryItem from './CategoryItem';
import './style.scss';

CategoryList.propTypes = {
  // onCategoryClick: PropTypes.func,
};
function CategoryList({ categoryList, onCategoryClick }) {
  const handleItemClick = (item) => {
    if (!onCategoryClick) return;
    // console.log(item);
    onCategoryClick(item);
  };

  return (
    <ul className="category-list">
      {categoryList.map((item, index) => (
        <li
          key={index}
          category={item.name}
          onClick={() => handleItemClick(item)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
