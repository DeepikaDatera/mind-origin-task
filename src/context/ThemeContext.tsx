import React, { createContext, useContext, useState } from "react"

interface themeType {
    appTheme: 'light' | 'dark',
    themeToggle: () => void
}

const ThemeContext = createContext<themeType | null>(null)

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    const themeToggle = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    return <ThemeContext.Provider value={{ appTheme: theme, themeToggle }}>
        {children}
    </ThemeContext.Provider>

}

export const useThemeContext = () => {

    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error("useThemeContext must be used inside ThemeContextProvider");
    }

    return context
}