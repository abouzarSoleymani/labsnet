'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useGetNewsQuery } from '@/api/queries/news.query';
import { NewsSkeleton } from '@/components/skeleton/NewsSkelton';

export const News = () => {
  const { data, isFetching } = useGetNewsQuery();
  return (
    <div className='container mx-auto my-20 flex flex-col items-center justify-center'>
      <h3 className='font-bold text-darkBlur'>اخبار و رویدادها</h3>
      <div className='my-4 mb-8 h-[2px] w-[250px] bg-lightGray' />
      <div className='flex flex-wrap items-start justify-center'>
        {data?.map((item: any) => (
          <div className='mx-10 my-2 max-w-[250px]' key={item.image}>
            {isFetching ? (
              <NewsSkeleton />
            ) : (
              <Link
                href={`/news/${item.id}/${item.title.replace(/\s+/g, '-')}`}
              >
                <Image
                  key={item.image}
                  src={item.image}
                  width={250}
                  height={250}
                  sizes='500px'
                  className='rounded-md'
                  alt='Picture of the author'
                />
                <div className='py-2 text-sm text-lightGray'>{item.date}</div>
                <div className='text-darkGray'>{item.title}</div>
              </Link>
            )}
          </div>
        ))}
      </div>
      <div
        className='mt-8 cursor-pointer border-b-2 transition
            delay-150 duration-300 ease-in-out  hover:-translate-x-1 hover:scale-100  hover:text-lightGray'
      >
        مشاهده ادامه ...
      </div>
    </div>
  );
};
