'use client';

import { Pagination } from '@mui/material';
import Image from 'next/image';
import type { ChangeEvent } from 'react';
import * as React from 'react';
import { useState } from 'react';
import { useFilterCombinedQuery } from '@/api/queries/filter.query';

const tags = [
  {
    id: 1,
    title: '#tag',
  },
  {
    id: 2,
    title: '#tagsdfsdffd',
  },
  {
    id: 3,
    title: '#tagsdfsdffd',
  },
  {
    id: 4,
    title: '#tags01',
  },
  {
    id: 5,
    title: '#tags02',
  },
  {
    id: 6,
    title: '#tags03',
  },
];

const machines = [
  {
    id: 1,
    image: '/images/machines/1.png',
    title: 'styrocut',
    subTitle: 'Styrocut 1',
  },
  {
    id: 2,
    image: '/images/machines/2.jpg',
    title: 'styrocut',
    subTitle: 'Styrocut 2',
  },
  {
    id: 3,
    image: '/images/machines/3.jpg',
    title: 'styrocut',
    subTitle: 'Styrocut 3',
  },
  {
    id: 4,
    image: '/images/machines/4.jpg',
    title: 'styrocut',
    subTitle: 'Styrocut 4',
  },
  {
    id: 5,
    image: '/images/machines/1.png',
    title: 'styrocut',
    subTitle: 'Styrocut 1',
  },
  {
    id: 6,
    image: '/images/machines/2.jpg',
    title: 'styrocut',
    subTitle: 'Styrocut 2',
  },
  {
    id: 7,
    image: '/images/machines/3.jpg',
    title: 'styrocut',
    subTitle: 'Styrocut 3',
  },
  {
    id: 8,
    image: '/images/machines/4.jpg',
    title: 'styrocut',
    subTitle: 'Styrocut 4',
  },
  {
    id: 9,
    image: '/images/machines/1.png',
    title: 'styrocut',
    subTitle: 'Styrocut 1',
  },
  {
    id: 10,
    image: '/images/machines/2.jpg',
    title: 'styrocut',
    subTitle: 'Styrocut 2',
  },
];

export default function Machine() {
  const [page, setPage] = useState(1);

  const combinedData = useFilterCombinedQuery();

  const handleChangePagination = (
    event: ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-between py-8'>
      <div className='flex size-full container  flex-wrap items-start justify-center sm:h-[300px] '>
        <div className='flex size-full flex-col items-center justify-start border-[1px] border-gray-100  p-4 w-full'>
          <div className='text-xl font-bold pb-4'>فیلتر</div>
          <div className='flex flex-wrap'>
            {combinedData.map((tag: any) => {
              return (
                <div
                  key={tag?.id}
                  className='m-1 bg-gray-100 px-2 py-3 text-sm text-primary-green-800'
                >
                  #${tag?.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className='container flex flex-wrap p-4'>
        {machines.map((item: any) => {
          return (
            <div
              key={item?.id}
              className='mx-4 my-3 flex w-full  flex-col items-start justify-start bg-white p-2 drop-shadow-lg sm:w-[40%] md:w-[20%] '
            >
              <Image
                src={item?.image}
                alt=''
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: 'auto' }}
              />
              <div className='text-sm font-bold'>{item?.title}</div>
              <div className='text-sm font-light'>{item?.subTitle}</div>
            </div>
          );
        })}
      </div>
      <div className='flex w-full items-center justify-center'>
        <Pagination count={10} page={page} onChange={handleChangePagination} />
      </div>
    </main>
  );
}
