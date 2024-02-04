import {CarouselSlider} from "@/components/CarouselSlider";
import Image from 'next/image'

export const MainSlider = () => {
    const slides = [
        "/images/slider/1.jpg",
        "/images/slider/3.png",
    ]
    return (
        <div className="flex justify-center items-center h-[500px]  w-full">
            <div className="w-[1000px] relative">
                <CarouselSlider autoSlide={true}>
                    {[...slides.map((s) => (
                        <Image
                            key={s}
                            src={s}
                            width={0}
                            height={500}
                            sizes="500px"
                            className="w-full h-auto"
                            alt="Picture of the author"
                        />
                    ))]}
                </CarouselSlider>

            </div>
        </div>
    )

}