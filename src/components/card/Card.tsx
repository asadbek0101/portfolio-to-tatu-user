import "./assets/card.scss";

interface CardProps{
    readonly image?: string;
    readonly title?: string;
    readonly description?: string;
    readonly onClick?: ()=> void;
    readonly className?: string;
}

export default function Card({
    image,
    title,
    description,
    className,
    onClick
}:CardProps){
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
                    onClick={onClick}
                    >Ko'rish</button>
            </div>
        </div>
    )
}