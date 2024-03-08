import Image from 'next/image';

export const AppFooter = () => {
  return (
    <footer>
      <section className=' size-full w-full items-center justify-center '>
        <div className='container mx-auto flex  flex-col '>
          <div className='text-gray_1 flex w-full flex-wrap items-start  justify-around py-6 '>
            <div className=' flex w-full px-5 sm:w-[30%]'>
              <Image
                src='/images/logo/f-1.png'
                width={160}
                height={200}
                alt=''
                style={{
                  width: '160px',
                  height: '200px',
                }}
              />
              <Image
                src='/images/logo/f-2.png'
                width={170}
                height={200}
                alt=''
                style={{
                  width: '170px',
                  height: '200px',
                }}
              />
            </div>
            <div className=' w-full px-8 text-base sm:w-[30%]'>
              <ul>
                <li className='py-2 font-bold'>لینک های مهم</li>
                <li className='hover:text-primary-green cursor-pointer py-1'>
                  کارگروه‌های تخصصی
                </li>
                <li className='hover:text-primary-green cursor-pointer py-1'>
                  خدمات پردازش موازی
                </li>
                <li className='hover:text-primary-green cursor-pointer py-1'>
                  فصلنامه دانش آزمایشگاهی ایران
                </li>
                <li className='hover:text-primary-green cursor-pointer py-1'>
                  استاندارد ISO/IEC17025
                </li>
                <li className='hover:text-primary-green cursor-pointer py-1'>
                  حمایت‌های قانون دانش بنیان
                </li>
              </ul>
            </div>
            <div className=' w-full px-8 text-base sm:w-[30%]'>
              <ul>
                <li className='py-2 font-bold'>ارتباط با ما</li>
                <li className='hover:text-primary-green cursor-pointer py-1'>
                  شماره‌ تماس : 66941085-021
                </li>
                <li className='hover:text-primary-green cursor-pointer py-1'>
                  پیامک : 3500 6310 021
                </li>
                <li className='hover:text-primary-green cursor-pointer py-1'>
                  پست الکترونیکی : info @ labsnet.ir
                </li>
                <li className='hover:text-primary-green cursor-pointer py-1'>
                  فکس : 3500 6310 021
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex w-full flex-col items-center justify-center bg-footerGray py-3 sm:flex-row sm:justify-between'>
          <div className=' mr-0 py-2 text-[10px] text-gray-600 sm:order-1 sm:mr-10 sm:w-1/4 sm:py-0 sm:text-xs'>
            شبکه آزمایشگاهی فناوری های راهبردی
          </div>
          <div className=' flex w-full flex-col items-center justify-center py-2  sm:order-2 sm:w-1/2 sm:py-0'>
            <p className='text-center text-[10px] text-gray-600 sm:text-xs'>
              © کلیه حقوق این سایت متعلق به معاونت علمی، فناوری و اقتصاد دانش
              بنیان ریاست جمهوری است.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};
