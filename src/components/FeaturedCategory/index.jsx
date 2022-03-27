import { Typography, Paper, makeStyles, Box } from '@material-ui/core';
import FeaturedCategoryList from './FeaturedCategoryList';
import featuredCategoryData from '../../Data/featuredCategories.json';

FeaturedCategory.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0),
  },
  title: {
    padding: theme.spacing(3),
    fontWeight: 'lighter',
  },
  featuredCategory: {
    padding: theme.spacing(2),
    overflow: 'auto',
  },
}));
function FeaturedCategory(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography className={classes.title} variant="h5">
        Danh Mục Nổi Bật
      </Typography>
      <Box className={classes.featuredCategory}>
        <FeaturedCategoryList categoryList={featuredCategoryData} />
      </Box>
    </Paper>
  );
}

export default FeaturedCategory;
