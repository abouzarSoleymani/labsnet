import { Button } from '@mui/material';

export const Features = () => {
  return (
    <section className=' size-full w-full items-center justify-center py-20'>
      <div className='container mx-auto flex flex-wrap '>
        <div className='mb-6 flex w-full flex-col  items-start justify-start px-6 sm:mb-0 sm:w-[50%] sm:px-0'>
          <div className='py-2 text-lg font-extrabold text-primary-green-800 '>
            خدمات و حمایت ها
          </div>
          <div className='w-[160px] border-b-8 border-solid border-primary-green-800 ' />
          <ul className='pt-8'>
            <li className='flex items-center py-2'>
              <div className='size-[14px] bg-primary-green-400' />
              <div className='px-2 text-gray_1'>توانمند سازی آزمایشگاه ها</div>
            </li>
            <li className='flex items-center py-2'>
              <div className='size-[14px] bg-primary-green-400' />
              <div className='px-2 text-gray_1'>
                باشگاه مشتریان و تخفیف خدمات
              </div>
            </li>
            <li className='flex items-center py-2'>
              <div className='size-[14px] bg-primary-green-400' />
              <div className='px-2 text-gray_1'>عضویت ازمایشگاه ها</div>
            </li>
            <li className='flex items-center py-2'>
              <div className='size-[14px] bg-primary-green-400' />
              <div className='px-2 text-gray_1'>شبکه سازی توانمندی ها</div>
            </li>
            <li className='flex items-center py-2'>
              <div className='size-[14px] bg-primary-green-400' />
              <div className='px-2 text-gray_1'>
                حمایت از خرید تجهیزات آزمایشگاهی داخلی و خارجی
              </div>
            </li>
            <li className='flex items-center py-2'>
              <div className='size-[14px] bg-primary-green-400' />
              <div className='px-2 text-gray_1'>
                کمک به تکمیل توانمندی‌های آزمایشگاهی مراکز
              </div>
            </li>
          </ul>
        </div>

        <div className=' mb-6 flex w-full flex-col  px-6 sm:mb-0 sm:w-[50%] sm:px-0'>
          <div className='py-2 text-lg font-extrabold text-primary-green-800 '>
            لورم ایپسوم
          </div>
          <div className='pb-6 text-base text-gray_1'>
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
