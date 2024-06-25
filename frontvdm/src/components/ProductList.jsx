import styled from 'styled-components';
import products from './products';
import Product from './Product';
import { Container } from 'react-bootstrap';

const Title = styled.h1`
  font-size: 64px;
  text-align: center;
`

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
`;

const ProductList = () => {
  return (
    <Container>
      <Title>Les Meubles</Title>
      <List>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </List>
    </Container>
  );
};

export default ProductList;