'use client';

import { useEffect, useState } from 'react';

import { useGetNewsItemQuery } from '@/api/queries/news.query';
import { Comments } from '@/components/news/Comments';
import { NewsBody } from '@/components/news/NewsBody';
import { NewsHeader } from '@/components/news/NewsHeader';
import { NewsKeyWords } from '@/components/news/NewsKeyWords';

export default function NewsDetail({
  params,
}: {
  params: {
    id: string;
    title: string;
  };
}) {
  const [value, setValue] = useState<any>();
  const { id } = params;
  const { data, refetch } = useGetNewsItemQuery(+id);
  useEffect(() => {
    refetch().then();
  }, [params]);
  return (
    <div className='container mx-auto my-5 flex w-full flex-col bg-gray-100 pt-10 '>
      <div className='pb-5'>
        {data && (
          <NewsHeader
            headerData={data[0]}
            rating={value}
            setRating={setValue}
          />
        )}
        {data && <NewsBody content={data[0]?.content} />}
      </div>
      {data && <NewsKeyWords keywords={data[0].keywords} />}
      <div className='pt-0'>
        <Comments />
      </div>
    </div>
  );
}
