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
    console.log(cocktails);
    return (
        <div className="container">
            <div className="flex justify-end items-center w-full mb-6 lg:mb-[80px]">
                <Filters
                    initialState={initialFilterState}
                    filterData={cocktailsFilters}
                    fetchFilterData={(filters?: Record<string, string[]>) => handleFetchCocktails(filters)}
                />
            </div>

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