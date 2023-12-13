// components/CompanyDetails.tsx
import ImageThumbnail from '@/primitives/image-thumbnail';
import Text from '@/primitives/text';
import React from 'react';

interface CompanyDetailsProps {
  companyName: string;
  phone: string;
  location: string;
  imgSrc: string;
  fax: string;
  email: string;
  website: string;
}

const CompanyDetails: React.FC<CompanyDetailsProps> = ({
  companyName,
  phone,
  location,
  imgSrc,
  fax,
  email,
  website,
}) => {
  return (
    <div className="flex-container">
      <div className="left-component">
        <ImageThumbnail src={imgSrc} alt="sample image" />{' '}
      </div>
      <div className="right-component">
        <Text as="h4" text={companyName} />

        <Text as="h5" text={location} />
        <Text as="h5" text={`Phone:${phone}`} />
        <Text as="h5" text={`Fax:${fax}`} />
        <Text as="h5" text={`Email:${email}`} />
        <Text as="h5" text={`Website:${website}`} />
      </div>
    </div>
  );
};

export default CompanyDetails;
