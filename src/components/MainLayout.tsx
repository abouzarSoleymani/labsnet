import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { MainDescription } from '@/components/MainDescription';
import { MainSlider } from '@/components/MainSlider';
import { News } from '@/components/News';

export const MainLayout = () => {
  return (
    <div className='main-container w-full'>
      <Header />
      <MainSlider />
      <MainDescription />
      <News />
      <Footer />
    </div>
  );
};
