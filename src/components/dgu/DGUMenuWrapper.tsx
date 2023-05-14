import { useEffect, useState } from "react";
import ArticleMenu from "./DGUMenu";
import { request } from "../../api/request";
import Title from "../ui/Title";

interface Props{
    readonly bgType: "1" | "2";
    readonly select: (value: any) => void;
    readonly title?: boolean;
    readonly limit?: number;
}

export default function DGUMenuWrapper({
    select,
    title,
    bgType,
    limit = 0
}:Props){

    const [data, setData] = useState([])

    useEffect(()=>{
        request.get(`/dgu/getAll/${limit}`).then((response: any)=>{
            setData(response.data.data)
        }).catch((error: any)=>{
            console.log(error)
        })
    },[request, setData])

    return (
        <div>
            {title && (
                <Title>
                    DGU
                </Title>
            )}
            <ArticleMenu
                bgType={bgType}
                data={data}
                setEntity={select}
                />
        </div>
    )
}