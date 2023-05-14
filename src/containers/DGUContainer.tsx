import { useNavigate, createSearchParams, useParams } from "react-router-dom";
import { ContainerTabs, RouteLinks } from "../api/AppDto";
import ContainerLayout from "../components/app/ContainerLayout";
import DGUMenuWrapper from "../components/dgu/DGUMenuWrapper";
import DGUViewWrapper from "../components/dgu/DGUViewWrapper";

export default function DGUContainer(){
    const { tab = ContainerTabs.Menu } = useParams();
    const navigate = useNavigate();
    return (
        <ContainerLayout>
            {tab === ContainerTabs.Menu && (
                <DGUMenuWrapper
                    title
                    bgType="1"
                    select={(value: any)=>{
                        navigate({
                            pathname: `${RouteLinks.DGURoute}/${ContainerTabs.View}`,
                            search: `?${createSearchParams({
                                dguId: value.id
                            })}`
                        })
                    }}
                    />
           )}
            {tab === ContainerTabs.View && (
                <DGUViewWrapper/>
            )}
        </ContainerLayout>
    )
}