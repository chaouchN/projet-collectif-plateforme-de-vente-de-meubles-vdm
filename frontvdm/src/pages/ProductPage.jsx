import { useParams } from "react-router-dom"

let ProductPage = () => {
    const { id } = useParams();

    return (
        <>
        <h1>Product Page</h1>
        <p>Product ID: {id}</p>
        </>

    )
}

export default ProductPage