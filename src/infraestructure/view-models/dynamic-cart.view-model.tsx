import { useContext } from "react"
import { DynamicCartContext } from "../providers/dynamic-cart.provider"

export const UseDynamicCartViewModel = () => {
    const { store: rootNode } = useContext(DynamicCartContext);

    const getStore = (): any => {
        if (rootNode===null) return null;
        const node = {...rootNode};
        return node;
    }

    const addItem = (item:any) => {
        if(!!rootNode) rootNode.addNode(item);
    }

    return {
        getStore,
        addItem,
    }
}