import { useContext } from "react"
import { DynamicCartContext } from "../providers/dynamic-cart.provider"

export const UseDynamicCartViewModel = () => {
    const { state, setState } = useContext(DynamicCartContext);
    return {
        state,
        setState,
    }
}