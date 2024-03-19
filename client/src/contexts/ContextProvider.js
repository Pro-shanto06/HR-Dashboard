import React, { createContext, useState } from "react";

export const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor] = useState('#11998E');

    return (
        <StateContext.Provider value={{ activeMenu, setActiveMenu, screenSize, setScreenSize, currentColor }}>
            {children}
        </StateContext.Provider>
    );
};
