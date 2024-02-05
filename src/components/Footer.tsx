import Image from "next/image";

export const Footer = () => {
    return (
        <div className=" w-full h-[80px] bg-footerGray flex justify-between items-center">
            <div className="flex justify-center items-center flex-col mr-40">
                <Image
                    className="w-full h-full object-cover object-center min-w-[180px] mb-1"
                    src='/images/logo/isti.png'
                    width={212}
                    height={44}
                    alt='معاونت علمی و فناوری ریاست جمهوری'
                />
                <p className="text-xs text-gray-600">معاونت علمی و فناوری ریاست جمهوری</p>
            </div>
            <div className="flex ml-10">
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