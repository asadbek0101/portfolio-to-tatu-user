import { ReactNode } from "react"
import HomeLogo from "./HomeLogo";

interface Props{
    readonly children: ReactNode;
}

export default function HomeLayout({
    children,
}:Props){
    return (
        <div
            className="home-layout"
            >
        <div className="home-layout-logo">
            <HomeLogo/>
        </div>
            {children}
        </div>
    )
}