'use client';
// components/AdvancedRating.tsx
import React, { useState } from 'react';

interface RatingProps {
  initialValue?: number;
  onChange?: (value: number) => void;
  totalStars?: number;
  readOnly?: boolean;
}

const RatingComponent: React.FC<RatingProps> = ({
  initialValue = 0,
  totalStars = 5,
  readOnly = false,
}) => {
  const [rating, setRating] = useState(initialValue);
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarClick = (value: number) => {
    if (!readOnly) {
      setRating(value);
      console.log('Selected Rating:', value);
    }
  };

  const handleStarHover = (value: number) => {
    if (!readOnly) {
      setHoverRating(value);
    }
  };

  const handleMouseLeave = () => {
    if (!readOnly) {
      setHoverRating(0);
    }
  };

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => {
        const value = index + 1;

        return (
          <span
            key={value}
            onClick={() => handleStarClick(value)}
            onMouseEnter={() => handleStarHover(value)}
            onMouseLeave={handleMouseLeave}
            style={{
              cursor: readOnly ? 'default' : 'pointer',
              color: value <= (hoverRating || rating) ? 'gold' : 'gray',
            }}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default RatingComponent;
