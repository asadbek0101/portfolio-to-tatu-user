import { Link, NavLink } from "react-router-dom";
import "./assets/footer.scss";
import { RouteLinks } from "../../api/AppDto";

export default function Footer(){
    return (
        <footer>
            <div className="container d-flex justify-content-between">
                <ul>
                    <li><a target="blank" href="https://web.telegram.org/k/#@turgunovakaromatxon"><strong>Telegram :</strong> @turgunovakaromatxon</a></li>
                    <li><a target="blank" href="https://www.instagram.com/turgunova_k/"><strong>Instagram :</strong> Turgunova_k</a></li>
                    <li><a target="blank" href="+998998744098"><strong>Phone :</strong> +998998744098</a></li>
                    <li><a target="blank" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#advanced-search/to=turgunovakaromatxon%40gmail.com&query=in%3Asent&isrefinement=true&todisplay=turgunovakaromatxon%40gmail.com"><strong>Email:</strong> turgunovakaromatxon@gmail.com</a></li>
                </ul>

               <div className="footer-menu d-flex gap-4">
                <div className="d-flex flex-column">
                <Link to={RouteLinks.ExposureRoute}>Ma'ruzalar</Link>
                <Link to={RouteLinks.PracticalWorkRoute}>Amaliy ishlar</Link>
                <Link to={RouteLinks.IndependentWorkRoute}>Mustaqil ishlar</Link>
                <Link to={RouteLinks.ArticleRoute}>Maqolalar</Link>
                </div>
                <div className="d-flex flex-column">
                <Link to={RouteLinks.DGURoute}>DGU</Link>
                <Link to={RouteLinks.MyInformationRoute}>Mening ma'lumotlarim</Link>
                <Link to={RouteLinks.QualificationRoute}>Sertfikatlar</Link>
                <Link to={RouteLinks.ImageRoute}>Rasmlar</Link>
                </div>
               </div>
            </div>
        </footer>
    )
}