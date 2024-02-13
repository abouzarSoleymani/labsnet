import Skeleton from '@mui/material/Skeleton';
import { Fragment } from 'react';

export const NewsSkeleton = () => {
  return (
    <Fragment>
      <Skeleton width={250} height={250} />
      <Skeleton className='mt-1' variant='rounded' width={140} height={10} />
      <Skeleton className='mt-1' variant='rounded' width={200} height={25} />
    </Fragment>
  );
};
