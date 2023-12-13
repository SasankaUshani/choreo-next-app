'use client';
import { useEffect, FC } from 'react';
import ScrollToSectionLink from './scrollToSectionLink';
interface Tab {
  title: string;
  // component: FC;
  sectionId: string;
}

interface StickyHeaderProps {
  tabs: Tab[];
}

const StickyHeader: React.FC<StickyHeaderProps> = ({ tabs }) => {
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = () => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header?.classList.add('is-sticky')
      : header?.classList.remove('is-sticky');
  };
  return (
    <>
      <header className="header-section d-none d-xl-block">
        <nav>
          {tabs.map((tab) => (
            <>
              <ScrollToSectionLink href="/" sectionId={tab.sectionId}>
                {tab.title}
              </ScrollToSectionLink>
              {' | '}
            </>
          ))}
        </nav>{' '}
      </header>
    </>
  );
};

export default StickyHeader;
