import HeaderMenu from "./HeaderMenu";
import "./assets/header.scss";

export default function Header(){
    return (
        <header>
            <div className="container">
               <div className="logo">
                <span>Portfolio</span>
               </div>
               <HeaderMenu/>
            </div>
        </header>
    )
}