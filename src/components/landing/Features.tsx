import { Button } from '@mui/material';

export const Features = () => {
  return (
    <section className=' size-full w-full items-center justify-center py-20'>
      <div className='container mx-auto flex flex-wrap '>
        <div className='mb-6 flex w-full flex-col  items-start justify-start sm:mb-0 sm:w-[50%]'>
          <div className='text-primary-green-800 py-2 text-lg font-extrabold '>
            خدمات و حمایت ها
          </div>
          <div className='border-primary-green-800 w-[160px] border-b-8 border-solid ' />
          <ul className='pt-8'>
            <li className='flex items-center py-2'>
              <div className='bg-primary-green-400 size-[14px]' />
              <div className='text-gray_1 px-2'>توانمند سازی آزمایشگاه ها</div>
            </li>
            <li className='flex items-center py-2'>
              <div className='bg-primary-green-400 size-[14px]' />
              <div className='text-gray_1 px-2'>
                باشگاه مشتریان و تخفیف خدمات
              </div>
            </li>
            <li className='flex items-center py-2'>
              <div className='bg-primary-green-400 size-[14px]' />
              <div className='text-gray_1 px-2'>عضویت ازمایشگاه ها</div>
            </li>
            <li className='flex items-center py-2'>
              <div className='bg-primary-green-400 size-[14px]' />
              <div className='text-gray_1 px-2'>شبکه سازی توانمندی ها</div>
            </li>
          </ul>
        </div>

        <div className=' mb-6 flex w-full flex-col  sm:mb-0 sm:w-[50%]'>
          <div className='text-primary-green-800 py-2 text-lg font-extrabold '>
            لورم ایپسوم
          </div>
          <div className='text-gray_1 pb-6 text-base'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </div>
          <Button
            href='https://tech.pido.co.ir/login'
            className='!w-[150px] !text-white'
            variant='contained'
          >
            امروز ثبت نام کنید
          </Button>
        </div>
      </div>
    </section>
  );
};
