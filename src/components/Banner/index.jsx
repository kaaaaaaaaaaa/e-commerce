// import bg from '../../assets/images/bg.png';
// import bg3 from '../../assets/images/bg-1.png';
// import bg1 from '../../assets/images/bg-2.png';
// import bg2 from '../../assets/images/bg-3.png';
import { Grid, makeStyles } from '@material-ui/core';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
// Import css files
import 'slick-carousel/slick/slick.css';
import './Banner.scss';
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 0),
    height: '274px',
  },
}));
function Banner(props) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={8}>
        <Slider {...settings} className={classes.slider}>
          <div className="slider">
            <img
              src="https://salt.tikicdn.com/cache/w1080/ts/banner/6b/dc/ec/d1bc1107640c030f3e46ac8403996955.png.webp"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="https://salt.tikicdn.com/cache/w1080/ts/banner/df/9a/ac/81abf0d1707ebf14f6bf0dc8334eda67.png.webp"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="https://salt.tikicdn.com/cache/w1080/ts/banner/13/3c/05/7970aec74cc61edd8797706da278751d.png.webp"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="https://salt.tikicdn.com/cache/w1080/ts/banner/01/f6/dc/134d54aded4c0f668b710ff0df594819.png.webp"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="https://salt.tikicdn.com/cache/w1080/ts/banner/5c/ae/76/b9942d0abd0d98fb14cfc0c66d377e51.png.webp"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="https://salt.tikicdn.com/cache/w1080/ts/banner/df/9a/ac/81abf0d1707ebf14f6bf0dc8334eda67.png.webp"
              alt=""
            />
          </div>
        </Slider>
      </Grid>
      <Grid item xs={4}>
        <img
          src="https://salt.tikicdn.com/cache/w400/ts/banner/61/7c/5b/43f2244c225b98b9c7ab8b9b39c70f6c.png.webp"
          alt=""
        />
      </Grid>
    </Grid>
  );
}

Banner.propTypes = {};

export default Banner;