import React from "react";

interface CategoriesContextProp {
    range: string;
    value: string;
    setValue?: (val: string) => void;
}

const defaultState = {
    range: "",
    value:"",
}

export const CategoriesContext =
    React.createContext<CategoriesContextProp>(defaultState);
    