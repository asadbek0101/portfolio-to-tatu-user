import { useNavigate, createSearchParams, useParams } from "react-router-dom";
import { ContainerTabs, RouteLinks } from "../api/AppDto";
import ContainerLayout from "../components/app/ContainerLayout";
import ArticleMenuWrapper from "../components/article/ArticleMenuWrapper";
import ArticleViewWrapper from "../components/article/ArticleViewWrapper";

export default function ArticleContainer(){
    const { tab = ContainerTabs.Menu } = useParams();
    const navigate = useNavigate();
    return (
        <ContainerLayout>
            {tab === ContainerTabs.Menu && (
                <ArticleMenuWrapper
                    title
                    bgType="1"
                    select={(value: any)=>{
                        navigate({
                            pathname: `${RouteLinks.ArticleRoute}/${ContainerTabs.View}`,
                            search: `?${createSearchParams({
                                articleId: value.id
                            })}`
                        })
                    }}
                    />
           )}
            {tab === ContainerTabs.View && (
                <ArticleViewWrapper/>
            )}
        </ContainerLayout>
    )
}