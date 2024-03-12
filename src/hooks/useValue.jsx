import { useState } from "react";

const useValue = () => {
    const [value, setValue] = useState("");

    const onChange = (newValue) => {
        setValue(newValue);
    };

    return [value, onChange];
};

export default useValue;