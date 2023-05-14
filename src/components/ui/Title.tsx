import { ReactNode } from "react"
import { useNavigate } from "react-router-dom";
import "./assets/title.scss";

interface TitleProps{
    readonly children: ReactNode;
    readonly link?: string;
    readonly linkText?: string;
    readonly className?: string;
}

export default function Title({
    children,
    link,
    linkText,
    className
}:TitleProps){

    const navigate = useNavigate();

    return (
        <div className={`title-wrapper ${className}`}>
                <div className="title">
                    <span>{children}</span>
                </div>
            {Boolean(link) && (
                <button
                    onClick={()=>{
                        navigate(`${link}`)
                    }}
                    className="title-link-button"
                    >
                    {(link && !linkText ) ? "Barchasini ko'rish":linkText}
                </button>
            )}
        </div>
    )
}