import type { ChildContainerProps } from '@/types/types';

export default function PrimaryLayout({
  children,
}: Readonly<ChildContainerProps>) {
  return (
    <div className='flex min-h-screen flex-col'>
      <main className='flex-1'>{children}</main>
    </div>
  );
}
