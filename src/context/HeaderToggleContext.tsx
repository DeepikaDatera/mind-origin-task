import React, { createContext, useContext, useState } from "react"

interface HeaderType {
    collapsed: boolean;
    toggleCollapsed: () => void;
}

const HeaderContext = createContext<HeaderType | null>(null);
export function HeaderToggleProvider({ children }: { children: React.ReactNode }) {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <HeaderContext.Provider value={{ collapsed, toggleCollapsed }}>
            {children}
        </HeaderContext.Provider>

    )
}

export const useContextHeader = () => {
    const context = useContext(HeaderContext);

    if (!context) {
        throw new Error("useContextHeader must be used inside HeaderToggleProvider");
    }

    return context;
};
