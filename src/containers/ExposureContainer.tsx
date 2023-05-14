import { useNavigate, createSearchParams, useParams } from "react-router-dom";
import { ContainerTabs, RouteLinks } from "../api/AppDto";
import ContainerLayout from "../components/app/ContainerLayout";
import ExposureMenuWrapper from "../components/exposure/ExposureMenuWrapper";
import ExposureViewWrapper from "../components/exposure/ExposureViewWrapper";

export default function ExposureContainer(){
    const { tab = ContainerTabs.Menu } = useParams();
    const navigate = useNavigate();
    return (
        <ContainerLayout>
            {tab === ContainerTabs.Menu && (
                <ExposureMenuWrapper
                    title
                    bgType="1"
                    select={(value: any)=>{
                        navigate({
                            pathname: `${RouteLinks.ExposureRoute}/${ContainerTabs.View}`,
                            search: `?${createSearchParams({
                                exposureId: value.id
                            })}`
                        })
                    }}
                    />
           )}
            {tab === ContainerTabs.View && (
                <ExposureViewWrapper/>
            )}
        </ContainerLayout>
    )
}