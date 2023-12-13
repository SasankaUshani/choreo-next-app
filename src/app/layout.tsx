import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/material';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VP-Sample-App',
  description: 'VP sample POC',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs>
              <Link href="/" passHref>
                <Tab label="Home" value="home" />
              </Link>
              <Link href="/server-side" passHref>
                <Tab label="Server side rendering" />
              </Link>
              <Link href="/client-side" passHref>
                <Tab label="Client side rendering" />
              </Link>
              <Link href="/streaming" passHref>
                <Tab label="Streaming" />
              </Link>
              <Link href="/vertical-matrix?page=2" passHref>
                <Tab label="Vertical Matrix" />
              </Link>
              <Link href="/" passHref>
                <Tab label="Back To Site" />
              </Link>
            </Tabs>
          </Box>
        </Box>
        {children}
      </body>
    </html>
  );
}
