import { useNavigate, createSearchParams, useParams } from "react-router-dom";
import { ContainerTabs, RouteLinks } from "../api/AppDto";
import ContainerLayout from "../components/app/ContainerLayout";
import IndependentWorkMenuWrapper from "../components/independent work/IndependentWorkMenuWrapper";
import IndependentWorkViewWrapper from "../components/independent work/IndependentWorkViewWrapper";

export default function IndependentWorkContainer(){
    const { tab = ContainerTabs.Menu } = useParams();
    const navigate = useNavigate();
    return (
        <ContainerLayout>
            {tab === ContainerTabs.Menu && (
                <IndependentWorkMenuWrapper
                    title
                    bgType="1"
                    select={(value: any)=>{
                        navigate({
                            pathname: `${RouteLinks.IndependentWorkRoute}/${ContainerTabs.View}`,
                            search: `?${createSearchParams({
                                independentWorkId: value.id
                            })}`
                        })
                    }}
                    />
           )}
            {tab === ContainerTabs.View && (
                <IndependentWorkViewWrapper/>
            )}
        </ContainerLayout>
    )
}