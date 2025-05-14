import { useState, useEffect} from "react";
import StarDivider from '../components/StarDivider';
import { useNavigate } from 'react-router-dom';
import {useAlcoholStore} from "@/store/alcohol-store.ts";
import PaginationLayout from "@/components/ui/pagination.tsx";
import {IAlcoholList} from "@/types/alcohol/IAlcoholList.ts";

export const AlcoholsList = () => {
    const navigate = useNavigate();
    const {alcohol, pagination, fetchAlcohol, paginateAlcohol} = useAlcoholStore();
    
    function useBreakpointColumns() {
        const [columns, setColumns] = useState(2);
      
        useEffect(() => {
          const updateColumns = () => {
            const width = window.innerWidth;
            if (width >= 1280) setColumns(4); 
            else if (width >= 768) setColumns(3); 
            else setColumns(2); 
          };
      
          updateColumns(); // одразу виклик
          window.addEventListener('resize', updateColumns);
          return () => window.removeEventListener('resize', updateColumns);
        }, []);
      
        return columns;
    }

    const columns = useBreakpointColumns();

    const chunkArray = (arr: typeof alcohol, size: number) => {
    const chunks = [];
        for (let i = 0; i < arr.length; i += size) {
            chunks.push(arr.slice(i, i + size));
        }
        return chunks;
    };

    const alcoholRows = chunkArray(alcohol, columns);

    useEffect(() => {
        fetchAlcohol();
    }, []);

    const handleRedirect = (id: string) => {
        navigate(`/alcohols/${id}`);
    }

    return (
        <div className="container">
            <div className="flex flex-col items-center mt-6 md:mt-20 gap-2">
                <h2 className="font-display-georgia uppercase text-[16px] md:text-[24px] font-bold tracking-[0.1em] text-primary">Про алкоголь</h2>
                <div className="w-28 h-0.25 bg-primary"></div>
            </div>
            <StarDivider variant="dark" className="my-12 md:my-16"/>
            <div className="space-y-10 p-4">
                {alcoholRows.map((row: IAlcoholList[], index: number) => (
                    <div key={index}>
                    <div
                        className={`grid gap-6 ${
                        columns === 1 ? 'grid-cols-1' :
                        columns === 2 ? 'grid-cols-2' :  
                        columns === 3 ? 'grid-cols-3' :
                        'grid-cols-4'
                        }`}
                    >
                        {row.map((alcohol: IAlcoholList, index: number) => (
                            <div
                                key={index}
                                className="bg-white transition text-center"
                                onClick={() => handleRedirect(alcohol.id)}
                            >
                                <img
                                    src={`/assets/images/alcoholsList/${alcohol.id}.png`}
                                    alt={alcohol.title}
                                    className="mx-auto mb-8  h-60 md:h-[344px] xl:h-[457px] object-contain"
                                />
                                <h2 className="uppercase text-primary font-bold text-4 md:text-[24px] font-display-georgia tracking-[0.18em]">
                                    {alcohol.title}
                                </h2>
                            </div>
                        ))}
                    </div>
                    {index < alcoholRows.length - 1 && (
                        <div className="my-6 md:my-16">
                        <StarDivider variant="dark" className="my-12 md:my-16"/>
                        </div>
                    )}
                    </div>
                ))}
            </div>

            {alcohol.length > 0 && (
                <div className="pt-8 pb-16 lg:py-[100px]">
                    <PaginationLayout
                        pagination={pagination}
                        handlePaginate={(page: number) => paginateAlcohol(page)}
                    />
                </div>
            )}
        </div>
    );
};