const slides = [
  {
    id: 1,
    title: ' لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
    description:
      '            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با\n' +
      '            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در\n' +
      '            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و\n' +
      '            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی\n' +
      '            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را\n' +
      '            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی\n' +
      '            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.',
    button: 'موارد بیشتر',
  },
  {
    id: 2,
    title: ' لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
    description:
      '            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با\n' +
      '            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در\n' +
      '            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و\n' +
      '            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی\n' +
      '            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را\n' +
      '            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی\n' +
      '            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. ',
    button: 'موارد بیشتر',
  },
  {
    id: 3,
    title: ' لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
    description:
      '            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با\n' +
      '            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در\n' +
      '            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و\n' +
      '            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی\n' +
      '            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را\n' +
      '            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی\n' +
      '            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. ',
    button: 'موارد بیشتر',
  },
];

export const Slider = () => {
  return (
    <section className='relative mx-auto  flex w-[100%]  flex-col   items-center justify-center bg-lightGray'>
      <div
        className='size-full pt-52 grayscale'
        style={{
          height: '550px',
          background: `url(/images/slide/main-slide.jpg) center center / cover scroll no-repeat`,
        }}
      />
      <div className='container  z-10 -mt-72 flex w-full  flex-wrap items-center justify-between'>
        {slides.map(slide => (
          <div
            key={slide?.id}
            className='mx-8 my-0 mb-8 w-full bg-white px-10 py-12 drop-shadow-lg  sm:mx-0 sm:mb-0 sm:w-[31%] '
          >
            <div className='font-extrabold text-primary-green'>
              {slide?.title}
            </div>
            <div className='py-2'>{slide?.description}</div>
            <div className='flex items-center justify-start pt-8 text-primary-green'>
              {slide?.button}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
