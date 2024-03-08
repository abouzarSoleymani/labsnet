import Image from 'next/image';

export const Workshops = () => {
  return (
    <section className=' size-full w-full items-center justify-center py-20'>
      <div className='container mx-auto flex w-full   '>
        <div className='flex w-full flex-wrap justify-between'>
          <div className='mb-8 flex  w-full flex-col items-start justify-start bg-white p-12   drop-shadow-lg sm:mb-0 sm:w-[48%]'>
            <div className='py-2 text-xl font-extrabold text-primary-green-800'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            </div>
            <div className='py-3 text-sm text-gray_1'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </div>
            <Image
              width={100}
              height={250}
              sizes='100vw'
              style={{ width: '100%', height: '380px' }}
              src='/images/workshops/microbiology.jpg'
              alt=''
            />
          </div>
          <div className='mb-8 flex   w-full flex-col items-start justify-start bg-white p-12 drop-shadow-lg  sm:mb-0 sm:w-[48%]'>
            <div className='py-2  text-xl font-extrabold text-primary-green-800'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            </div>
            <div className='py-3 text-sm text-gray_1'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </div>
            <div className='flex w-full flex-wrap items-center justify-center'>
              {Array.from(Array(9).keys()).map(item => (
                <div
                  className='my-6 flex flex-col items-center justify-center'
                  key={item}
                >
                  <Image
                    className='mx-8  !rounded-full  border-2 border-solid border-gray-200 '
                    width={60}
                    height={60}
                    src='/images/workshops/avatar.jpg'
                    alt=''
                  />
                  <div className='pt-2 text-sm text-gray_1'>Fab Lab Modica</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
