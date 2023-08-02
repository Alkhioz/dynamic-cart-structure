import { useContext } from "react"
import { DynamicCartContext } from "../providers/dynamic-cart.provider"

export const UseDynamicCartViewModel = () => {
    const cartContext = useContext(DynamicCartContext);
    const setDispatch = (dispatch:any)=>cartContext.setDispatch(dispatch);
    const setStore = (store:any)=>cartContext.setStore(store);
    return {
        setDispatch,
        setStore,
        store: cartContext.store,
    }
}