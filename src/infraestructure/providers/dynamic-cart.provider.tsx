import { HierarchyNode } from "hierarchical-node-structure";
import { createContext, useRef } from "react";

type DynamicCartContextType<T> = {
    store: T | null,
}
export const DynamicCartContext = createContext<DynamicCartContextType<HierarchyNode<string>>>({
    store: null,
});

export const DynamicCartProvider: React.FC<React.PropsWithChildren> = ({
    children,
}): JSX.Element => {
    const rootNode = useRef(new HierarchyNode('Root'));
    return (
    <DynamicCartContext.Provider value={{
        store: rootNode.current,
    }}>
        {children}
    </DynamicCartContext.Provider>
    )
}