import {useParams} from "react-router-dom";


export default function WelcomePage() {
    const params = useParams()

    return (
        <p>Welcome!{params.name}</p>
    );
}