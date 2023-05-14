import { useEffect, useState } from "react";
import { request } from "../../api/request";
import Title from "../ui/Title";
import ImageMenu from "./ImageMenu";

interface Props{
    readonly bgType: "1" | "2";
    readonly select: (value: any) => void;
    readonly title?: boolean;
    readonly limit?: number;
}

export default function ImageMenuWrapper({
    select,
    title,
    bgType,
    limit = 0
}:Props){

    const [data, setData] = useState<any[]>([])

    useEffect(()=>{
        request.get(`/photo/getAll/${limit}`).then((response: any)=>{
            response.data.data && response.data.data.map((item: any)=>{
                const _data = {
                    ...item,
                    title: item.name
                }
                setData((d: any)=>[...d, _data]);
            })
        }).catch((error: any)=>{
            console.log(error)
        })
    },[request, setData])

    return (
        <div>
            {title && (
                <Title>
                    Rasmlar
                </Title>
            )}
            <ImageMenu
                bgType={bgType}
                data={data}
                setEntity={select}
                />
        </div>
    )
}