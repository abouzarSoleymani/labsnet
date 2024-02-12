import { AppHeader } from '@/components/layout/AppHeader';
import { AppFooter } from '@/components/layout/AppFooter';
import { Fragment } from 'react';
import { ChildContainerProps } from '@/types/types';

export default function PrimaryLayout({
  children,
}: Readonly<ChildContainerProps>) {
  return (
    <Fragment>
      <AppHeader />
      {children}
      <AppFooter />
    </Fragment>
  );
}
