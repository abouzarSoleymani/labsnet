import Rating from '@mui/material/Rating';
import Image from 'next/image';

export const NewsHeader = ({ rating, setRating }: any) => {
  return (
    <div className='relative mx-10 mt-5 flex justify-between bg-white p-8'>
      <div className='flex flex-col'>
        <div className='flex items-center justify-center text-darkGray'>
          <div className='ml-2 size-[10px] bg-gray-700' />
          کارگاه جامع آموزشی کار با حیوانات آزمایشگاهی برگزار می‌شود
        </div>
        <div className='text-darkGray'>(۱۴۰۲/۱۱/۱۷)</div>
        <div className='my-2 flex'>
          <div className='m-1 bg-gray-200 p-2 text-xs'>شبکه آزمایشگاهی</div>
          <div className='m-1 bg-gray-200 p-2 text-xs'>آزمایشگاه</div>
        </div>
      </div>
      <div className=''>
        <Image
          className='cursor-pointer'
          src='/images/news/3.jpg'
          width={250}
          height={350}
          alt=''
        />
      </div>
      <div className='absolute -bottom-3 flex flex-col text-sm text-white'>
        <Rating
          name='simple-controlled'
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
        <div className='bg-gray-400 p-2'>تعداد بازدید : ۲۸۹</div>
      </div>
    </div>
  );
};
