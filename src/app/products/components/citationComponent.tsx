// components/CitationsComponent.tsx
import LinkText from '@/primitives/link';
import React, { FC } from 'react';

interface Citation {
  author: string;
  title: string;
  year: string;
  subtitle: string;
  url: string;
}

interface CitationsProps {
  citations: Citation[];
}

const CitationsComponent: FC<CitationsProps> = ({ citations }) => {
  return (
    <div>
      <h2>Citations({citations.length})</h2>
      <ul>
        {citations.map((citation, index) => (
          <div>
            ({index + 1}){' '}
            <LinkText href={citation.url}>{citation.title}</LinkText>
            <br />
            {citation.subtitle}
            <br />
            {citation.year}
            <br /> {citation.author}
            <br />
            <br />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CitationsComponent;
