import { useSearchParams } from "react-router-dom";
import ArticleView from "./DGUView";
import { useEffect, useMemo, useState } from "react";
import { request } from "../../api/request";

export default function DGUViewWrapper(){

    const [ search, setSearch ] = useSearchParams();
    const [ data, setData ] = useState<any>({});
    const ID = useMemo(()=>search.get("dguId"), [search]);

    useEffect(()=>{
        if(Boolean(ID)){
            request.get(`/dgu/get/${ID}`)
            .then((response: any)=>{
                setData(response.data.data)
            }).catch((error: any)=>console.log(error))
        }
    },[request])

    return (<ArticleView
                data={data}
                />)
}