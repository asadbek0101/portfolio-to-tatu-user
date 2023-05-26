import AppView from "../app/AppView";

interface Props{
    readonly data: any;
}

export default function ImageView({
    data
}:Props){
    console.log(data)
    return (<AppView
                    image={data.img}
                    title={data.name}
                    description={data.description}
                    />)
}