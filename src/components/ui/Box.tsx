import { ReactNode } from "react";
import "./assets/box.scss";

interface Props{
    readonly children: ReactNode;
    readonly className?: string;
}

export default function Box({
    children,
    className
}:Props){
    
    return (
        <div
            className={`custom-box ${className}`}
            >
            <div className="container">
             {children}
            </div>
        </div>
    )
}