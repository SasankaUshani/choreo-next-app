'use client';
import React from 'react';
import ProductSpecs from './productSpecs';
import {
  companyInfo,
  sampleCitations,
  sampleReview,
} from '../constant/productSpecs';
import CompanyDetails from './companyDetails';
import ReviewComponent from './reviewComponent';
import StickyHeader from './stickyHeader';
import CitationsComponent from './citationComponent';

const tabs = [
  {
    sectionId: 'productsSpecs',
    component: <ProductSpecs />,
    title: 'PRODUCT SPECS',
  },
  {
    sectionId: 'companyInfo',
    component: <CompanyDetails {...companyInfo} />,
    title: 'COMPANY INFO',
  },
  {
    sectionId: 'reviews',
    component: <ReviewComponent reviews={sampleReview} />,
    title: 'REVIEWS',
  },
  {
    sectionId: 'citations',
    component: <CitationsComponent citations={sampleCitations} />,
    title: 'CITATIONS',
  },
];

const DetailTabComponent: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Next.js Page with Sections</h1>
      <StickyHeader tabs={tabs} />
      {tabs.map((tab) => (
        <section id={tab.sectionId}>{tab.component}</section>
      ))}
    </div>
  );
};

export default DetailTabComponent;
