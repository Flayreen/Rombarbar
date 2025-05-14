import {useNavigate, useParams} from "react-router-dom";
import {IBrandGrouped} from "@/types/brand/IBrandGrouped"
import brandGroupedList from "@/database/brandList.json";
import ArrowLeftIcon from "@/components/ui/arrows/ArrowLeftIcon";
import CustomDashedBorderBase from "@/components/ui/custom-dashed-border";
import {NotFound} from "@/pages/NotFound.tsx";
import StarDivider from "@/components/StarDivider.tsx";
import {convertYouTubeLink} from "@/utils/convertYouTubeLink.ts";

export const BrandHistory = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const brand: IBrandGrouped | undefined = Object.values(brandGroupedList).flat().find((item) => item.id === id);

    if (!brand) {
        return <NotFound/>
    }

    return (
        <div className="container">
            <div className="flex justify-between mt-6 md:mt-8 items-center">
                <button onClick={() => navigate(-1)} className="text-black transition-colors">
                    <ArrowLeftIcon className="w-7 h-7"/>
                </button>
                <div className="flex flex-col items-center gap-2">
                    <CustomDashedBorderBase className="p-2 lg:p-4 h-fit" >
                        <h2 className="font-display-georgia uppercase text-[16px] md:text-[24px] xl:text-[32px] font-bold tracking-[0.1em] text-primary">
                            {brand.title}
                        </h2>
                    </CustomDashedBorderBase>
                </div>
                <div className="w-7 h-7"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-[72px] mt-6 md:mt-12">
                <div className="aspect-[1/1] w-full h-full">
                    <img
                        src={brand.imageUrl} alt={brand.title}
                        className="aspect-[1/1] object-cover"/>
                </div>
                <div className="flex flex-col gap-4 md:gap-8">
                    <div className="flex flex-col items-center md:items-start gap-2 mb-3">
                        <h3 className="uppercase text-black font-bold text-[14px] md:text-[20px] xl:text-[24px] font-display-raleway tracking-[0.1em]">Країна:</h3>
                        <p className="w-full text-center md:text-left font-raleway text-[14px] md:text-[20px] xl:text-[24px] tracking-[0.1em]">{brand.country}</p>
                    </div>
                    <div className="flex flex-col items-center md:items-start gap-2 mb-3">
                        <h3 className="uppercase text-black font-bold text-[14px] md:text-[20px] xl:text-[24px] font-display-raleway tracking-[0.1em]">Про бренд:</h3>
                        <p className="w-full text-center md:text-left font-raleway text-[14px] md:text-[20px] xl:text-[24px] tracking-[0.1em]">{brand.description}</p>
                    </div>
                    <div className="flex flex-col items-center md:items-start gap-2 mb-3">
                        <h3 className="uppercase text-black font-bold text-[14px] md:text-[20px] xl:text-[24px] font-display-raleway tracking-[0.1em]">Різновиди:</h3>
                        <p className="w-full text-center md:text-left font-raleway text-[14px] md:text-[20px] xl:text-[24px] tracking-[0.1em]">{brand.description}</p>
                    </div>
                    <div className="flex flex-col items-center md:items-start gap-2 mb-3">
                        <h3 className="uppercase text-black font-bold text-[14px] md:text-[20px] xl:text-[24px] font-display-raleway tracking-[0.1em]">Смак:</h3>
                        <p className="w-full text-center md:text-left font-raleway text-[14px] md:text-[20px] xl:text-[24px] tracking-[0.1em]">{brand.taste}</p>
                    </div>
                    <div className="flex flex-col items-center md:items-start gap-2 mb-3">
                        <h3 className="uppercase text-black font-bold text-[14px] md:text-[20px] xl:text-[24px] font-display-raleway tracking-[0.1em]">Історія:</h3>
                        <p className="w-full text-center md:text-left font-raleway text-[14px] md:text-[20px] xl:text-[24px] tracking-[0.1em]">{brand.history}</p>
                    </div>
                    <div className="flex flex-col items-center md:items-start gap-2 mb-3">
                        <h3 className="uppercase text-black font-bold text-[14px] md:text-[20px] xl:text-[24px] font-display-raleway tracking-[0.1em]">Цікавий
                            факт:</h3>
                        <p className="w-full text-center md:text-left font-raleway text-[14px] md:text-[20px] xl:text-[24px] tracking-[0.1em]">{brand.fact}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-12 md:gap-[80px] lg:gap-[100px] my-12 md:my-[80px] lg:my-[100px]">
                <StarDivider variant="dark"/>
                <div className="flex flex-col items-center gap-6 md:gap-10 lg:gap-12 max-w-[500px] w-full">
                    <div className="flex flex-col items-center gap-2">
                        <span className="font-display-georgia uppercase text-[16px] md:text-[24px] md:font-bold tracking-[0.1em] text-primary">
                            ВІДЕООГЛЯД
                        </span>
                        <div className="w-28 h-0.25 bg-primary"></div>
                    </div>
                    <iframe
                        src={convertYouTubeLink(brand.videoLink)}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        className="w-full aspect-[2/1]"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};