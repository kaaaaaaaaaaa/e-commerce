import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Divider,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import QuantityField from 'components/form-controls/QuantityField';
import ProductThumbnail from 'features/Product/components/ProductThumbnail';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { formatPrice } from 'utils';
import * as yup from 'yup';
import { removeFromCart, setQuantity } from '../CartSlice';

CartItem.propTypes = {
  cart: PropTypes.object,
  onChange: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    padding: theme.spacing(1),
  },
  left: {
    maxWidth: '120px',

    '&>img': {
      width: '120px',
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      width: 'unset',
    },
  },
  right: {
    display: 'flex',
    flex: '1 1 0',
    padding: theme.spacing(1.5),
    alignItems: 'center',
    justifyContent: 'flex-end',
    //
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'start',
      padding: theme.spacing(0, 2),
    },
  },

  cartRight: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  name: {
    margin: theme.spacing(1.5),
    minWidth: '210px',
    [theme.breakpoints.down('xs')]: {
      margin: 0,
      padding: 0,
      fontSize: '15px',
      minWidth: 'unset',
    },
  },
  priceBox: {
    padding: theme.spacing(1),
    //
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(0),
    },
  },
  salePrice: {
    fontSize: theme.typography.h6.fontSize,
    marginRight: theme.spacing(3),
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(1, 0),
    },
  },
  originalPrice: {
    marginRight: theme.spacing(2),
    textDecoration: 'line-through',
  },
  promotionPercent: {
    // padding: theme.spacing(0.3, 0.4),
    // border: '0.7px solid black',
    // borderRadius: '4px',
    // fontWeight: '500',
    fontSize: '13px',
  },
  freeShip: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1),

    '&> img': {
      width: '78px',
      height: '13px',
      marginRight: theme.spacing(1),
    },
  },
  total: {
    margin: theme.spacing(0, 2),
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(1.5, 0),
    },
  },
  divider: {
    marginTop: theme.spacing(1),
  },
  remove: {
    padding: 0,
  },
}));

function CartItem({ cart }) {
  const classes = useStyles();
  const { name, salePrice, originalPrice, promotionPercent } = cart.product;
  const dispatch = useDispatch();
  const schema = yup
    .object({
      quantity: yup
        .number()
        .required('Please Enter a quantity')
        .min(1, 'Please enter at least 1.')
        .typeError('please enter a number.'),
    })
    .required();

  //
  const form = useForm({
    defaultValues: {
      quantity: cart.quantity,
    },
    resolver: yupResolver(schema), // no valodation cho minh
  });
  const handleInputOnchange = async (value) => {
    console.log(value);
    dispatch(setQuantity({ id: cart.id, quantity: value }));

    // setValue(3);
    // form.reset();
  };

  const handleRemoveCartItem = () => {
    dispatch(removeFromCart(cart.id));
  };
  const caculateTotalPrice = () => {
    console.log('caculate');
  };

  return (
    <Box className={classes.root}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={5} md={4} className={classes.left}>
          <ProductThumbnail product={cart.product} />
        </Grid>

        <Grid item xs={7} md={8} className={classes.right}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            style={{ width: '100%' }}
          >
            <Grid item>
              <Typography className={classes.name}>{name}</Typography>
            </Grid>
          </Grid>
          <Grid item className={classes.cartRight}>
            <Grid item>
              <Typography className={classes.salePrice}>
                {formatPrice(salePrice)}
              </Typography>

              {promotionPercent > 0 && (
                <Box className={classes.priceBox}>
                  <Box component="span" className={classes.originalPrice}>
                    {formatPrice(originalPrice)}
                  </Box>
                </Box>
              )}
            </Grid>
            <Grid item>
              <QuantityField
                cart={cart}
                name="quantity"
                label="Quantity"
                form={form}
                onChange={handleInputOnchange}
              />
            </Grid>

            <Grid item className={classes.total}>
              {cart.quantity > 0 &&
                formatPrice(Number.parseInt(cart.quantity) * salePrice)}
            </Grid>

            <Grid item>
              <Box sx={{ display: { xs: 'none', md: 'block', lg: 'block' } }}>
                <IconButton
                  className={classes.remove}
                  aria-label="show 4 new mails"
                  color="inherit"
                  onClick={handleRemoveCartItem}
                >
                  <DeleteForeverIcon color="primary" />
                </IconButton>
              </Box>

              <Box sx={{ display: { xs: 'block', md: 'none', lg: 'none' } }}>
                <IconButton
                  className={classes.remove}
                  aria-label="show 4 new mails"
                  color="inherit"
                  onClick={handleRemoveCartItem}
                >
                  <Typography color="primary" variant="subtitle1">
                    Xóa
                  </Typography>
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider className={classes.divider} width="100%" />
    </Box>
  );
}

export default CartItem;
