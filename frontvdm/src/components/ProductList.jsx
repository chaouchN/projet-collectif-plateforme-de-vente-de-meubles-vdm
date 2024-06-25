import styled from 'styled-components';
import products from './products';
import Product from './Product';


const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
`;

const ProductList = () => {
  return (
    <div>
      <h1>La came</h1>
      <List>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </List>
    </div>
  );
};

export default ProductList;