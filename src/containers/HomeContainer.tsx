import { useNavigate } from "react-router-dom";
import HomeLayout from "../components/home/HomeLayout";
import Box from "../components/ui/Box";
import Title from "../components/ui/Title";
import { RouteLinks } from "../api/AppDto";
import ExposureMenuWrapper from "../components/exposure/ExposureMenuWrapper";
import ArticleMenuWrapper from "../components/article/ArticleMenuWrapper";
import PracticalWorkMenuWrapper from "../components/practical-work/PracticalWorkMenuWrapper";
import IndependentWorkMenuWrapper from "../components/independent work/IndependentWorkMenuWrapper";
import DGUMenuWrapper from "../components/dgu/DGUMenuWrapper";
import MyInformationMenuWrapper from "../components/my-information/MyInformationMenuWrapper";
import QualificationMenuWrapper from "../components/qualification/QualificationMenuWrapper";
import ImageMenuWrapper from "../components/image/ImageMenuWrapper";

export default function HomeContainer(){

    const naviaget = useNavigate();
    return (
     <HomeLayout>
        
        <Box
            className="bg-first"
            >
                <Title
                    link={RouteLinks.ExposureRoute}
                    className="d-flex justify-content-between custom-border"
                    linkText="Barchasini ko'rish"
                    >
                    Maruzalar
                </Title>
                <ExposureMenuWrapper
                    bgType="2"
                    limit={8}
                    select={(value: any)=>naviaget(`/exposure/show?exposureId=${value.id}`)}
                    />
        </Box>

        <Box
            className="bg-second"
            >
                <Title
                    className="custom-border d-flex justify-content-between"
                    link={RouteLinks.ArticleRoute}
                    >
                    Maqolalar
                </Title>
                <ArticleMenuWrapper
                    bgType="1"
                    limit={8}
                    select={(value: any)=>naviaget(`/exposure/show?articleId=${value.id}`)}
                    />
        </Box>

        <Box
            className="bg-first"
            >
                <Title
                    className="custom-border d-flex justify-content-between"
                    link={RouteLinks.PracticalWorkRoute}
                    >
                    Amaliy Ishlar
                </Title>
                <PracticalWorkMenuWrapper
                    bgType="2"
                    limit={8}
                    select={(value: any)=>naviaget(`/practical-work/show?practicalWorkId=${value.id}`)}
                    />
        </Box>

        <Box
            className="bg-second"
            >
                <Title
                    className="custom-border d-flex justify-content-between"
                    link={RouteLinks.IndependentWorkRoute}
                    >
                    Mustaqil Ishlar
                </Title>
                <IndependentWorkMenuWrapper
                    bgType="1"
                    limit={8}
                    select={(value: any)=>naviaget(`/independent-work/show?independentWorkId=${value.id}`)}
                    />
               
        </Box>

        <Box
            className="bg-first"
            >
                <Title
                    className="custom-border d-flex justify-content-between"
                    link={RouteLinks.DGURoute}
                    >
                    DGU
                </Title>
                <DGUMenuWrapper
                    bgType="2"
                    limit={8}
                    select={(value: any)=>naviaget(`/dgu/show?dguId=${value.id}`)}
                    />
        </Box>

        <Box
            className="bg-second"
            >
                <Title
                    className="custom-border d-flex justify-content-between"
                    link={RouteLinks.MyInformationRoute}
                    >
                    Mening Ma'lumotlarim
                </Title>
                <MyInformationMenuWrapper
                    bgType="1"
                    limit={8}
                    select={(value: any)=>naviaget(`/my-information/show?myInformationId=${value.id}`)}
                    />
               
        </Box>

        <Box
            className="bg-first"
            >
                <Title
                    className="custom-border d-flex justify-content-between"
                    link={RouteLinks.QualificationRoute}
                    >
                    Sertfikatlar
                </Title>
                <QualificationMenuWrapper
                    bgType="2"
                    limit={8}
                    select={(value: any)=>naviaget(`/qualification/show?qualificationId=${value.id}`)}
                    />
               
        </Box>

        <Box
            className="bg-second"
            >
                <Title
                    className="custom-border d-flex justify-content-between"
                    link={RouteLinks.ImageRoute}
                    >
                    Rasmlar
                </Title>
                <ImageMenuWrapper
                    bgType="1"
                    limit={8}
                    select={(value: any)=>naviaget(`/image/show?imgId=${value.id}`)}
                    />
        </Box>
     </HomeLayout>
    )
}