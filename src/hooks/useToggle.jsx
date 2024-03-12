import { useState } from "react";

const useToggle = (initState) => {
    const [isActive, setActive] = useState(initState);

    const toggleActive = () => {
        setActive(prev => !prev);
    };

    return [isActive, toggleActive];
};

export default useToggle;