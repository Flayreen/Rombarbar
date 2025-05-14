import { useNavigate, useParams } from "react-router-dom";
import { IBrandGrouped } from "@/types/brand/IBrandGrouped"
import { brandGroupedList } from "@/database/brandList";
import ArrowLeftIcon from "@/components/ui/arrows/ArrowLeftIcon";
import StarDivider from "@/components/StarDivider";
import CustomDashedBorderBase from "@/components/ui/custom-dashed-border";

export const BrandHistory = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const brand: IBrandGrouped | undefined = brandGroupedList.find((item) => item.id === id);

    if (!brand) {
        return <div>Brand not found!</div>;
    }

    return (
        <div className="container">
            <div className="flex justify-between mt-6 md:mt-8 items-center">
                <button onClick={() => navigate(-1)} className="text-black transition-colors">
                    <ArrowLeftIcon className="w-7 h-7"/>
                </button>
                <div className="flex flex-col items-center gap-2">
                    <h2 className="font-display-georgia uppercase text-[16px] md:text-[24px] xl:text-[32px] font-bold tracking-[0.1em] text-primary">
                        Історія брендів
                    </h2>
                    <div className="w-28 h-0.25 bg-primary"></div>
                </div>
                <div className="w-7 h-7"></div>
            </div>
            <ul>
                {brand.variations.map((variation, index) => (
                    <li key={index}>
                        <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 mb-16 mt-12`}>
                            <div className="flex flex-col items-center gap-8 mb-8">
                                <CustomDashedBorderBase className="p-2 lg:p-4 h-fit">
                                    <span className="uppercase text-primary font-bold text-[12px] md:text-[20px] xl:text-[24px] font-display-georgia tracking-[0.1em] py-2 px-4 ">{variation.name}</span>
                                </CustomDashedBorderBase>
                                <div className="h-[300px] md:h-[453px] xl:h-[756px] md:w-[418px] xl:w-[726px] w-auto"><img src={`/assets/images/brandHistory/${variation.id}.png`} alt={`${variation.name}`} className="h-[300px] md:h-[453px] xl:h-[756px] md:w-[418px] xl:w-[726px]  w-auto"/></div>  
                            </div>
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col items-center md:items-start gap-2 mb-3">
                                    <h3 className="uppercase text-black font-bold text-[14px] md:text-[20px] xl:text-[24px] font-display-raleway tracking-[0.1em]">Вік:</h3>
                                    <p className="font-raleway text-[14px] md:text-[20px] xl:text-[24px] tracking-[0.1em]">{variation.age}</p>
                                </div>
                                <div className="flex flex-col items-center md:items-start gap-2 mb-3">
                                    <h3 className="uppercase text-black font-bold text-[14px] md:text-[20px] xl:text-[24px] font-display-raleway tracking-[0.1em]">Смак:</h3>
                                    <p className="font-raleway text-[14px] md:text-[20px] xl:text-[24px] tracking-[0.1em]">{variation.taste}</p>
                                </div>
                                <div className="flex flex-col items-center md:items-start gap-2 mb-3">
                                    <h3 className="uppercase text-black font-bold text-[14px] md:text-[20px] xl:text-[24px] font-display-raleway tracking-[0.1em]">Країна виробник:</h3>
                                    <p className="font-raleway text-[14px] md:text-[20px] xl:text-[24px] tracking-[0.1em]">{variation.country}</p>
                                </div>
                                <div className="flex flex-col items-center md:items-start gap-2 mb-3">
                                    <h3 className="uppercase text-black font-bold text-[14px] md:text-[20px] xl:text-[24px] font-display-raleway tracking-[0.1em]">Категорія:</h3>
                                    <p className="font-raleway text-[14px] md:text-[20px] xl:text-[24px] tracking-[0.1em]">{variation.category}</p>
                                </div>     
                            </div>
                        </div>
                        <StarDivider variant="dark"/>
                    </li>
                ))}
            </ul>
        </div>
    );
};