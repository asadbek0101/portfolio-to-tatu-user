import { useNavigate, createSearchParams, useParams } from "react-router-dom";
import { ContainerTabs, RouteLinks } from "../api/AppDto";
import ContainerLayout from "../components/app/ContainerLayout";
import ExposureMenuWrapper from "../components/exposure/ExposureMenuWrapper";
import ExposureViewWrapper from "../components/exposure/ExposureViewWrapper";
import MyInformationMenuWrapper from "../components/my-information/MyInformationMenuWrapper";
import MyInformationViewWrapper from "../components/my-information/MyInformationViewWrapper";

export default function MyInformationContainer(){
    const { tab = ContainerTabs.Menu } = useParams();
    const navigate = useNavigate();
    return (
        <ContainerLayout>
            {tab === ContainerTabs.Menu && (
                <MyInformationMenuWrapper
                    title
                    bgType="1"
                    select={(value: any)=>{
                        navigate({
                            pathname: `${RouteLinks.MyInformationRoute}/${ContainerTabs.View}`,
                            search: `?${createSearchParams({
                                myInformationId: value.id
                            })}`
                        })
                    }}
                    />
           )}
            {tab === ContainerTabs.View && (
                <MyInformationViewWrapper/>
            )}
        </ContainerLayout>
    )
}