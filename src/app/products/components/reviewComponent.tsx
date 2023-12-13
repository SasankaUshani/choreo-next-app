import LinkText from '@/primitives/link';
import RatingComponent from '@/primitives/ratingComponent';

interface Review {
  userName: string;
  reviewDescription: string;
  date: string;
  product: string;
}

interface ReviewProps {
  reviews: Review[];
}
const ReviewComponent: React.FC<ReviewProps> = ({ reviews }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      {reviews.map((review) => (
        <>
          <h3>{review.userName}</h3>
          <RatingComponent initialValue={3} totalStars={7} />
          {review.date}
          <br />
          <LinkText href="">{review.product}</LinkText>
          <br />
          <p>{review.reviewDescription}</p>
          <br />
        </>
      ))}
    </div>
  );
};
export default ReviewComponent;
