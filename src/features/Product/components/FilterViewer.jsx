import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Chip, makeStyles } from '@material-ui/core';
import categoriesApi from 'api/categoryApi';

FilterViewer.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 'row wrap',
    alignItem: 'center',
    margin: theme.spacing(2, 0),
    listStyleType: 'none',
    padding: 0,
    '&>li': {
      margin: 0,
      padding: theme.spacing(1),
    },
  },
}));
const FILTER_LIST = [
  {
    id: 1,
    getLabel: () => 'Miễn phí giao hàng', //isFreeShip
    isActive: (filters) => filters.isFreeShip,
    isVisible: () => true, // always visible
    isRemoveale: false,
    onRemove: () => {}, //cant remove
    onToggle: (filters) => {
      const newFilters = { ...filters };

      if (newFilters.isFreeShip) {
        delete newFilters.isFreeShip;
      } else {
        newFilters.isFreeShip = true;
      }
      return newFilters;
    },
  },
  {
    id: 2,
    getLabel: () => 'Khuyến mãi',
    isActive: () => true,
    isVisible: (filters) => filters.isPromotion, //has isPromotion => show
    isRemoveale: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.isPromotion;
      return newFilters;
    },
    onToggle: null,
  },
  {
    id: 3,
    getLabel: (filters) =>
      `Từ ${filters.salePrice_gte} đến ${filters.salePrice_lte} `,
    isActive: () => true,
    isVisible: (filters) =>
      Object.keys(filters).includes('salePrice_gte') &&
      Object.keys(filters).includes('salePrice_lte'),

    isRemoveale: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.salePrice_gte;
      delete newFilters.salePrice_lte;
      return newFilters;
    },
    onToggle: null,
  },
  {
    id: 4,
    getLabel: (filters) => 'Danh Mục',

    //   (async () => {
    //     const category = await categoriesApi.getAll();
    //     console.log(category);
    //     let label;
    //     label = category.find((x) => x.id === filters[category.id]);
    //     console.log(label);
    //   })();
    //   return label.name;

    isActive: () => true,
    isVisible: (filters) =>
      Object.keys(filters).includes('salePrice_gte') &&
      Object.keys(filters).includes('salePrice_lte'),

    isRemoveale: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      //   delete newFilters.category.id;
      //   delete newFilters.salePrice_lte;
      return newFilters;
    },
    onToggle: null,
  },
];

function FilterViewer({ filters = {}, onChange = null }) {
  //   useEffect(() => {
  //     (async () => {
  //       const category = await categoriesApi.getAll();
  //       console.log(Object.keys(category));
  //       let label;
  //       // label = category.filter((x) => x.id === filters[category.id]);
  //       // console.log(label);
  //     })();
  //   }, [filters]);

  const classes = useStyles();
  console.log(filters);
  return (
    <Box component="ul" className={classes.root}>
      {FILTER_LIST.filter((x) => x.isVisible(filters)).map((x) => (
        <li key={x.id}>
          <Chip
            label={x.getLabel(filters)}
            color={x.isActive(filters) ? 'primary' : 'default'}
            clickable={!x.isRemoveale}
            onClick={
              !x.isRemoveale
                ? () => {
                    if (!onChange) return;

                    const newFilters = x.onToggle(filters);
                    onChange(newFilters);
                  }
                : null
            }
            onDelete={
              x.isRemoveale
                ? () => {
                    if (!onChange) return;

                    const newFilters = x.onRemove(filters);
                    onChange(newFilters);
                  }
                : null
            }
          />
        </li>
      ))}
    </Box>
  );
}

export default FilterViewer;
