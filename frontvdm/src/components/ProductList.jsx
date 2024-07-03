import styled from 'styled-components';
import products from './products';
import Product from './Product';
import { Link } from 'react-router-dom';


const Title = styled.h1`
  font-size: 50px;
  text-align: center;
`

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  margin: 50px;

  @media (max-width: 1380px){
  grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 1060px){
  grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px){
  display: flex;
  flex-direction: column;
  }
`;

const A = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;`

const ProductList = /* async */() => {


/* const test = await fetch('127.0.0.1:8000/furniture')

console.log(test.json) */
  
  return (
    <>
      <Title>Tous Les Produits</Title>

      <Link to="/AddProduct" style={{ textDecoration: "none", color: "#111111" }}><A>Ajouter au panier</A></Link>

      <List>
      
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </List>
      
    </>
  );
};

export default ProductList;
