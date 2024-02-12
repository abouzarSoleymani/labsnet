import Image from 'next/image';
import Link from "next/link";

export const News = () => {
    const news = [
        {
            id: 1,
            image: '/images/news/1.jpg',
            date: '۱۵ بهمن ۱۴۰۲',
            title: 'کارگاه آموزشی اجرای Real-time Pcr برگزار می‌شود',
        },
        {
            id: 2,
            image: '/images/news/2.jpg',
            date: '۱۵ بهمن ۱۴۰۲',
            title: 'کارشناسان برتر- تجربه و توانمندی کارشناسان، ستون اصلی پژوهش‌های کارآمد است',
        },
        {
            id: 3,
            image: '/images/news/3.jpg',
            date: '۱۴ بهمن ۱۴۰۲',
            title: 'شیوه نامه مسابقه ایمنی در آزمایشگاه نانو منتشر شد',
        },
        {
            id: 4,
            image: '/images/news/4.jpg',
            date: '۱۴ بهمن ۱۴۰۲',
            title: 'عرضه خدمات آزمایشگاهی کارآمد در حوزه «غذا»، «محیط زیست» و «کشاورزی»',
        },
        {
            id: 5,
            image: '/images/news/5.jpg',
            date: '۱۲ بهمن ۱۴۰۲',
            title: 'تصویب ۱۶۵مین استاندارد ملی فناوری نانو با عنوان « فناوری نانو - نانولوله‌های کربنی چنددیواره - تعیین میزان ناخالصی کربن با آنالیز گرماوزن سنجی »',
        },
        {
            id: 6,
            image: '/images/news/6.jpg',
            date: '۱۲ بهمن ۱۴۰۲',
            title: 'برگزاری کارگاه آموزشی قائده تصمیم‌گیری و بیانیه انطباق بر مبنای استاندارد 17025',
        },
        {
            id: 7,
            image: '/images/news/7.jpg',
            date: '۱۱ بهمن ۱۴۰۲',
            title: 'دوره آموزشی عدم قطعیت در اندازه‌گیری برگزار می‌شود',
        },
        {
            id: 8,
            image: '/images/news/8.jpg',
            date: '۱۱ بهمن ۱۴۰۲',
            title: 'دانشگاه تبریز: تولید نانوسامانه جدید دارورسانی برای درمان موثرتر سرطان',
        },
    ];
    return (
        <div className='container mx-auto my-20 flex flex-col items-center justify-center'>
            <h3 className='font-bold text-darkBlur'>اخبار و رویدادها</h3>
            <div className='my-4 mb-8 h-[2px] w-[250px] bg-lightGray'/>
            <div className='flex flex-wrap items-start justify-center'>
                {news.map(item => (
                    <div className='mx-10 my-2 max-w-[250px]' key={item.image}>

                        <Link href={`/news/${item.id}/${item.title.replace(/\s+/g, '-')}`}>
                            <Image
                                key={item.image}
                                src={item.image}
                                width={250}
                                height={250}
                                sizes='500px'
                                className='rounded-md'
                                alt='Picture of the author'
                            />
                            <div className='py-2 text-sm text-lightGray'>{item.date}</div>
                            <div className='text-darkGray'>{item.title}</div>

                        </Link>
                    </div>
                ))}
            </div>
            <div
                className='mt-8 cursor-pointer border-b-2 transition
            delay-150 duration-300 ease-in-out  hover:-translate-x-1 hover:scale-100  hover:text-lightGray'
            >
                مشاهده ادامه ...
            </div>
        </div>
    );
};
