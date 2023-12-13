import { BasicButton } from '@/primitives/button';
import ImageThumbnail from '@/primitives/image-thumbnail';
import LinkText from '@/primitives/link';
import RatingComponent from '@/primitives/ratingComponent';
import Text from '@/primitives/text';
import Title from '@/primitives/title';
import { Suspense } from 'react';
import DetailComponent from './components/detailsComponent';
import DetailTabComponent from './components/detailTabComponent';

const ProductDetail = () => {
  return (
    <Suspense>
      <DetailComponent />
      <DetailTabComponent />
    </Suspense>
  );
};

export default ProductDetail;
