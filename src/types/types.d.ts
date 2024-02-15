import type { ReactNode } from 'react';

export type Locale = 'en' | 'fa';

type ChildContainerProps = {
  children: ReactNode;
  params: { locale: string };
};

export type SiteConfig = {
  title: string;
  description: string;
  icons: {
    icon: string;
  };
};
