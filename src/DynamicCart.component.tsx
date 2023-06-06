import { HierarchyNode } from "hierarchical-node-structure";
import React from "react";

export type DynamicCartProps<T> = {
    cart: T;
    render: (node:HierarchyNode<T>)=>React.ReactElement;
};

const DynamicCart = <T,>(props: DynamicCartProps<T>): React.ReactElement => {
    const Cart = new HierarchyNode(props.cart);
    return props.render(Cart);
}
export default DynamicCart;