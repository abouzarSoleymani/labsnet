import { Fragment } from 'react';

import { AppFooter } from '@/components/layout/AppFooter';
import { AppHeader } from '@/components/layout/AppHeader';
import type { ChildContainerProps } from '@/types/types';

export default function PrimaryLayout({
  children,
}: Readonly<ChildContainerProps>) {
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  );
}
