import { Carousel } from '@/components/landing/Carousel';
import { Description } from '@/components/landing/Description';
import { News } from '@/components/landing/News';

export const MainLayout = () => {
  return (
    <div className='w-full'>
      <Carousel />
      <Description />
      <News />
    </div>
  );
};
