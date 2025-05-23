import {CocktailCard} from "@/components/cards/CocktailCard.tsx";
import {Link} from "react-router-dom";
import {getPathname} from "@/utils/getPathname.ts";
import {WebLinks} from "@/routes/routes.ts";
import {useEffect, useState} from "react";
import Filters from "@/components/ui/filter.tsx";
import {useCocktailsStore} from "@/store/cocktails-store.ts";
import {cocktailsFilters} from "@/modules/cocktails-list/constants.ts";
import {ICocktail} from "@/types/cocktail/ICocktail.ts";
import PaginationLayout from "@/components/ui/pagination.tsx";
import StarDivider from "@/components/StarDivider.tsx";


export const CocktailsList = () => {
    const [currentFilter, setCurrentFilter] = useState<Record<string, string[]>>({});
    const {fetchCocktails, paginateCocktails, cocktails, pagination} = useCocktailsStore();
    const params = new URLSearchParams(window.location.search);
    const initialFilterState = {
        category: params.getAll("category"),
        strength: params.getAll("strength"),
        taste: params.getAll("taste"),
        base: params.getAll("base"),
        complexity: params.getAll("complexity"),
    }

    const handleFetchCocktails = (filters?: Record<string, string[]>) => {
        fetchCocktails(filters);
        if (filters) {
            setCurrentFilter(filters);
        }
    }

    useEffect(() => {
        fetchCocktails(initialFilterState);
    }, [])

    return (
        <div className="container">
            <div className="flex justify-end items-center w-full mb-6 lg:mb-[80px] mt-6 md:mt-20">
                <Filters
                    initialState={initialFilterState}
                    filterData={cocktailsFilters}
                    fetchFilterData={(filters?: Record<string, string[]>) => handleFetchCocktails(filters)}
                />
            </div>

            <div className="flex flex-col items-center mt-6 md:mt-20 gap-2">
                <h2 className="font-display-georgia uppercase text-[16px] md:text-[24px] font-bold tracking-[0.1em] text-primary">Категорія коктейлів</h2>
                <div className="w-28 h-0.25 bg-primary"></div>
            </div>
            <StarDivider variant="dark" className="my-12 md:my-16"/>

            <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-y-13">
                {cocktails.length > 0 ?
                    cocktails.map((cocktail: ICocktail, index: number) => (
                        <Link key={index} to={getPathname(WebLinks.CocktailRecipe, cocktail.id)}>
                            <CocktailCard
                                title={cocktail.title}
                                imageUrl={cocktail.imageUrl}
                            />
                        </Link>
                    ))
                    : (
                        <div>Empty</div>
                    )}
            </div>

            {cocktails.length > 0 && (
                <div className="pt-8 pb-16 lg:py-[100px]">
                    <PaginationLayout
                        pagination={pagination}
                        handlePaginate={(page: number) => paginateCocktails(currentFilter, page)}
                    />
                </div>
            )}
        </div>
    );
};