import StarIcon from "../../public/assets/svgs/star.svg"
import React from "react";
import {cn} from "@/lib/utils.ts";

interface StarDividerProps {
    className?: string
}

const StarDivider: React.FC<StarDividerProps> = ({className}) => {
    return (
        <div className="w-full flex flex-nowrap gap-4 items-center">
            <div className="w-full h-[1px] bg-white"/>
            <div className={cn("text-white w-[8px] h-[8px]", className)}>
                <StarIcon className={cn("text-white w-[8px] h-[8px]", className)}/>
            </div>
            <div className="w-full h-[1px] bg-white"/>
        </div>
    );
};

export default StarDivider;