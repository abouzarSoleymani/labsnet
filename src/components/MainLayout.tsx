import {Header} from "@/components/Header";
import {MainSlider} from "@/components/MainSlider";
import {MainDescription} from "@/components/MainDescription";
import {News} from "@/components/News";
import {Footer} from "@/components/Footer";

export const MainLayout = () => {
    return (
        <div className="main-container w-full">
            <Header/>
            <MainSlider/>
            <MainDescription/>
            <News/>
            <Footer/>
        </div>
    )
}