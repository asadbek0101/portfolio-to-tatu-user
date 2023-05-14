import { useSearchParams } from "react-router-dom";
import ArticleView from "./QualificationView";
import { useEffect, useMemo, useState } from "react";
import { request } from "../../api/request";
import MyInformationView from "../my-information/MyInformationView";
import QualificationView from "./QualificationView";

export default function QualificationViewWrapper(){

    const [ search, setSearch ] = useSearchParams();
    const [ data, setData ] = useState<any>({});
    const ID = useMemo(()=>search.get("qualificationId"), [search]);

    useEffect(()=>{
        if(Boolean(ID)){
            request.get(`/certificate/get/${ID}`)
            .then((response: any)=>{
                setData(response.data.data)
            }).catch((error: any)=>console.log(error))
        }
    },[request])

    return (<QualificationView
                data={data}
                />)
}