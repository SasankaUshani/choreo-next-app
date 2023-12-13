import PropTypes from 'prop-types';
import Image from 'next/image';
import { Suspense } from 'react';
import { ImageListItem } from '@mui/material';
interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageThumbnail: React.FC<ImageProps> = ({
  alt,
  src,
  className = '',
  ...nextImageProps
}) => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <ImageListItem sx={{ width: 500, height: 450 }}>
        <img src={src} loading="lazy" />
      </ImageListItem>
    </Suspense>
  );
};

ImageThumbnail.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ImageThumbnail;
