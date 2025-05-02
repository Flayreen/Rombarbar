import React from "react";

interface ArrowLeftIconProps {
    className?: string;
}

const ArrowLeftIcon: React.FC<ArrowLeftIconProps> = ({ className }) => (
    <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
        d="M19.5 34L7 21.5M7 21.5L19.5 9M7 21.5L37 21.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        />
    </svg>
)

export default ArrowLeftIcon;