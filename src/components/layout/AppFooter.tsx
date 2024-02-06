import Image from 'next/image';

export const AppFooter = () => {
    return (
        <div
            className='flex flex-col sm:flex-row w-full items-center justify-center sm:justify-between bg-footerGray py-3'>
            <div
                className=' sm:w-1/4 text-[10px] sm:text-xs text-gray-600 mr-0 sm:mr-10 py-2 sm:py-0 order-1 sm:order-1'>
                شبکه آزمایشگاهی فناوری های راهبردی
            </div>

            <div className='flex w-full sm:w-1/2 flex-col items-center py-2 sm:py-0  justify-center order-3 sm:order-2'>
                <Image
                    className='mb-2 size-full min-w-[180px] max-w-[180px] object-cover object-center'
                    src='/images/logo/isti.png'
                    width={212}
                    height={44}
                    alt='معاونت علمی و فناوری ریاست جمهوری'
                />
                <p className='text-[10px] sm:text-xs text-gray-600 text-center'>
                    کلیه حقوق این سایت متعلق به معاونت علمی، فناوری و اقتصاد دانش بنیان
                    ریاست جمهوری است.
                </p>
            </div>
            <div className='flex w-full sm:w-1/4 items-center  justify-center order-2 sm:order-3'>
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
