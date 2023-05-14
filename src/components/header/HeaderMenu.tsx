import { Link } from "react-router-dom";
import "./assets/header-menu.scss";
import { RouteLinks } from "../../api/AppDto";

export default function HeaderMenu(){
    return (
            <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Bo'limlar
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
               <Link to={RouteLinks.HomeRoute}>Asosiy</Link>
               <Link to={RouteLinks.ExposureRoute}>Ma'ruzalar</Link>
               <Link to={RouteLinks.PracticalWorkRoute}>Amaliy ishlar</Link>
               <Link to={RouteLinks.IndependentWorkRoute}>Mustaqil ishlar</Link>
               <Link to={RouteLinks.ArticleRoute}>Maqolalar</Link>
               <Link to={RouteLinks.DGURoute}>DGU</Link>
               <Link to={RouteLinks.MyInformationRoute}>Mening ma'lumotlarim</Link>
               <Link to={RouteLinks.QualificationRoute}>Sertfikatlar</Link>
               <Link to={RouteLinks.ImageRoute}>Rasmlar</Link>
            </div>
            </div>
    )
}