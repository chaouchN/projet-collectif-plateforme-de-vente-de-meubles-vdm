import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.div`
  border: 1px solid #111111;
  display: flex;
  flex-direction: column;
  `

const Image = styled.img`
  width: 300px;
  `

const Name = styled.h2``

const Description = styled.p``

const Price = styled.p``

const Button = styled.button`
  
    background-color: #FFFDF6;
    font-family: "Public Sans";
    font-size: 16px;
    font-weight: 500;
    color: #111111;
    border: 1px solid #111111;
    border-radius: 8px;
    padding: 10px 30px;
    position: relative;
    overflow: hidden;
    transition: color 0.4s;
    cursor: pointer;    
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #C1D9BC;
        transition: transform 0.4s;
        transform: scaleX(0);
        transform-origin: left;
        z-index: 0;
    }    
        &:hover::before {
        transform: scaleX(1);
    }    
        & > span {
        position: relative;
        z-index: 1;
    }
`



const Product = ({ product }) => {
  return (
    <Container>
      <Image src={product.image} alt={product.name}/>
      <Name>{product.name}</Name>
      <Description>{product.description}</Description>
      <Price>Prix: {product.price}€</Price>
      <Link to={`/product/${product.id}`} state={product}><Button><span>Découvrir</span></Button></Link>
    </Container>
  );
};


export default Product;
