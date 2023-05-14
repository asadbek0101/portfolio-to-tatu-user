import { useEffect, useState } from "react";
import ArticleMenu from "./PracticalWorkMenu";
import { request } from "../../api/request";
import Title from "../ui/Title";
import PracticalWorkMenu from "./PracticalWorkMenu";

interface Props{
    readonly bgType: "1" | "2";
    readonly select: (value: any) => void;
    readonly title?: boolean;
    readonly limit?: number;
}

export default function PracticalWorkMenuWrapper({
    select,
    title,
    bgType,
    limit = 0
}:Props){

    const [data, setData] = useState([])

    useEffect(()=>{
        request.get(`/practical-work/getAll/${limit}`).then((response: any)=>{
            setData(response.data.data)
        }).catch((error: any)=>{
            console.log(error)
        })
    },[request, setData])

    return (
        <div>
            {title && (
                <Title>
                    Amaliy ishlar
                </Title>
            )}
            <PracticalWorkMenu
                bgType={bgType}
                data={data}
                setEntity={select}
                />
        </div>
    )
}