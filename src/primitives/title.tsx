// components/Title.tsx
import React from 'react';
import PropTypes from 'prop-types';

interface TitleProps {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text: string;
  icon?: React.ReactNode;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ as, text, icon, className = '' }) => {
  const HeadingTag = as;

  return (
    <div className={`title-container ${className}`}>
      {icon && <div className="icon-container">{icon}</div>}
      <HeadingTag>{text}</HeadingTag>
    </div>
  );
};

Title.propTypes = {
  //   as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.node,
  className: PropTypes.string,
};

export default Title;
