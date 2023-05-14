import "./assets/app-view.scss";

interface Props{
    readonly image?: string;
    readonly title?: string;
    readonly description?: string;
}

export default function AppView({
    image,
    title,
    description,
}:Props){

    return (
        <>
        {Boolean(title)?(
            <div className="app-view-layout">
            {Boolean(image) && (
                <div className="app-view-image">
                    <img src={image} width="100%" alt="" />
                </div>
            )}
            {Boolean(title) && (
                <div className="app-view-title">
                    <span>{title}</span>
                </div>
            )}
            {Boolean(description) && (
                <div className="app-view-description">
                    <span>{description}</span>
                </div>
            )}
        </div>
            ):(
                <div className="d-flex justify-content-center align-items-center" style={{
                    height: "300px"
                }}>
                    <span className="fs-2">Yuklanmoqda...</span>
                </div>
            )}
        </>
      
    )
}