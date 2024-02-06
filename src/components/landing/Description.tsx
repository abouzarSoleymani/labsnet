export const Description = () => {
    return (
        <div className='main-description flex w-full flex-wrap items-center justify-center bg-gray-100 py-16'>
            <div className='description  mx-40 sm:w-full md:w-full  lg:w-[400px] xl:w-[400px] 2xl:w-[550px]'>
                <h3 className='font-bold text-darkBlur'>
                    شبکه آزمایشگاهی فناوری های راهبردی
                </h3>
                <div className='my-4 h-[2px] w-[250px] bg-lightGray'/>
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
            <div className='video sm:w-[80%] md:w-[80%] lg:w-[600px] xl:w-[700px]  2xl:w-[550px]'>
                <video width='100%' height='240' controls preload='none'>
                    <source src='/video/video.mp4' type='video/mp4'/>
                    Your browser does not support the video tag.
                    <track src='' kind='captions' srcLang='fa' label=''/>
                </video>
            </div>
        </div>
    );
};
