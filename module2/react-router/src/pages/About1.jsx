import { useParams } from "react-router-dom";

// useParams is for any route with query params being passed as an object
export function About1() {
    const { id } = useParams();

    return <h1>About {id}</h1>
}