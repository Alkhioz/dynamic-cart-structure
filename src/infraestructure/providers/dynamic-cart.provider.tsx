import { HierarchyNode } from "hierarchical-node-structure";
import { createContext, useState } from "react";

type DynamicCartContextType<T> = {
    state: T | null,
    setState: any | null,
}
export const DynamicCartContext = createContext<DynamicCartContextType<HierarchyNode<string>>>({
    state: null,
    setState: null,
});

export const DynamicCartProvider: React.FC<React.PropsWithChildren> = ({
    children,
}): JSX.Element => {
    const [state, setState] = useState(new HierarchyNode('Root'));
   
    return (
    <DynamicCartContext.Provider value={{
        state,
        setState,
    }}>
        {children}
    </DynamicCartContext.Provider>
    )
}