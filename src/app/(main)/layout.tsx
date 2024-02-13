import { AppFooter } from '@/components/layout/AppFooter';
import { AppHeader } from '@/components/layout/AppHeader';
import type { ChildContainerProps } from '@/types/types';

export default function PrimaryLayout({
  children,
}: Readonly<ChildContainerProps>) {
  return (
    <div className='flex min-h-screen flex-col'>
      <AppHeader />
      <main className='flex-1'>{children}</main>
      <AppFooter />
    </div>
  );
}
