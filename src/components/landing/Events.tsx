import Image from 'next/image';

export const Events = () => {
  return (
    <section className=' size-full w-full items-center justify-center bg-lightGray py-20'>
      <div className='container mx-auto flex w-full flex-col items-center justify-between'>
        <div className='text-primary-green w-full py-4 text-right text-xl font-extrabold'>
          لورم ایپسوم متن ساختگی
        </div>
        <div className='flex w-full flex-wrap items-center justify-between'>
          <div className='flex w-full flex-col items-center justify-center bg-white text-right drop-shadow-lg sm:w-[30%]'>
            <Image
              src='/images/events/1.png'
              className='mt-4'
              width={280}
              height={180}
              style={{ width: '80%' }}
              alt=''
            />
            <div className='w-full px-8 pb-8 pt-4 '>
              <div className='text-primary-green py-2  text-base'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
              </div>
              <div className='text-gray_1 text-base'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </div>
            </div>
          </div>
          <div className='flex  w-full flex-col items-center justify-center bg-white text-right drop-shadow-lg sm:w-[30%]'>
            <Image
              src='/images/events/1.png'
              className='mt-4'
              width={280}
              height={180}
              style={{ width: '80%' }}
              alt=''
            />
            <div className='w-full px-8 pb-8 pt-4 '>
              <div className='text-primary-green py-2  text-base'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
              </div>
              <div className='text-gray_1 text-base'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </div>
            </div>
          </div>
          <div className='flex  w-full flex-col items-center justify-center bg-white text-right drop-shadow-lg sm:w-[30%]'>
            <Image
              src='/images/events/1.png'
              className='mt-4'
              width={280}
              height={180}
              style={{ width: '80%' }}
              alt=''
            />
            <div className='w-full px-8 pb-8 pt-4 '>
              <div className='text-primary-green py-2  text-base'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
              </div>
              <div className='text-gray_1 text-base'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
