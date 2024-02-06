'use client'
import Slider, {Settings} from "react-slick";
import Image from 'next/image'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

type ImageSlide = {
    alt: string
    image: any
}
const dataImageSlide: ImageSlide[] = [
    {
        alt: "",
        image: "/images/slider/2.jpg",
    },
    {
        alt: "",
        image: "/images/slider/3.png",
    },
    {
        alt: "",
        image: "/images/slider/4.jpg",
    },
    {
        alt: "",
        image: "/images/slider/5.jpg",
    },
    {
        alt: "",
        image: "/images/slider/6.jpg",
    },
]
export const MainSlider = () => {
    
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
    }
    return (
        <div className="flex w-full justify-center my-10">
            <div className="2xl:w-[1536px]  xl:w-[1280px] lg:w-[1024px] md:w-full sm:w-full">
                <Slider {...settings}>
                    {dataImageSlide?.map((slide) => (
                        <div
                            key={slide.alt}
                            className="2xl:w-[1024px] h-[240px] md:h-[350px] lg:h-[500px]  sm:w-full overflow-hidden relative flex justify-center"
                        >
                            <Image
                                className="w-full   h-full object-cover object-center"
                                src={slide.image}
                                width={500}
                                height={500}
                                alt={slide.alt}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )

}

const Prev = (props: any) => {
    const {onClick} = props
    return (
        <button
            onClick={onClick}
            className={`w-fit top-1/2 opacity-0 lg:opacity-100 text-primary flex items-center justify-center rounded-full bg-background/20 hover:bg-background/30 p-1 shadow-md absolute z-10 left-5`}
        >
            <ArrowBackIosIcon width={40} height={40} fill="white" strokeWidth={2}
            />
        </button>
    )
}

const Next = (props: any) => {
    const {onClick} = props
    return (
        <button
            onClick={onClick}
            className={`w-fit top-1/2 opacity-0 lg:opacity-100 text-primary flex items-center justify-center rounded-full bg-background/20 hover:bg-background/30 p-1 shadow-md absolute z-10 right-5`}
        >
            <ArrowBackIosIcon width={40} height={40} fill="white" strokeWidth={2}
                              style={{transform: 'rotate(180deg)'}}/>
        </button>
    )
}