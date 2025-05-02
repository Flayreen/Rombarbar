import StarIcon from "../../public/assets/svgs/star.svg"
import React from "react";
import {cn} from "@/lib/utils.ts";

interface StarDividerProps {
    className?: string;
    variant?: "light" | "dark";
}

const StarDivider: React.FC<StarDividerProps> = ({ className, variant = "light" }) => {
    return (
        <div className="w-full flex flex-nowrap gap-4 items-center justify-center">
            <div className={cn("w-[28vw] h-[1px]", variant === "light" ? "bg-white" : "bg-primary")}/>
            <div className={cn("w-[8px] h-[8px] md:w-[18px] md:h-[18px] xl:w-[24px] xl:h-[25px]", variant === "light" ? "text-white" : "text-primary", className)}>
                <StarIcon className="w-[8px] h-[8px] md:w-[18px] md:h-[18px] xl:w-[24px] xl:h-[25px]" />
            </div>
            <div className={cn("w-[28vw] h-[1px]", variant === "light" ? "bg-white" : "bg-primary")}/>
        </div>
    );
};

export default StarDivider;