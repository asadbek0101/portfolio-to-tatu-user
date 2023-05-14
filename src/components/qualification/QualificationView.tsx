import AppView from "../app/AppView";

interface Props{
    readonly data: any;
}

export default function QualificationView({
    data
}:Props){
    return (<AppView
                    image={data.img}
                    title={data.title}
                    description={data.description}
                    />)
}