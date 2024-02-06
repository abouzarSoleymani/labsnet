'use client';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Image from 'next/image';
import type {Settings} from 'react-slick';
import Slider from 'react-slick';

type ImageSlide = {
    alt: string;
    image: any;
};
const dataImageSlide: ImageSlide[] = [
    {
        alt: '',
        image: '/images/slider/2.jpg',
    },
    {
        alt: '',
        image: '/images/slider/3.png',
    },
    {
        alt: '',
        image: '/images/slider/4.jpg',
    },
    {
        alt: '',
        image: '/images/slider/5.jpg',
    },
    {
        alt: '',
        image: '/images/slider/6.jpg',
    },
];

const Prev = (props: any) => {
    const {onClick} = props;
    return (
        <button
            onClick={onClick}
            type='button'
            aria-label='Prev'
            className='bg-background/20 hover:bg-background/30 absolute left-5 top-1/2 z-10 flex w-fit items-center justify-center rounded-full p-1 text-primary opacity-0 shadow-md lg:opacity-100'
        >
            <ArrowBackIosIcon width={40} height={40} fill='white' strokeWidth={2}/>
        </button>
    );
};

const Next = (props: any) => {
    const {onClick} = props;
    return (
        <button
            onClick={onClick}
            type='button'
            aria-label='Next'
            className='bg-background/20 hover:bg-background/30 absolute right-5 top-1/2 z-10 flex w-fit items-center justify-center rounded-full p-1 text-primary opacity-0 shadow-md lg:opacity-100'
        >
            <ArrowBackIosIcon
                width={40}
                height={40}
                fill='white'
                strokeWidth={2}
                style={{transform: 'rotate(180deg)'}}
            />
        </button>
    );
};

export const Carousel = () => {
    const settings: Settings = {
        autoplaySpeed: 3500,
        fade: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        pauseOnFocus: false,
        prevArrow: <Prev/>,
        nextArrow: <Next/>,
    };
    return (
        <div className='my-10 flex  justify-center'>
            <div className='sm:w-full  md:w-full  lg:w-full xl:w-[1280px] 2xl:w-[1536px]'>
                <Slider {...settings}>
                    {dataImageSlide?.map(slide => (
                        <div
                            key={slide.alt}
                            className='relative flex  justify-center  overflow-hidden sm:w-full md:h-[350px] lg:h-[500px] 2xl:w-[1024px]'
                        >
                            <Image
                                className='size-full   object-cover object-center'
                                src={slide.image}
                                layout='fill'
                                fill
                                alt={slide.alt}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};
