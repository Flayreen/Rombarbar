import {CocktailCard} from "@/components/cards/CocktailCard.tsx";
import {ICocktail, cocktails, cocktailFilters, ICocktailFilters, TCocktailsLabel} from "@/database/cocktails.ts";
import {Link} from "react-router-dom";
import {getPathname} from "@/utils/getPathname.ts";
import {WebLinks} from "@/routes/routes.ts";
import {useState} from "react";
import {Checkbox} from "@/components/ui/checkbox.tsx";


export const CocktailsList = () => {
    const [cocktailList, setCocktailList] = useState<ICocktail[]>(cocktails);

    const handleFilter = (filterLabel: TCocktailsLabel, value: string): void => {
        const filteredCocktails: ICocktail[] = cocktailList.filter((cocktail: ICocktail) => {
            switch (filterLabel) {
                case "category":
                    return cocktail.characteristics.category === value;
                case "strength":
                    return cocktail.characteristics.strength === value;
                case "taste":
                    return cocktail.characteristics.taste === value;
                case "base":
                    return cocktail.characteristics.base === value;
                case "complexity":
                    return cocktail.characteristics.complexity === value;
                default:
                    return true;
            }
        })
        setCocktailList(filteredCocktails);
    }

    return (
        <div className="container">
            <div>
                <Filters handleFilter={handleFilter}/>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-y-13">
                {cocktailList.map((cocktail: ICocktail) => (
                    <Link key={cocktail.id} to={getPathname(WebLinks.CocktailRecipe, cocktail.id)}>
                        <CocktailCard
                            title={cocktail.title}
                            imageUrl={cocktail.imageUrl}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

const Filters = (
    {
        handleFilter,
    } : {
        handleFilter: (filterLabel: TCocktailsLabel, value: string) => void;
    }
) => {
    return (
        <div className="flex gap-4 justify-between">
            {cocktailFilters.map((filterBlock: ICocktailFilters, index: number) => (
                <div key={index} className="flex flex-col gap-8">
                    <span className="text-xl">
                        {filterBlock.title}
                    </span>
                    <div className="flex flex-col gap-4 w-fit">
                        {filterBlock.filters.map((filter, index) => (
                            <div key={index} className="flex items-center space-x-2 w-fit" onClick={() => handleFilter(filterBlock.filterLabel, filter.value)}>
                                <Checkbox id={filter.value} />
                                <label
                                    htmlFor={filter.value}
                                    className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    {filter.name}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

