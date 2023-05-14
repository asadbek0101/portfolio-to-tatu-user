import { ReactNode } from "react"

interface Props{
    readonly children: ReactNode;
}

export default function ContainerLayout({
    children
}:Props){
    return (
        <div className="container">
           {children}
        </div>
    )
}