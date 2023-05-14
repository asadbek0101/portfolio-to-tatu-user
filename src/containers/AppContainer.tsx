import { Route, Routes } from "react-router-dom";
import HomeContainer from "./HomeContainer";
import ArticleContainer from "./ArticleContainer";
import ExposureContainer from "./ExposureContainer";
import QualificationContainer from "./QualificationContainer";
import DGUContainer from "./DGUContainer";
import IndependentWorkContainer from "./IndependentWorkContainer";
import MyInformationContainer from "./MyInformationContainer";
import PracticalWorkContainer from "./PracticalWorkContainer";
import AppLayout from "../components/app/AppLayout";
import { RouteLinks, RouteLinksWithPath } from "../api/AppDto";
import ImagesContainer from "./ImagesContainer";

export default function AppContainer(){
    return (
       <AppLayout>
         <Routes>
            <Route path={RouteLinksWithPath.HomeRoute} element={<HomeContainer/>}/>
            <Route path={RouteLinksWithPath.ArticleRoute} element={<ArticleContainer/>}/>
            <Route path={RouteLinksWithPath.ExposureRoute} element={<ExposureContainer/>}/>
            <Route path={RouteLinksWithPath.QualificationRoute} element={<QualificationContainer/>}/>
            <Route path={RouteLinksWithPath.DGURoute} element={<DGUContainer/>}/>
            <Route path={RouteLinksWithPath.IndependentWorkRoute} element={<IndependentWorkContainer/>}/>
            <Route path={RouteLinksWithPath.MyInformationRoute} element={<MyInformationContainer/>}/>
            <Route path={RouteLinksWithPath.PracticalWorkRoute} element={<PracticalWorkContainer/>}/>
            <Route path={RouteLinksWithPath.ImageRoute} element={<ImagesContainer/>}/>
        </Routes>
       </AppLayout>
    )
}