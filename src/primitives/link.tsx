// components/AdvancedLinkText.tsx
import React, { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';

interface LinkTextProps extends LinkProps {
  children: ReactNode;
  openInNewTab?: boolean;
  color?: string;
  underlineOnHover?: boolean;
}

const LinkText: React.FC<LinkTextProps> = ({
  children,
  openInNewTab = false,
  color = 'inherit',
  underlineOnHover = true,
  ...linkProps
}) => {
  const linkStyle: React.CSSProperties = {
    color,
    textDecoration: underlineOnHover ? 'underline' : 'none',
    cursor: 'pointer',
  };

  return <Link {...linkProps}>{children}</Link>;
};

export default LinkText;
