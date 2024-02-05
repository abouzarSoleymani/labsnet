import Image from "next/image";

export const News = () => {

    const news = [
        {
            image: '/images/news/1.jpg',
            date: '۱۵ بهمن ۱۴۰۲',
            desc: 'کارگاه آموزشی اجرای Real-time Pcr برگزار می‌شود'
        }, {
            image: '/images/news/2.jpg',
            date: '۱۵ بهمن ۱۴۰۲',
            desc: 'کارشناسان برتر- تجربه و توانمندی کارشناسان، ستون اصلی پژوهش‌های کارآمد است'
        }, {
            image: '/images/news/3.jpg',
            date: '۱۴ بهمن ۱۴۰۲',
            desc: 'شیوه نامه مسابقه ایمنی در آزمایشگاه نانو منتشر شد'
        }, {
            image: '/images/news/4.jpg',
            date: '۱۴ بهمن ۱۴۰۲',
            desc: 'عرضه خدمات آزمایشگاهی کارآمد در حوزه «غذا»، «محیط زیست» و «کشاورزی»'
        }, {
            image: '/images/news/5.jpg',
            date: '۱۲ بهمن ۱۴۰۲',
            desc: 'تصویب ۱۶۵مین استاندارد ملی فناوری نانو با عنوان « فناوری نانو - نانولوله‌های کربنی چنددیواره - تعیین میزان ناخالصی کربن با آنالیز گرماوزن سنجی »'
        }, {
            image: '/images/news/6.jpg',
            date: '۱۲ بهمن ۱۴۰۲',
            desc: 'برگزاری کارگاه آموزشی قائده تصمیم‌گیری و بیانیه انطباق بر مبنای استاندارد 17025'
        }, {
            image: '/images/news/7.jpg',
            date: '۱۱ بهمن ۱۴۰۲',
            desc: 'دوره آموزشی عدم قطعیت در اندازه‌گیری برگزار می‌شود'
        }, {
            image: '/images/news/8.jpg',
            date: '۱۱ بهمن ۱۴۰۲',
            desc: 'دانشگاه تبریز: تولید نانوسامانه جدید دارورسانی برای درمان موثرتر سرطان'
        }
    ]
    return (
        <div className="flex flex-col container mx-auto my-20 justify-center items-center">
            <h3 className="font-bold text-darkBlur">
                اخبار و رویدادها
            </h3>
            <div className="w-[250px] h-[2px] bg-lightGray my-4 mb-8"></div>
            <div className="flex flex-wrap justify-center items-start">
                {
                    news.map(item =>
                        (
                            <div className="max-w-[250px] mx-10 my-2">
                                <Image
                                    src={item.image}
                                    width={250}
                                    height={250}
                                    sizes="500px"
                                    className="rounded-md"
                                    alt="Picture of the author"
                                />
                                <div className="text-lightGray text-sm py-2">{item.date}</div>
                                <div className="text-darkGray">{item.desc}</div>
                            </div>
                        )
                    )
                }
            </div>
            <div className="cursor-pointer border-b-2 hover:text-lightGray
            transition ease-in-out delay-150  hover:-translate-x-1 hover:scale-100  duration-300">
                مشاهده ادامه ...
            </div>
        </div>
    )
}