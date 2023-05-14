import { useEffect, useState } from "react";
import { request } from "../../api/request";
import Title from "../ui/Title";
import MyInformationMenu from "./MyInformationMenu";

interface Props{
    readonly bgType: "1" | "2";
    readonly select: (value: any) => void;
    readonly title?: boolean;
    readonly limit?: number;
}

export default function MyInformationMenuWrapper({
    select,
    title,
    bgType,
    limit = 0
}:Props){

    const [data, setData] = useState([])

    useEffect(()=>{
        request.get(`/my-information/getAll/${limit}`).then((response: any)=>{
            setData(response.data.data)
        }).catch((error: any)=>{
            console.log(error)
        })
    },[request, setData])

    return (
        <div>
            {title && (
                <Title>
                    Mening Malumotlarim
                </Title>
            )}
            <MyInformationMenu
                bgType={bgType}
                data={data}
                setEntity={select}
                />
        </div>
    )
}