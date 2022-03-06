import React from 'react';
import PropTypes from 'prop-types';
import DealItem from './DealItem';
import Slider from 'react-slick';
import { Box } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import SkipNextSharpIcon from '@material-ui/icons/SkipNextSharp';
import { useHistory } from 'react-router-dom';

DealList.propTypes = {
  dealShock: PropTypes.array,
};
const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
    }
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    Previous
  </button>
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      'slick-next slick-arrow' +
      (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  >
    Next
  </button>
);

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  initialSlide: 0,
  nextArrow: <SlickArrowRight />,
  prevArrow: <SlickArrowLeft />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};

//
//

function DealList({ dealShock }) {
  let history = useHistory();
  const handleItemClick = (deal) => {
    // console.log(deal);
    history.push(`/products/${deal.id}`);
  };
  return (
    <Box>
      <Slider {...settings}>
        {dealShock.map((deal, index) => (
          <DealItem key={index} deal={deal} handleItemClick={handleItemClick} />
        ))}
      </Slider>
    </Box>
  );
}

export default DealList;
