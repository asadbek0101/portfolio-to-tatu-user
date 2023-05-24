import { useCallback } from "react";
import "./assets/card.scss";
import { request } from "../../api/request";

interface CardProps{
    readonly image?: string;
    readonly title?: string;
    readonly generateName?: string;
    readonly description?: string;
    readonly onClick?: ()=> void;
    readonly className?: string;
}

export default function Card({
    image,
    title,
    description,
    className,
    generateName,
    onClick
}:CardProps){

    const downloadFile = useCallback((file:any)=>{
        const index = file.indexOf('.');
        const type = file.substring(index+1)
        console.log(type)
        request.get(`/file/download/${file}`,
         {
            responseType: 'blob',
        }).then((response) => {
            const href = URL.createObjectURL(response.data);
            const link = document.createElement('a');
            link.href = href;
            link.setAttribute('download', `${file}.${type}`);
            document.body.appendChild(link);
            link.click();
        
            document.body.removeChild(link);
            URL.revokeObjectURL(href);
        });
    },[request])

    
    return (
        <div 
            className={`custom-card ${className}`}
            
            >
            <div className="custom-card-image">
                <img src={image} width="100%" alt="This is image" />
            </div>
            <div className="custom-card-title">
                <span>{title}</span>
            </div>
            <div className="custom-card-description">
                <span>{description}</span>
            </div>

            <div className="custom-card-footer">
                <button 
                    style={{width: generateName === ""?"100%":"80%"}}
                    onClick={onClick}
                    >Ko'rish</button>
                {generateName !== "" && (
                    <button
                        disabled={generateName !== ""?false:true}
                        onClick={()=>downloadFile(generateName)}
                        >
                            <i className="fa-solid fa-circle-down"></i>
                     </button>
                )}
            </div>
        </div>
    )
}