import {Button} from "@mui/material";
import Image from 'next/image'
import Link from "next/link";

export const Header = () => {
    return (
        <div
            className='flex w-full items-center justify-between bg-white px-10 h-24 sticky top-0 z-10 shadow-[rgba(0,0,30,0.2)_0px_2px_4px_0px]'>
            <div className='header-logo'>
                <Link href="/">
                    <Image
                        src="/images/logo/labsnet.png"
                        width={315}
                        height={47}
                        alt="شبکه آزمایشگاهی فناوری های راهبردی"
                    />
                </Link>
            </div>
            <div className='login-btn'>
                <Button variant="contained">ورود / ثبت نام</Button>
            </div>

        </div>
    )
}