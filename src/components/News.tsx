import Image from 'next/image';

export const News = () => {
  const news = [
    {
      image: '/images/news/1.jpg',
      date: '۱۵ بهمن ۱۴۰۲',
      desc: 'کارگاه آموزشی اجرای Real-time Pcr برگزار می‌شود',
    },
    {
      image: '/images/news/2.jpg',
      date: '۱۵ بهمن ۱۴۰۲',
      desc: 'کارشناسان برتر- تجربه و توانمندی کارشناسان، ستون اصلی پژوهش‌های کارآمد است',
    },
    {
      image: '/images/news/3.jpg',
      date: '۱۴ بهمن ۱۴۰۲',
      desc: 'شیوه نامه مسابقه ایمنی در آزمایشگاه نانو منتشر شد',
    },
    {
      image: '/images/news/4.jpg',
      date: '۱۴ بهمن ۱۴۰۲',
      desc: 'عرضه خدمات آزمایشگاهی کارآمد در حوزه «غذا»، «محیط زیست» و «کشاورزی»',
    },
    {
      image: '/images/news/5.jpg',
      date: '۱۲ بهمن ۱۴۰۲',
      desc: 'تصویب ۱۶۵مین استاندارد ملی فناوری نانو با عنوان « فناوری نانو - نانولوله‌های کربنی چنددیواره - تعیین میزان ناخالصی کربن با آنالیز گرماوزن سنجی »',
    },
    {
      image: '/images/news/6.jpg',
      date: '۱۲ بهمن ۱۴۰۲',
      desc: 'برگزاری کارگاه آموزشی قائده تصمیم‌گیری و بیانیه انطباق بر مبنای استاندارد 17025',
    },
    {
      image: '/images/news/7.jpg',
      date: '۱۱ بهمن ۱۴۰۲',
      desc: 'دوره آموزشی عدم قطعیت در اندازه‌گیری برگزار می‌شود',
    },
    {
      image: '/images/news/8.jpg',
      date: '۱۱ بهمن ۱۴۰۲',
      desc: 'دانشگاه تبریز: تولید نانوسامانه جدید دارورسانی برای درمان موثرتر سرطان',
    },
  ];
  return (
    <div className='container mx-auto my-20 flex flex-col items-center justify-center'>
      <h3 className='font-bold text-darkBlur'>اخبار و رویدادها</h3>
      <div className='my-4 mb-8 h-[2px] w-[250px] bg-lightGray' />
      <div className='flex flex-wrap items-start justify-center'>
        {news.map(item => (
          <div className='mx-10 my-2 max-w-[250px]' key={item.image}>
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
            <div className='text-darkGray'>{item.desc}</div>
          </div>
        ))}
      </div>
      <div
        className='cursor-pointer border-b-2 transition
            delay-150 duration-300 ease-in-out  hover:-translate-x-1 hover:scale-100  hover:text-lightGray'
      >
        مشاهده ادامه ...
      </div>
    </div>
  );
};
