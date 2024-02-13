import Rating from '@mui/material/Rating';
import Image from 'next/image';

export const NewsHeader = ({ headerData, rating, setRating }: any) => {
  return (
    <div className='relative mx-10 mt-5 flex justify-between bg-white p-8'>
      <div className='flex flex-col'>
        <div className='flex items-center justify-center text-darkGray'>
          <div className='ml-2 size-[10px] bg-gray-700' />
          {headerData?.title}
        </div>
        <div className='text-darkGray'>({headerData?.date})</div>
        <div className='my-2 flex'>
          {headerData?.tags &&
            headerData?.tags.map((tag: any) => (
              <div key={tag} className='m-1 bg-gray-200 p-2 text-xs'>
                {tag}
              </div>
            ))}
        </div>
      </div>
      <div className=''>
        <Image
          className='cursor-pointer'
          src={headerData?.image}
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
        <div className='bg-gray-400 p-2'>
          <span>تعداد بازدید :</span>
          <span>{headerData?.visits}</span>
        </div>
      </div>
    </div>
  );
};
