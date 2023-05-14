import { useEffect, useState } from "react";
import ArticleMenu from "./ArticleMenu";
import { request } from "../../api/request";
import Title from "../ui/Title";

interface Props{
    readonly bgType: "1" | "2";
    readonly select: (value: any) => void;
    readonly title?: boolean;
    readonly limit?: number;
}

export default function ArticleMenuWrapper({
    select,
    title,
    bgType,
    limit = 0
}:Props){

    const [articles, setArticles] = useState([])

    useEffect(()=>{
        request.get(`/article-limit/getAll/${limit}`).then((response: any)=>{
            setArticles(response.data.data)
        }).catch((error: any)=>{
            console.log(error)
        })
    },[request, setArticles])

    return (
        <div>
            {title && (
                <Title>
                    Maqolalar
                </Title>
            )}
            <ArticleMenu
                bgType={bgType}
                data={articles}
                setEntity={select}
                />
        </div>
    )
}