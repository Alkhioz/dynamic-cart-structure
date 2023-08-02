import { HierarchyNode } from "hierarchical-node-structure";
import { createContext, useRef, useState } from "react";

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
    const rootNode = useRef(new HierarchyNode('Root'));
    const [store, setStore] = useState({
        cart: rootNode,
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