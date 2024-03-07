import Image from 'next/image';

export const Description = () => {
  return (
    <section className='flex size-full items-center justify-center bg-lightGray py-32'>
      <div className='container w-full '>
        <div className='flex w-full flex-wrap items-center justify-between'>
          <div className='mb-8 flex w-full flex-col items-start justify-center bg-white px-14 py-10 drop-shadow-lg sm:mb-0 sm:w-[48%]'>
            <Image
              src='/images/description/lab-illustration.png'
              alt=''
              width={105}
              height={105}
              style={{ width: '105px ', height: '105px' }}
            />
            <div className='py-1 text-sm font-light'>
              شبکه آزمایشگاهی فناوری های راهبردی
            </div>
            <div className='py-2 font-extrabold'>لورم ایپسوم متن ساختگی</div>
            <div className='pb-10 text-base'>
              شبکه آزمایشگاهی، با هدف افزایش بهره وری زیرساخت های آزمایشگاهی
              کشور، پلتفرم به اشتراک گذاری دستگاه ها و ارایه خدمات آزمایشگاهی و
              حمایت از توسعه کمی و بهبود کیفی خدمات آزمایشگاهی را راه اندازی
              کرده است. باشگاه مشتریان شبکه آزمایشگاهی نیز با ارایه پژوهانه و
              یارانه های متنوع به اعضای هیئت علمی و دانشجویان دریافت خدمات از
              مراکز عضو شبکه را تسهیل کرده است. در این شبکه خدمات آزمایشگاهی
              متنوعی مانند حوزه های فنی و مهندسی همچون مکانیک، مواد و متالورژی،
              برق و الکترونیک، شیمی، هوا فضا، معدن؛ حوزه محیط زیست، کشاورزی و
              گیاهان دارویی؛ حوزه های زیست فناوری و پزشکی مانند داروسازی، سلول
              های بنیادی، مهندسی بافت؛ حوزه های علوم شناختی و مغز؛ صنایع دستی،
              مواد غذایی و غیره، ارایه می‌شود.
            </div>
            <div className='text-primary-green flex items-center justify-start '>
              <div> شبکه آزمایشگاهی فناوری های راهبردی</div>
              <Image
                src='/images/icons/arrow-right.svg'
                className='mr-2 rotate-180'
                width={25}
                height={15}
                alt=''
                style={{ width: '25px', height: '15px' }}
              />
            </div>
          </div>
          <div className='mb-8 flex  w-full flex-col items-start justify-center bg-white  px-14 py-10 drop-shadow-lg sm:mb-0 sm:w-[48%]'>
            <Image
              src='/images/description/person-illustration.png'
              alt=''
              width={105}
              height={105}
              style={{ width: '105px ', height: '105px' }}
            />
            <div className='py-1 text-sm font-light'>لورم ایپسوم</div>
            <div className='py-2 font-extrabold'>لورم ایپسوم متن ساختگی</div>
            <div className='pb-10 text-base'>
              شبکه آزمایشگاهی، با هدف افزایش بهره وری زیرساخت های آزمایشگاهی
              کشور، پلتفرم به اشتراک گذاری دستگاه ها و ارایه خدمات آزمایشگاهی و
              حمایت از توسعه کمی و بهبود کیفی خدمات آزمایشگاهی را راه اندازی
              کرده است. باشگاه مشتریان شبکه آزمایشگاهی نیز با ارایه پژوهانه و
              یارانه های متنوع به اعضای هیئت علمی و دانشجویان دریافت خدمات از
              مراکز عضو شبکه را تسهیل کرده است. در این شبکه خدمات آزمایشگاهی
              متنوعی مانند حوزه های فنی و مهندسی همچون مکانیک، مواد و متالورژی،
              برق و الکترونیک، شیمی، هوا فضا، معدن؛ حوزه محیط زیست، کشاورزی و
              گیاهان دارویی؛ حوزه های زیست فناوری و پزشکی مانند داروسازی، سلول
              های بنیادی، مهندسی بافت؛ حوزه های علوم شناختی و مغز؛ صنایع دستی،
              مواد غذایی و غیره، ارایه می‌شود.
            </div>
            <div className='text-primary-green flex items-center justify-start '>
              <div> لورم ایپسوم متن ساختگی</div>
              <Image
                src='/images/icons/arrow-right.svg'
                className='mr-2 rotate-180'
                width={25}
                height={15}
                alt=''
                style={{ width: '25px', height: '15px' }}
              />
            </div>
          </div>
        </div>

        <div className='text-primary-green flex flex-col items-center justify-center px-10  pt-12  sm:px-36 sm:pt-20'>
          <div className='border-primary-green-800 w-[160px] border-b-8 border-solid ' />
          <div className='py-8 text-center text-2xl'>
            شبکه آزمایشگاهی، با هدف افزایش بهره وری زیرساخت های آزمایشگاهی کشور،
            پلتفرم به اشتراک گذاری دستگاه ها و ارایه خدمات آزمایشگاهی و حمایت از
            توسعه کمی و بهبود کیفی خدمات آزمایشگاهی را راه اندازی کرده است.
            باشگاه مشتریان شبکه آزمایشگاهی نیز با ارایه پژوهانه و یارانه های
            متنوع به اعضای هیئت علمی و دانشجویان دریافت خدمات از مراکز عضو شبکه
            را تسهیل کرده است.
          </div>
        </div>
      </div>
    </section>
  );
};
