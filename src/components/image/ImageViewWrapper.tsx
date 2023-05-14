import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { request } from "../../api/request";
import ImageView from "./ImageView";

export default function ImageViewWrapper(){

    const [ search, setSearch ] = useSearchParams();
    const [ data, setData ] = useState<any>({});
    const ID = useMemo(()=>search.get("imgId"), [search]);

    useEffect(()=>{
        if(Boolean(ID)){
            request.get(`/photo/get/${ID}`)
            .then((response: any)=>{
                setData(response.data.data)
            }).catch((error: any)=>console.log(error))
        }
    },[request])

    return (<ImageView
                data={data}
                />)
}