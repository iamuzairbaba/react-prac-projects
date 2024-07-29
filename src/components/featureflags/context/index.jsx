import { createContext, useEffect, useState } from "react";
import featureFlagsDataSeviceCalls from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagsGlobalState({children}){
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({})

    async function fetchfeatureFlag(){
        try{
            const res = await featureFlagsDataSeviceCalls();
            setEnabledFlags(res)
        }catch(e){
            console.log('Error occured')
        }
    }

    useEffect(()=> {
        fetchfeatureFlag()
    },[])

    return <FeatureFlagsContext.Provider value={{enabledFlags}}>{children}</FeatureFlagsContext.Provider>
}