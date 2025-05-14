import { useNavigate, useParams } from "react-router-dom";
import { IAlcoholList } from "@/types/alcohol/IAlcoholList";
import alcoholList from "../database/alcoholList.json"
import ArrowLeftIcon from "@/components/ui/arrows/ArrowLeftIcon";
import StarDivider from "@/components/StarDivider";

export const AlcoholHistory = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const alcohol: IAlcoholList | undefined = alcoholList.find((item) => item.id === id);

    if(!alcohol) {
        return <div>Alcohol not found!</div>;
    }
    console.log(alcohol.id)
    return (
        <div>
            <div className="hidden md:block max-w-[1400px] mx-auto relative">
                <button onClick={() => navigate(-1)} className="text-white transition-colors absolute top-[5%] left-[5%]">
                    <ArrowLeftIcon className="w-11 h-11"/>
                </button>
                <div className="flex flex-col gap-2 items-center absolute top-[35%] right-[10%]">
                    <span className="uppercase text-white font-bold md:text-[36px] xl:text-[48px] font-display-georgia md:tracking-[0.18em]">{alcohol.title}</span>
                    <div className="w-25 h-0.25 bg-white"></div>
                </div> 
                <img src={`/assets/images/alcoholHistory/${alcohol.id}1.png`} alt={`${alcohol.title}`} className=""/>
                <StarDivider variant="dark" className="my-12"/>
            </div>
            <div className="container">
                <div className="md:hidden">
                    <div className="flex justify-between mt-6 mb-12">
                        <button onClick={() => navigate(-1)} className="text-black transition-colors">
                            <ArrowLeftIcon className="w-7 h-7"/>
                        </button>
                        <div className="flex flex-col items-center gap-2">
                            <span className="uppercase text-primary font-bold text-[16px] font-display-georgia tracking-[0.1em]">{alcohol.title}</span>
                            <div className="w-12 h-0.25 bg-primary"></div>
                        </div>
                        <div className="w-7 h-7"></div>
                    </div>
                    <StarDivider variant="dark"/>
                    <img src={`/assets/images/alcoholHistory/${alcohol.id}1.png`} alt={`${alcohol.title}`} className="mt-12"/>
                </div>
                <div className="flex flex-col gap-4 mb-12">
                    <h2 className="uppercase text-primary font-bold text-4 md:text-[20px] xl:text-[24px] font-display-georgia tracking-[0.1em]">що таке {alcohol.title}? </h2>
                    <p className="font-raleway text-[14px] md:text-[20px] xl:text-[24px] tracking-[0.1em]">{alcohol.whatIsIt}</p>
                </div>
                <div className="flex flex-col gap-4 mb-12">
                    <h2 className="uppercase text-primary font-bold text-4 md:text-[20px] xl:text-[24px] font-display-georgia tracking-[0.1em]">історія {alcohol.title}? </h2>
                    <p className="font-raleway text-[14px] md:text-[20px] xl:text-[24px] tracking-[0.1em]">{alcohol.history}</p>
                </div>
                <div className="flex flex-col md:flex-row-reverse mb-12 items-center md:gap-6 xl:gap-32">
                    <img src={`/assets/images/alcoholHistory/${alcohol.id}2.png`} alt={`${alcohol.title}`} className="md:h-[420px] xl:h-[690px]"/>
                    <div className="flex flex-col gap-4">
                        <h2 className="uppercase text-primary font-bold text-4 md:text-[20px] xl:text-[24px] font-display-georgia tracking-[0.1em]">види {alcohol.title}? </h2>
                        <p className="font-raleway text-[14px] md:text-[20px] xl:text-[24px] tracking-[0.1em]">{alcohol.types}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 mb-12">
                    <h2 className="uppercase text-primary font-bold text-4 md:text-[20px] xl:text-[24px] font-display-georgia tracking-[0.1em]">як пити {alcohol.title}? </h2>
                    <p className="font-raleway text-[14px] md:text-[20px] xl:text-[24px] tracking-[0.1em]">{alcohol.howToDrink}</p>
                </div>
                <div className="flex flex-col md:flex-row mb-12 items-center md:gap-6 xl:gap-32">
                    <img src={`/assets/images/alcoholHistory/${alcohol.id}3.png`} alt={`${alcohol.title}`} className="md:h-[420px] xl:h-[690px]"/>
                    <div className="flex flex-col gap-4">
                        <h2 className="uppercase text-primary font-bold text-4 md:text-[20px] xl:text-[24px] font-display-georgia tracking-[0.1em]">цікаві факти </h2>
                        <p className="font-raleway text-[14px] md:text-[20px] xl:text-[24px] tracking-[0.1em]">{alcohol.facts}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};