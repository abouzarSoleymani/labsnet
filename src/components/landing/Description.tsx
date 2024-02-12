export const Description = () => {
  return (
    <div className='flex w-full flex-wrap items-center justify-center bg-gray-100 py-16'>
      <div className='mx-10  w-full md:w-[550px]'>
        <h3 className='font-bold text-darkBlur'>
          شبکه آزمایشگاهی فناوری های راهبردی
        </h3>
        <div className='my-4 h-[2px] w-[250px] bg-lightGray' />
        <p className='text-darkGray'>
          شبکه آزمایشگاهی، با هدف افزایش بهره وری زیرساخت های آزمایشگاهی کشور،
          پلتفرم به اشتراک گذاری دستگاه ها و ارایه خدمات آزمایشگاهی و حمایت از
          توسعه کمی و بهبود کیفی خدمات آزمایشگاهی را راه اندازی کرده است. باشگاه
          مشتریان شبکه آزمایشگاهی نیز با ارایه پژوهانه و یارانه های متنوع به
          اعضای هیئت علمی و دانشجویان دریافت خدمات از مراکز عضو شبکه را تسهیل
          کرده است. در این شبکه خدمات آزمایشگاهی متنوعی مانند حوزه های فنی و
          مهندسی همچون مکانیک، مواد و متالورژی، برق و الکترونیک، شیمی، هوا فضا،
          معدن؛ حوزه محیط زیست، کشاورزی و گیاهان دارویی؛ حوزه های زیست فناوری و
          پزشکی مانند داروسازی، سلول های بنیادی، مهندسی بافت؛ حوزه های علوم
          شناختی و مغز؛ صنایع دستی، مواد غذایی و غیره، ارایه می‌شود.
        </p>
      </div>
      <div className='mt-10 w-[80%] md:w-[550px] lg:mt-0'>
        <video width='100%' height='240' controls preload='none'>
          <source src='/video/video.mp4' type='video/mp4' />
          Your browser does not support the video tag.
          <track src='' kind='captions' srcLang='fa' label='' />
        </video>
      </div>
    </div>
  );
};