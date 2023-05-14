import { useEffect, useState } from "react";
import ArticleMenu from "./QualificationMenu";
import { request } from "../../api/request";
import Title from "../ui/Title";
import QualificationMenu from "./QualificationMenu";

interface Props{
    readonly bgType: "1" | "2";
    readonly select: (value: any) => void;
    readonly title?: boolean;
    readonly limit?: number;
}

export default function QualificationMenuWrapper({
    select,
    title,
    bgType,
    limit
}:Props){

    const [data, setData] = useState([])

    useEffect(()=>{
        request.get(`/certificate/getAll/${limit}`).then((response: any)=>{
            setData(response.data.data)
        }).catch((error: any)=>{
            console.log(error)
        })
    },[request, setData])

    return (
        <div>
            {title && (
                <Title>
                    Sertfikatlar
                </Title>
            )}
            <QualificationMenu
                bgType={bgType}
                data={data}
                setEntity={select}
                />
        </div>
    )
}