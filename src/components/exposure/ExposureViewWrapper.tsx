import { useSearchParams } from "react-router-dom";
import ArticleView from "./ExposureView";
import { useEffect, useMemo, useState } from "react";
import { request } from "../../api/request";
import MyInformationView from "../my-information/MyInformationView";

export default function ExposureViewWrapper(){

    const [ search, setSearch ] = useSearchParams();
    const [ data, setData ] = useState<any>({});
    const ID = useMemo(()=>search.get("exposureId"), [search]);

    useEffect(()=>{
        if(Boolean(ID)){
            request.get(`/lecture/get/${ID}`)
            .then((response: any)=>{
                setData(response.data.data)
            }).catch((error: any)=>console.log(error))
        }
    },[request])

    return (<MyInformationView
                data={data}
                />)
}