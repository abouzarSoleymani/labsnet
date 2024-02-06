import {Footer} from '@/components/landing/Footer';
import {Header} from '@/components/landing/Header';
import {Description} from '@/components/landing/Description';
import {Carousel} from '@/components/landing/Carousel';
import {News} from '@/components/landing/News';

export const MainLayout = () => {
    return (
        <div className='main-container w-full'>
            <Header/>
            <Carousel/>
            <Description/>
            <News/>
            <Footer/>
        </div>
    );
};
