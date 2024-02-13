'use client';

import Image from 'next/image';
import { Comments } from '@/components/comments/Comments';

export default function NewsDetail({
  params,
}: {
  params: {
    id: string;
    title: string;
  };
}) {
  // const { id } = params;
  // const { data, refetch } = useGetNewsItemQuery(+id);
  // useEffect(() => {
  //   refetch().then();
  // }, [params]);
  return (
    <div className='container mx-auto my-5 flex w-full flex-col bg-gray-100 pt-10 '>
      <div className='pb-5'>
        <div className='relative mx-10 mt-5 flex justify-between bg-white p-8'>
          <div className='flex flex-col'>
            <div className='flex items-center justify-center text-darkGray'>
              <div className='ml-2 size-[10px] bg-gray-700' />
              کارگاه جامع آموزشی کار با حیوانات آزمایشگاهی برگزار می‌شود
            </div>
            <div className='text-darkGray'>(۱۴۰۲/۱۱/۱۷)</div>
            <div className='my-2 flex'>
              <div className='m-1 bg-gray-200 p-2 text-xs'>شبکه آزمایشگاهی</div>
              <div className='m-1 bg-gray-200 p-2 text-xs'>آزمایشگاه</div>
            </div>
          </div>
          <div className=''>
            <Image
              className='cursor-pointer'
              src='/images/news/3.jpg'
              width={250}
              height={350}
              alt=''
            />
          </div>
          <div className='absolute -bottom-3 bg-gray-400 p-2 text-sm text-white'>
            تعداد بازدید : ۲۸۹
          </div>
        </div>
        <div className='mt-7 flex flex-col px-10'>
          <div className='text-sm font-thin'>
            آزمایشگاه آزاد نانو زیست فناوری اوژن در راستای افزایش آگاهی
            آموخته‌های مرتبط با علم و دانش مخاطبین کارگاه جامع آموزشی کار با
            حیوانات آزمایشگاهی را برگزار می‌کند.
          </div>
          <hr className='my-4 h-px border-0 bg-gray-300' />
          <div className='flex flex-col items-center justify-center'>
            <div className='mt-0'>
              به گزارش پایگاه خبری شبکه آزمایشگاهی فناوری‌های راهبردی، حیوان
              آزمایشگاهی حیوانی است که از نظر آناتومی و فیزیولوژی بیشترین شباهت
              را به انسان داشته باشد و بتوان بیماری‌های انسانی و موضوعاتی که
              انجام آن روی انسان مقدور نمی‌باشد را روی آن‌ها انجام داد یعنی
              بتوان مراحل آزمایش و درمان یک بیماری را قبل از تست روی انسان، روی
              حیوان بسنجیم. این حیوانات عموما کوچک و کم هزینه هستند و شرایط
              نگهداری آسان دارند. از مهم‌ترین سرفصل‌های این کارگاه می‌توان به
              آناتومی و تشریح اندام‌ها، نگهداری، مراقبت‌های بهداشتی و کنترل
              آفات، تغذیه، تکثیر، پیشگیری و درمان بیماری‌ها، حمل و نقل، تزریقات
              و آسان‌کشی و ملاحظات اخلاقی هنگام کار با حیوانات آزمایشگاهی اشاره
              کرد. تحقیقات حیوانی، دانش و درک ما را از نحوه زیست انسان‌ها و
              حیوانات ارتقا می‌دهند و به ما اجازه می‌دهد تا بیماری‌ها را مطالعه
              کنیم، داروها و درمان‌های جدید را توسعه دهیم و ایمنی داروها و
              درمان‌های جدید را آزمایش کنیم بر همین اساس آزمایشگاه آزاد نانو
              زیست فناوری اوژن کارگاه جامع آموزشی کار با حیوانات آزمایشگاهی را
              بهمن ماه سال جاری برگزار می‌کند. گفتنی است، علاقمندان برای شرکت در
              دوره‌های این مجموعه و یا کسب اطلاعات بیش‌تر درباره کارگاه‌های
              آموزشی می‌توانند به سایت www.ogene-tech.com مراجعه و یا با
              شماره‌های 021-44961487 و 09120169816تماس حاصل کنند و یا از طریق
              واتساپ با شماره 09233093463 با این مجموعه در ارتباط باشند.
            </div>
            <Image
              className='mt-5'
              src='/images/news/main_1.jpg'
              width={600}
              height={400}
              alt=''
            />
          </div>
        </div>
      </div>
      <div className='mx-10 my-5 text-sm'>
        کلمات کلیدی : شبکه آزمایشگاهی فناوری‌های راهبردی
      </div>
      <div className='pt-0'>
        <Comments />
      </div>
    </div>
  );
}
