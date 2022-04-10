import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link, makeStyles, Typography } from '@material-ui/core';
import { STATIC_HOST } from 'constants/index';
import { THUMBNAIL_PLACEHOLDER } from 'constants/common';
import { useState } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TelegramIcon from '@material-ui/icons/Telegram';
import LinkIcon from '@material-ui/icons/Link';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import Zoom from 'react-medium-image-zoom';
import Zoom from 'react-img-zoom';
ProductThumbnail.propTypes = {
  product: PropTypes.object,
};
const useStyles = makeStyles((theme) => ({
  previewImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    userSelect: 'none',
    margin: theme.spacing(2, 0),
    '&> img': {
      width: '64px',
      marginRight: theme.spacing(1),
      borderRadius: theme.spacing(0.5),
      cursor: 'pointer',
    },
    position: 'relative',
  },
  moreImages: {
    filter: 'brightness(0.5) contrast(0.5);',
    // '&::before': {

    // },
  },
  bottomBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
  },
  sharedBox: {
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center',
    borderRight: '1px solid #ddd',
  },

  rightBox: {
    padding: theme.spacing(0, 2),
  },
  favoriteBox: {
    paddingLeft: theme.spacing(2),

    display: 'flex',
    alignItems: 'center',
    '&>span': {
      paddingLeft: theme.spacing(1),
    },
  },
}));

function ProductThumbnail({ product, previewImage = [] }) {
  const thumbnailUrlInit = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail && product.thumbnail.url}`
    : THUMBNAIL_PLACEHOLDER;

  const [thumbnailUrl, setThumbnailUrl] = useState(thumbnailUrlInit);
  const [favorite, setFavorite] = useState(false);

  const classes = useStyles();
  //

  //get 5 item of previewImage array
  const slicedPreviewImages = previewImage.slice(0, 6);
  // console.log(slicedPreviewImages);

  const handlePreviewImageClick = (e, image) => {
    // console.log(image.url);
    if (image.id !== 6) {
      setThumbnailUrl(image.url);
    }
    console.log(e.target);
  };

  const handlefavoriteBoxClick = () => {
    setFavorite(!favorite);
  };

  return (
    <Box className={classes.root}>
      {/* <Zoom img={thumbnailUrl} zoomScale={3} width="425" height="425" /> */}
      {/* <Zoom zoomMargin={40}>
        <img alt={product.name} src={thumbnailUrl} width="100%" />
      </Zoom> */}
      <img src={thumbnailUrl} alt={product.name} width="100%" />
      <Box className={classes.previewImage}>
        {/* {slicedPreviewImages.length >= 6 && (
          <Box
            dangerouslySetInnerHTML={{
              __html:
                '<p style="position: absolute;z-index: 1;height: 64px;top: 0;left: 85%;font-size: 12px;color: #fff;margin: 0!important;text-align: center;display: flex;align-items: center;">More Images</p>',
            }}
          ></Box>
        )} */}
        {previewImage.length > 0 &&
          slicedPreviewImages.map((image) => (
            <img
              className={image.id === 6 ? `${classes.moreImages}` : ''}
              key={image.id}
              src={image.url}
              alt={image.name}
              width="100%"
              onClick={(e) => handlePreviewImageClick(e, image)}
            />
          ))}
      </Box>
      {previewImage.length > 0 && (
        <Box className={classes.bottomBox}>
          <Box className={classes.sharedBox}>
            <Typography>Share: </Typography>
            <Box>
              <Link
                href="https://www.facebook.com/oanhneeeeeeeeeeeeeeeeeeeeeeeee/"
                title="Facebook"
              >
                <FacebookIcon htmlColor="#3b5998" fontSize="medium" />
              </Link>
              <Link
                href="https://www.instagram.com/kaaaaaaaaaaaaaaaaaaaaaaaaaaaoa/"
                title="Instagram"
              >
                <InstagramIcon htmlColor="#e94475" fontSize="medium" />
              </Link>
              <Link href="#" title="WhatsApp">
                <WhatsAppIcon htmlColor="#25d366" fontSize="medium" />
              </Link>
              <Link href="#" title="Telegram">
                <TelegramIcon htmlColor="#49a9e9" fontSize="medium" />
              </Link>
              <Link href="#" title="copy link">
                <LinkIcon htmlColor="#a2a9ad" fontSize="medium" />
              </Link>
            </Box>
          </Box>
          <Box className="rightbox">
            {favorite ? (
              <Box className={classes.favoriteBox}>
                <FavoriteIcon
                  htmlColor="red"
                  onClick={handlefavoriteBoxClick}
                />
                <Typography component="span" variant="body2">
                  Liked
                </Typography>
              </Box>
            ) : (
              <Box className={classes.favoriteBox}>
                <FavoriteBorderIcon onClick={handlefavoriteBoxClick} />
                <Typography component="span" variant="body2">
                  Like
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default ProductThumbnail;
