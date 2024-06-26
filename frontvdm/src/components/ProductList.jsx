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
`;

const ProductList = () => {
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