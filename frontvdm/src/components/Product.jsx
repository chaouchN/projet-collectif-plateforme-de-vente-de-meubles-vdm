const Product = ({ product }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <img src={product.image} alt={product.name} style={{ width: '300px' }} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Prix: {product.price}€</p>
      <button>ACHETEEEEEEEZ</button>
    </div>
  );
};

export default Product;
