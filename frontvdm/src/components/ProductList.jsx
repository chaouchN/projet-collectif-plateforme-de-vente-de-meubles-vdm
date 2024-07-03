import styled from 'styled-components';
//import products from './products';
import Product from './Product';
import React, { useState, useEffect } from "react";



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

const ProductList = () => {


  const [allProducts, setAllProducts] = useState([]);
  // useEffect(() => {
    

  //   fetch('http://localhost:8000/furniture')
  //     .then(response => response.json())
  //     .then((products) => {
  //       setProducts(products);console.log(products)})
  //     .catch(error => console.error(error));
  // }, []);

  const fetchInfo = async () => {
    await fetch ("http://localhost:8000/furniture")
    .then ((res) => res.json())
    .then((product) => setAllProducts(product)
  );
  }

  useEffect(() => {
    fetchInfo();
  },[])

  return (
    <>
      <Title>Tous Les Produits</Title>
      <List>
        {allProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </List>
    </>
  );
};



export default ProductList;