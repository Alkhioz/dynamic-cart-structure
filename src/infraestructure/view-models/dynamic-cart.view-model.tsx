import { useContext } from "react"
import { DynamicCartContext } from "../providers/dynamic-cart.provider"
import { HierarchyNode } from "hierarchical-node-structure";

const turnToJson = (node:any) => {
    const json = {...node};
    if(json.children.length>0){
        json.children = json.children.map((child:any)=>{
            return turnToJson(child);
        });
    }
    return json;
}
export const UseDynamicCartViewModel = () => {
    const { store: rootNode } = useContext(DynamicCartContext);

    const getStore = (): any => {
        if (rootNode===null) return null;
        return turnToJson({...rootNode});
    }

    const addItem = (item:any) => {
        if(!!rootNode) rootNode.addNode(new HierarchyNode(item));
    }

    const addChildToItem = (id:string, item:any) => {
        if(!!rootNode){
            rootNode.addNodeToNode(id, new HierarchyNode(item));
        }
    }

    const removeItem = (id: string) => {
        if(!!rootNode){
            rootNode.removeNodeById(id);
        }
    }

    const getItem = (id: string) => {
        if(!!rootNode){
            rootNode.getNodeById(id);
        }
    }

    const executeFunctionOnItem = (id: string, callback:any, additionalParams:any) => {
        if(!!rootNode){
            rootNode.runFunctionOnNode(id, callback, additionalParams);
        }
    }

    const executeFunction = (callback:any, additionalParams:any) => {
        if(!!rootNode){
            rootNode.runCustomFunction(callback, additionalParams);
        }
    }

    const getParentId = (id:string) => {
        if(!!rootNode){
            rootNode.getParentNodeId(id);
        }
    }

    const traverse = (reducer:any, initialValue:any) => {
        if(!!rootNode){
            rootNode.traverse(reducer, initialValue);
        }
    }

    return {
        getStore,
        addItem,
        addChildToItem,
        removeItem,
        getItem,
        executeFunctionOnItem,
        executeFunction,
        getParentId,
        traverse,
    }
}