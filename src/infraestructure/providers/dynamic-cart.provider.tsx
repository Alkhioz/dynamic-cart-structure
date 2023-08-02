import { HierarchyNode } from "hierarchical-node-structure";
import { createContext, useState } from "react";

type DynamicCartContextType<T> = {
    store: T | null,
    setStore: any,
}
export const DynamicCartContext = createContext<DynamicCartContextType<any>>({
    store: null,
    setStore: null,
});

export const DynamicCartProvider: React.FC<React.PropsWithChildren> = ({
    children,
}): JSX.Element => {
    const [store, setStore] = useState({
        cart: new HierarchyNode('Root'),
    })
    return (
    <DynamicCartContext.Provider value={{
        store,
        setStore,
    }}>
        {children}
    </DynamicCartContext.Provider>
    )
}