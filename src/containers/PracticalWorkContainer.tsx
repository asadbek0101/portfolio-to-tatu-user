import { useNavigate, createSearchParams, useParams } from "react-router-dom";
import { ContainerTabs, RouteLinks } from "../api/AppDto";
import ContainerLayout from "../components/app/ContainerLayout";
import PracticalWorkMenuWrapper from "../components/practical-work/PracticalWorkMenuWrapper";
import PracticalWorkViewWrapper from "../components/practical-work/PracticalWorkViewWrapper";

export default function PracticalWorkContainer(){
    const { tab = ContainerTabs.Menu } = useParams();
    const navigate = useNavigate();
    return (
        <ContainerLayout>
            {tab === ContainerTabs.Menu && (
                <PracticalWorkMenuWrapper
                    title
                    bgType="1"
                    select={(value: any)=>{
                        navigate({
                            pathname: `${RouteLinks.PracticalWorkRoute}/${ContainerTabs.View}`,
                            search: `?${createSearchParams({
                                practicalWorkId: value.id
                            })}`
                        })
                    }}
                    />
           )}
            {tab === ContainerTabs.View && (
                <PracticalWorkViewWrapper/>
            )}
        </ContainerLayout>
    )
}