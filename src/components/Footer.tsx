import Image from "next/image";

export const Footer = () => {
    return (
        <div className=" w-full h-[80px] bg-footerGray flex justify-between items-center">
            <div className="text-sm text-gray-600 mr-10 w-1/3">
                شبکه آزمایشگاهی فناوری های راهبردی
            </div>

            <div className="flex justify-center items-center flex-col   w-1/3">
                <Image
                    className="w-full h-full object-cover object-center min-w-[180px] max-w-[180px] mb-2"
                    src='/images/logo/isti.png'
                    width={212}
                    height={44}
                    alt='معاونت علمی و فناوری ریاست جمهوری'
                />
                <p className="text-xs text-gray-600">کلیه حقوق این سایت متعلق به معاونت علمی، فناوری و اقتصاد دانش بنیان
                    ریاست جمهوری است.</p>
            </div>
            <div className="flex justify-center items-center  w-1/3">
                <div className="bg-white border-2 rounded-md p-1 ">
                    <Image
                        className=" cursor-pointer"
                        src='/images/icons/bale.png'
                        width={29}
                        height={28}
                        alt=''
                    />
                </div>
                <div className="bg-white border-2 rounded-md p-1 ">
                    <Image
                        className=" cursor-pointer"
                        src='/images/icons/ins.png'
                        width={29}
                        height={28}
                        alt=''
                    />
                </div>
                <div className="bg-white border-2 rounded-md p-1 ">
                    <Image
                        className=" cursor-pointer"
                        src='/images/icons/lin.png'
                        width={29}
                        height={28}
                        alt=''
                    />
                </div>
                <div className="bg-white border-2 rounded-md p-1 ">
                    <Image
                        className=" cursor-pointer"
                        src='/images/icons/tel.png'
                        width={29}
                        height={28}
                        alt=''
                    />
                </div>
            </div>


        </div>
    )
}