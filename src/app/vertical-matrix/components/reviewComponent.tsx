import ImageThumbnail from '@/primitives/image-thumbnail';
import Text from '@/primitives/text';
import Title from '@/primitives/title';
const dummyReviews = [
  {
    imageSrc: 'https://media.biocompare.com/m/37/article/607942/il17a.jpg',
    reviewTitle: 'Excellent Anti-Mouse IL17A Antibody From Thermo Fisher',
    reviewDescription:
      'Bright and reliable anti-IL17a antibody at 1:200 dilution on LPMCs after restimulation with PMA..',
  },
  {
    imageSrc: 'https://media.biocompare.com/m/37/article/608362-134x100.jpg',
    reviewTitle:
      'Very Good PerCP/Fire™ 806 Anti-Human IgD Antibody From BioLegend',
    reviewDescription:
      'This antibody has been used to optimize flow cytometry-based immunophenotyping of PBMC samples',
  },
];
export const ReviewComponent: React.FC<{}> = ({ ...props }) => {
  return (
    <div>
      <Title as="h3" text="Reviews" />
      {dummyReviews.map((review) => (
        <>
          <ImageThumbnail src={review.imageSrc} alt="" />
          <Title as="h4" text={review.reviewTitle} />
          <Text as="h5" text={review.reviewDescription} />
        </>
      ))}
    </div>
  );
};
