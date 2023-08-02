import { createContext, useRef } from "react";

type DynamicCartContextType<T,D> = {
    store: T | null,
    dispatch: D | null,
    setStore: (store:T)=>void,
    setDispatch: (store:D)=>void,
}
export const DynamicCartContext = createContext<DynamicCartContextType<any, any>>({
    store: null,
    dispatch: null,
    setStore: ()=>{},
    setDispatch: ()=>{}
});

export const SecurityProvider: React.FC<React.PropsWithChildren> = ({
    children,
}): JSX.Element => {
    const store = useRef(null);
    const dispatch = useRef(null);
    const setStore = (newStore:any)=>{
        store.current = newStore;
    }
    const setDispatch = (newDispatch:any)=>{
        dispatch.current = newDispatch;
    }
    return (
    <DynamicCartContext.Provider value={{
        store: store?.current,
        dispatch: dispatch?.current,
        setStore,
        setDispatch,
    }}>
        {children}
    </DynamicCartContext.Provider>
    )
}