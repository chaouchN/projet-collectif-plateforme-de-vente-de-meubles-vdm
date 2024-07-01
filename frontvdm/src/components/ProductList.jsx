import styled from 'styled-components';
import products from './products';
import Product from './Product';

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

const ProductList = /* async */() => {


/* const test = await fetch('127.0.0.1:8000/furniture')

console.log(test.json) */
  
  return (
    <>
      <Title>Tous Les Produits</Title>
      <List>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </List>
    </>
  );
};

export default ProductList;