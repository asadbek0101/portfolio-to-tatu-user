import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { request } from "../../api/request";
import PracticalWorkView from "./PracticalWorkView";

export default function PracticalWorkViewWrapper(){

    const [ search, setSearch ] = useSearchParams();
    const [ data, setData ] = useState<any>({});
    const ID = useMemo(()=>search.get("practicalWorkId"), [search]);

    useEffect(()=>{
        if(Boolean(ID)){
            request.get(`/practical-work/get/${ID}`)
            .then((response: any)=>{
                setData(response.data.data)
            }).catch((error: any)=>console.log(error))
        }
    },[request])

    return (<PracticalWorkView
                data={data}
                />)
}