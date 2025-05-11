import { useEffect, useState } from "react";

const useScrolledPast = (threshold: number = 0): boolean => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > threshold);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);

    return scrolled;
};

export default useScrolledPast;
