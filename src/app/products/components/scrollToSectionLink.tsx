// components/ScrollToSectionLink.tsx
import React from 'react';
import Link from 'next/link';

interface ScrollToSectionLinkProps {
  href: string;
  sectionId: string;
  children: React.ReactNode;
}

const ScrollToSectionLink: React.FC<ScrollToSectionLinkProps> = ({
  href,
  sectionId,
  children,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetElement = document.getElementById(sectionId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Link href={href} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default ScrollToSectionLink;
