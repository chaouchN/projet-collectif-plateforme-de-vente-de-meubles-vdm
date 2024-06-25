import products from './products';
import Product from './Product';

const ProductList = () => {
  return (
    <div>
      <h1>Liste des Produits</h1>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
