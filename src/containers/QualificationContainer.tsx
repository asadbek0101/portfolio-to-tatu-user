import { useNavigate, createSearchParams, useParams } from "react-router-dom";
import { ContainerTabs, RouteLinks } from "../api/AppDto";
import ContainerLayout from "../components/app/ContainerLayout";
import ExposureMenuWrapper from "../components/exposure/ExposureMenuWrapper";
import ExposureViewWrapper from "../components/exposure/ExposureViewWrapper";
import QualificationMenuWrapper from "../components/qualification/QualificationMenuWrapper";
import QualificationViewWrapper from "../components/qualification/QualificationViewWrapper";

export default function QualificationContainer(){
    const { tab = ContainerTabs.Menu } = useParams();
    const navigate = useNavigate();
    return (
        <ContainerLayout>
            {tab === ContainerTabs.Menu && (
                <QualificationMenuWrapper
                    title
                    bgType="1"
                    select={(value: any)=>{
                        navigate({
                            pathname: `${RouteLinks.QualificationRoute}/${ContainerTabs.View}`,
                            search: `?${createSearchParams({
                                qualificationId: value.id
                            })}`
                        })
                    }}
                    />
           )}
            {tab === ContainerTabs.View && (
                <QualificationViewWrapper/>
            )}
        </ContainerLayout>
    )
}