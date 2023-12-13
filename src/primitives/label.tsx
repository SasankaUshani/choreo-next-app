// components/Label.tsx
import React from 'react';

interface LabelProps {
  htmlFor?: string;
  title: React.ReactNode;
  value?: React.ReactNode;
  className?: string;
  required?: boolean;
}

const Label: React.FC<LabelProps> = ({
  htmlFor,
  title,
  value,
  className = '',
  required = false,
}) => {
  return (
    <label htmlFor={htmlFor} className={`label ${className}`}>
      {value ? `${title}: ${value}` : `${title}`}

      {required && <span className="required-indicator">*</span>}
    </label>
  );
};

export default Label;
