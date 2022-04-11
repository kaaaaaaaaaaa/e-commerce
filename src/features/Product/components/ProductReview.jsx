import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Box, Grid, makeStyles, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

ProductReview.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {},
  riviewer: {
    padding: theme.spacing(4),
  },
  riviewImage: {
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'flex-end',
    padding: theme.spacing(4),

    '&>img': {
      margin: theme.spacing(1),
    },
  },
  riviewerName: {
    fontWeight: 600,
    color: 'var(--primary)',
  },
  reviewDate: {
    color: 'var(--primary)',
  },
}));

function ProductReview(props) {
  const classes = useStyles();
  return (
    <Box>
      <Grid container direction="row" alignItems="center">
        <Grid item sm={2} className={classes.riviewer}>
          <Avatar
            style={{ height: '70px', width: '70px' }}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
          <Rating
            name="half-rating-read"
            defaultValue={4}
            precision={0.5}
            readOnly
          />
        </Grid>
        <Grid item sm={5} className={classes.riviewContent}>
          <Typography className={classes.reviewDate}>27 Aug 2016</Typography>
          <Typography className={classes.riviewerName}>
            Brandon William
          </Typography>
          <Typography style={{ padding: '16px 0' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Grid>

        <Grid item sm={5} className={classes.riviewImage}>
          <img
            src="https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=170667a&w=0&h=YGycIDbBRAWkZaSvdyUFvotdGfnKhkutJhMOZtIoUKY="
            alt=""
            width="120"
            height=""
          />
          <img
            src="https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=170667a&w=0&h=YGycIDbBRAWkZaSvdyUFvotdGfnKhkutJhMOZtIoUKY="
            alt=""
            width="120"
            height=""
          />
          <img
            src="https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=170667a&w=0&h=YGycIDbBRAWkZaSvdyUFvotdGfnKhkutJhMOZtIoUKY="
            alt=""
            width="120"
            height=""
          />
        </Grid>
      </Grid>

      <Grid container direction="row" alignItems="center">
        <Grid item sm={2} className={classes.riviewer}>
          <Avatar
            style={{ height: '70px', width: '70px' }}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
          <Rating
            name="half-rating-read"
            defaultValue={4}
            precision={0.5}
            readOnly
          />
        </Grid>
        <Grid item sm={5} className={classes.riviewContent}>
          <Typography className={classes.reviewDate}>27 Aug 2016</Typography>
          <Typography component="strong" className={classes.riviewerName}>
            Brandon William
          </Typography>
          <Typography style={{ padding: '16px 0' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Grid>

        <Grid item sm={5} className={classes.riviewImage}>
          <img
            src="https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=170667a&w=0&h=YGycIDbBRAWkZaSvdyUFvotdGfnKhkutJhMOZtIoUKY="
            alt=""
            width="120"
            height=""
          />
          <img
            src="https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=170667a&w=0&h=YGycIDbBRAWkZaSvdyUFvotdGfnKhkutJhMOZtIoUKY="
            alt=""
            width="120"
            height=""
          />
          <img
            src="https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=170667a&w=0&h=YGycIDbBRAWkZaSvdyUFvotdGfnKhkutJhMOZtIoUKY="
            alt=""
            width="120"
            height=""
          />
        </Grid>
      </Grid>
      <Grid container direction="row" alignItems="center">
        <Grid item sm={2} className={classes.riviewer}>
          <Avatar
            style={{ height: '70px', width: '70px' }}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
          <Rating
            name="half-rating-read"
            defaultValue={4}
            precision={0.5}
            readOnly
          />
        </Grid>
        <Grid item sm={5} className={classes.riviewContent}>
          <Typography className={classes.reviewDate}>27 Aug 2016</Typography>
          <Typography className={classes.riviewerName}>
            Brandon William
          </Typography>
          <Typography style={{ padding: '16px 0' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Grid>

        <Grid item sm={5} className={classes.riviewImage}>
          <img
            src="https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=170667a&w=0&h=YGycIDbBRAWkZaSvdyUFvotdGfnKhkutJhMOZtIoUKY="
            alt=""
            width="120"
            height=""
          />
          <img
            src="https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=170667a&w=0&h=YGycIDbBRAWkZaSvdyUFvotdGfnKhkutJhMOZtIoUKY="
            alt=""
            width="120"
            height=""
          />
          <img
            src="https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=170667a&w=0&h=YGycIDbBRAWkZaSvdyUFvotdGfnKhkutJhMOZtIoUKY="
            alt=""
            width="120"
            height=""
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductReview;
