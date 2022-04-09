import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { STATIC_HOST } from 'constants/index';
import { THUMBNAIL_PLACEHOLDER } from 'constants/common';
import { useState } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TelegramIcon from '@material-ui/icons/Telegram';
import LinkIcon from '@material-ui/icons/Link';
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
  },
  sharedBox: {
    display: 'flex',
    alignItems: 'center',
  },
}));

function ProductThumbnail({ product, previewImage = [] }) {
  const thumbnailUrlInit = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail && product.thumbnail.url}`
    : THUMBNAIL_PLACEHOLDER;

  const [thumbnailUrl, setThumbnailUrl] = useState(thumbnailUrlInit);

  const classes = useStyles();
  //

  //get 5 item of previewImage array
  const slicedPreviewImages = previewImage.slice(0, 6);
  // console.log(slicedPreviewImages);

  const handlePreviewImageClick = (image) => {
    setThumbnailUrl(image.url);
  };

  return (
    <Box className={classes.root}>
      <img src={thumbnailUrl} alt={product.name} width="100%" />
      <Box className={classes.previewImage}>
        {slicedPreviewImages.length >= 6 && (
          <Box
            dangerouslySetInnerHTML={{
              __html:
                '<p style="position: absolute; z-index:1; top:-4px; left:85%; font-size: 1rem; color: #fff; text-align: center">More Images</p>',
            }}
          ></Box>
        )}

        {previewImage.length > 0 &&
          slicedPreviewImages.map((image) => (
            <img
              className={image.id === 6 ? `${classes.moreImages}` : ''}
              key={image.id}
              src={image.url}
              alt={image.name}
              width="100%"
              onClick={() => handlePreviewImageClick(image)}
            />
          ))}
      </Box>
      {previewImage.length > 0 && (
        <Box className={classes.sharedBox}>
          <Typography>Share: </Typography>
          <Box>
            <FacebookIcon />
            <InstagramIcon />
            <WhatsAppIcon />
            <TelegramIcon />
            <LinkIcon />
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default ProductThumbnail;
