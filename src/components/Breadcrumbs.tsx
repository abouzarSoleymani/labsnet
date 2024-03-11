'use client';

import Link from '@mui/material/Link';

import type { BreadcrumbStore } from '@/store/breadcrumb.store';
import { useBreadcrumbStore } from '@/store/breadcrumb.store';

export const Breadcrumbs = () => {
  const { breadcrumbs } = useBreadcrumbStore();
  return (
    <div className='container mx-auto py-4 pb-0'>
      <ul>
        {breadcrumbs.map(
          (
            breadcrumb: BreadcrumbStore,
            index: number,
            array: BreadcrumbStore[]
          ) => (
            <li
              key={breadcrumb.title}
              className="inline text-sm font-thin  before:px-2 before:content-['/'] first:before:content-['']"
            >
              <Link
                underline='none'
                className={`!text-lightGray ${!breadcrumb.path && 'pointer-events-none'} ${index === array.length - 1 && '!font-bold'}`}
                href={breadcrumb.path}
              >
                {breadcrumb.title}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
