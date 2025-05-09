import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover.tsx";
import {Search} from "lucide-react";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator
} from "@/components/ui/command.tsx";
import cocktailsList from "@/database/cocktails.json"
import {alcoholList, IAlcoholList} from "@/database/alcoholList.ts";
import {brandGroupedList, IBrandGrouped} from "@/database/brandList.ts";
import {ICocktail} from "@/types/cocktail/ICocktail.ts";
import {useNavigate} from "react-router-dom";
import {PopoverClose} from "@radix-ui/react-popover";

export default function SearchHeader() {
    const navigate = useNavigate();

    return (
        <Popover>
            <PopoverTrigger asChild className="w-[35px] h-[35px] cursor-pointer">
                <Search strokeWidth={1} className="text-white"/>
            </PopoverTrigger>
            <PopoverContent className="p-2">
                <Command>
                    <CommandInput placeholder="Пошук..." />
                    <CommandList>
                        <CommandEmpty>Нічого не знайдено.</CommandEmpty>
                        <CommandGroup heading="Коктейлі">
                            {cocktailsList.map((cocktail: ICocktail, index: number) => (
                                <PopoverClose className="w-full">
                                    <CommandItem key={index} onSelect={() => navigate(`/cocktails/${cocktail.id}`)}>
                                        <div className="flex flex-row gap-3 items-center">
                                            <img
                                                className="aspect-[1/1] w-[32px] object-cover rounded-[6px]"
                                                src={cocktail.imageUrl}
                                                alt={cocktail.title}
                                            />
                                            <span className="text-base">{cocktail.title}</span>
                                        </div>
                                    </CommandItem>
                                </PopoverClose>
                            ))}
                        </CommandGroup>
                        <CommandSeparator/>
                        <CommandGroup heading="Алкоголь">
                            {alcoholList.map((alcohol: IAlcoholList, index: number) => (
                                <PopoverClose className="w-full">
                                    <CommandItem key={index} onSelect={() => navigate(`/alcohols/${alcohol.id}`)}>
                                        <div className="flex flex-row gap-3 items-center">
                                            <img
                                                className="aspect-[1/1] w-[32px] object-cover rounded-[6px]"
                                                src={`/assets/images/alcoholsList/${alcohol.id}.png`}
                                                alt={alcohol.title}
                                            />
                                            <span className="text-base">{alcohol.title}</span>
                                        </div>
                                    </CommandItem>
                                </PopoverClose>
                            ))}
                        </CommandGroup>
                        <CommandSeparator/>
                        <CommandGroup heading="Бренди">
                            {brandGroupedList.map((brand: IBrandGrouped, index: number) => (
                                <PopoverClose className="w-full">
                                    <CommandItem key={index} onSelect={() => navigate(`/brands/${brand.id}`)}>
                                        <div className="flex flex-row gap-3 items-center">
                                            <img
                                                className="aspect-[1/1] w-[32px] object-cover rounded-[6px]"
                                                src={`/assets/images/alcoholsList/${brand.id}.png`}
                                                alt={brand.title}
                                            />
                                            <span className="text-base">{brand.title}</span>
                                        </div>
                                    </CommandItem>
                                </PopoverClose>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}