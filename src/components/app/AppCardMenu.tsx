import { useLocation } from "react-router-dom";
import Card from "../card/Card";

export interface CardProps{
    readonly img: string;
    readonly title: string;
    readonly link: string;
    readonly description: string;
}

interface AppCardMenuProps{
    readonly data: CardProps[];
    readonly setEntity?: (value: CardProps) => void;
    readonly className?: string,
    readonly bgType: "1" | "2"
}

export default function AppCardMenu({
    data,
    className,
    bgType,
    setEntity,
}:AppCardMenuProps){

    return (
        <div
            className="row py-2"
            >
            {data.length > 0 ? data.map((entity: CardProps, index: number)=>{
                return (
                   <div
                        key={index}
                        className={`${className}`}
                        >
                     <Card
                        className={bgType === "1"? "bg-first" : "bg-second"}
                        image={entity.img}
                        title={entity.title}
                        link={entity.link}
                        description={entity.description}
                        onClick={() => setEntity && setEntity(entity)}
                        />
                   </div>
                )
            }):(
                <div className="d-flex justify-content-center align-items-center" style={{
                    height: "300px"
                }}>
                    <span className="fw-bold fs-2">Yuklanmoqda...</span>
                </div>
            )}       
        </div>
    )
}