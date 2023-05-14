import AppCardMenu, { CardProps } from "../app/AppCardMenu";

interface Props{
    readonly data: CardProps[];
    readonly bgType: "1" | "2";
    readonly setEntity: (value: any) => void;
}

export default function ExposureMenu({
    data,
    setEntity,
    bgType
}:Props){
    return (
            <AppCardMenu 
                bgType={bgType}
                data={data}
                className="col-3 my-2"
                setEntity={setEntity}
                />
    )
}