import Image from 'next/image';

export const Footer = () => {
  return (
    <div className=' flex h-[80px] w-full items-center justify-between bg-footerGray'>
      <div className='mr-10 w-1/3 text-sm text-gray-600'>
        شبکه آزمایشگاهی فناوری های راهبردی
      </div>

      <div className='flex w-1/3 flex-col items-center   justify-center'>
        <Image
          className='mb-2 size-full min-w-[180px] max-w-[180px] object-cover object-center'
          src='/images/logo/isti.png'
          width={212}
          height={44}
          alt='معاونت علمی و فناوری ریاست جمهوری'
        />
        <p className='text-xs text-gray-600'>
          کلیه حقوق این سایت متعلق به معاونت علمی، فناوری و اقتصاد دانش بنیان
          ریاست جمهوری است.
        </p>
      </div>
      <div className='flex w-1/3 items-center  justify-center'>
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
