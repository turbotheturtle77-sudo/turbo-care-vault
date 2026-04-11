import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NinjaStats from '@/components/NinjaStats';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shell-Sync | Turbo Care Vault',
  description: 'Gold Standard husbandry tracking for @turbo-the-turtle.',
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <NinjaStats />
      </body>
    </html>
  );
};

export default RootLayout;
