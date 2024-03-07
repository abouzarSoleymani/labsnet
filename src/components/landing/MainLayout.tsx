import { Description } from '@/components/landing/Description';
import { Events } from '@/components/landing/Events';
import { Features } from '@/components/landing/Features';
import { Slider } from '@/components/landing/Slider';
import { Workshops } from '@/components/landing/Workshops';

export const MainLayout = () => {
  return (
    <div className='w-full'>
      <Slider />
      <Description />
      <Features />
      <Workshops />
      <Events />
    </div>
  );
};
