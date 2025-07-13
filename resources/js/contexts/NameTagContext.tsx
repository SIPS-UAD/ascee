import React, { createContext, ReactNode, useContext } from 'react';

// Define the context type
interface NameTagContextType {
    name: string;
}

// Create context with a default value
const NameTagContext = createContext<NameTagContextType | undefined>(undefined);

// Provider component
interface NameTagProviderProps {
    name: string;
    children: ReactNode;
}

export const NameTagProvider: React.FC<NameTagProviderProps> = ({ name, children }) => {
    return <NameTagContext.Provider value={{ name }}>{children}</NameTagContext.Provider>;
};


export const useNameTag = (): NameTagContextType => {
    const context = useContext(NameTagContext);
    if (context === undefined) {
        throw new Error('useNameTag must be used within a NameTagProvider');
    }
    return context;
};
