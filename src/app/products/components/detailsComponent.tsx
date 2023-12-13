import { BasicButton } from '@/primitives/button';
import ImageThumbnail from '@/primitives/image-thumbnail';
import LinkText from '@/primitives/link';
import RatingComponent from '@/primitives/ratingComponent';
import Text from '@/primitives/text';
import Title from '@/primitives/title';
import { Suspense } from 'react';

const DetailComponent = () => {
  return (
    <Suspense>
      {productDetails.map((product) => (
        <div className="flex-container">
          <div className="left-component">
            <ImageThumbnail src={product.imgSrc} alt="sample image" />{' '}
          </div>
          <div className="right-component">
            <Title as="h3" text={product.title} />
            <RatingComponent initialValue={3} totalStars={7} />
            <LinkText
              href="https://www.biocompare.com/start-your-review/?vendor=104918&pid=15850112"
              openInNewTab
            >
              Be the first to write a review!{' '}
            </LinkText>
            <BasicButton title="Supplier page" />
            <br />
            <LinkText href="">Request Info </LinkText>
            <br />
            <Text as="h5" text={product.description} />
          </div>
        </div>
      ))}
    </Suspense>
  );
};

export default DetailComponent;

export const productDetails = [
  {
    imgSrc:
      'https://media.biocompare.com/m/37/images/anti-cd4-antibody-picoband-7288150-400x300.jpg',
    title: 'Anti-CD4 Antibody Picoband from BosterBio',
    description:
      'The Anti-CD4 Antibody Picoband from BosterBio is a Rabbit Polyclonal antibody to CD4. This antibody recognizes Mouse, and Rat antigen. The Anti-CD4 Antibody Picoband has been validated for the following applications: EIA, Immunoassay, ELISA, Flow Cytometry, Immunohistochemistry, and Western Blot. Boster Bio Anti-CD4 Antibody Picoband™ catalog # A00344-2. Tested in ELISA, Flow Cytometry, IHC, WB applications. This antibody reacts with Mouse, Rat',
  },
];
