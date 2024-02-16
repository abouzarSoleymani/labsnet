import { NextIntlClientProvider, useMessages } from 'next-intl';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import { AppFooter } from '@/components/layout/AppFooter';
import { AppHeader } from '@/components/layout/AppHeader';
import type { ChildContainerProps } from '@/types/types';

export default function PrimaryLayout({
  children,
  params,
}: Readonly<ChildContainerProps>) {
  const messages = useMessages();

  return (
    <div className='flex min-h-screen flex-col'>
      <AppHeader />
      <Breadcrumbs />
      <main className='flex-1'>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </main>
      <AppFooter />
    </div>
  );
}
