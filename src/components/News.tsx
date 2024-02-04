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
        <div className="flex flex-col container mx-auto my-20  ">
            <h3 className="mb-2">
                اخبار و رویدادها
            </h3>
            <div className="flex flex-wrap justify-center items-center">
                {
                    news.map(item =>
                        (
                            <div className="max-w-[250px] mx-10">
                                <Image
                                    src={item.image}
                                    width={250}
                                    height={250}
                                    sizes="500px"
                                    alt="Picture of the author"
                                />
                                <div>{item.date}</div>
                                <div>{item.desc}</div>
                            </div>
                        )
                    )
                }


            </div>
        </div>
    )
}