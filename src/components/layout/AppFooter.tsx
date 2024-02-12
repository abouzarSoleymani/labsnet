import Image from 'next/image';

export const AppFooter = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center bg-footerGray py-3 sm:flex-row sm:justify-between'>
      <div className=' order-1 mr-0 py-2 text-[10px] text-gray-600 sm:order-1 sm:mr-10 sm:w-1/4 sm:py-0 sm:text-xs'>
        شبکه آزمایشگاهی فناوری های راهبردی
      </div>

      <div className='order-3 flex w-full flex-col items-center justify-center py-2  sm:order-2 sm:w-1/2 sm:py-0'>
        <Image
          className='mb-2 size-full min-w-[180px] max-w-[180px] object-cover object-center'
          src='/images/logo/isti.png'
          width={212}
          height={44}
          alt='معاونت علمی و فناوری ریاست جمهوری'
        />
        <p className='text-center text-[10px] text-gray-600 sm:text-xs'>
          کلیه حقوق این سایت متعلق به معاونت علمی، فناوری و اقتصاد دانش بنیان
          ریاست جمهوری است.
        </p>
      </div>
      <div className='order-2 flex w-full items-center  justify-center sm:order-3 sm:w-1/4'>
        <div className='rounded-md border-2 bg-white p-1 '>
          <Image
            className=' cursor-pointer'
            src='/images/icons/bale.png'
            width={29}
            height={28}
            alt=''
          />
        </div>
        <div className='rounded-md border-2 bg-white p-1 '>
          <Image
            className=' cursor-pointer'
            src='/images/icons/ins.png'
            width={29}
            height={28}
            alt=''
          />
        </div>
        <div className='rounded-md border-2 bg-white p-1 '>
          <Image
            className=' cursor-pointer'
            src='/images/icons/lin.png'
            width={29}
            height={28}
            alt=''
          />
        </div>
        <div className='rounded-md border-2 bg-white p-1 '>
          <Image
            className=' cursor-pointer'
            src='/images/icons/tel.png'
            width={29}
            height={28}
            alt=''
          />
        </div>
      </div>
    </div>
  );
};
