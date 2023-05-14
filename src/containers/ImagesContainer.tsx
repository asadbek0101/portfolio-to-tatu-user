import { useNavigate, createSearchParams, useParams } from "react-router-dom";
import { ContainerTabs, RouteLinks } from "../api/AppDto";
import ContainerLayout from "../components/app/ContainerLayout";
import ExposureMenuWrapper from "../components/exposure/ExposureMenuWrapper";
import ExposureViewWrapper from "../components/exposure/ExposureViewWrapper";
import ImageMenuWrapper from "../components/image/ImageMenuWrapper";
import ImageViewWrapper from "../components/image/ImageViewWrapper";

export default function ImagesContainer(){
    const { tab = ContainerTabs.Menu } = useParams();
    const navigate = useNavigate();
    return (
        <ContainerLayout>
            {tab === ContainerTabs.Menu && (
                <ImageMenuWrapper
                    title
                    bgType="1"
                    select={(value: any)=>{
                        navigate({
                            pathname: `${RouteLinks.ImageRoute}/${ContainerTabs.View}`,
                            search: `?${createSearchParams({
                                imgId: value.id
                            })}`
                        })
                    }}
                    />
           )}
            {tab === ContainerTabs.View && (
                <ImageViewWrapper/>
            )}
        </ContainerLayout>
    )
}