import { useSearchParams } from "react-router-dom";
import ArticleView from "./MyInformationView";
import { useEffect, useMemo, useState } from "react";
import { request } from "../../api/request";

export default function MyInformationViewWrapper(){

    const [ search, setSearch ] = useSearchParams();
    const [ data, setData ] = useState<any>({});
    const ID = useMemo(()=>search.get("myInformationId"), [search]);

    useEffect(()=>{
        if(Boolean(ID)){
            request.get(`/my-information/get/${ID}`)
            .then((response: any)=>{
                setData(response.data.data)
            }).catch((error: any)=>console.log(error))
        }
    },[request, ID])

    return (<ArticleView
                data={data}
                />)
}