import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { request } from "../../api/request";
import IndependentWorkView from "./IndependentWorkView";

export default function IndependentWorkViewWrapper(){

    const [ search, setSearch ] = useSearchParams();
    const [ data, setData ] = useState<any>({});
    const ID = useMemo(()=>search.get("independentWorkId"), [search]);

    useEffect(()=>{
        if(Boolean(ID)){
            request.get(`/independent-work/get/${ID}`)
            .then((response: any)=>{
                setData(response.data.data)
            }).catch((error: any)=>console.log(error))
        }
    },[request])

    return (<IndependentWorkView
                data={data}
                />)
}