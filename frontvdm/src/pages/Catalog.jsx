import ProductList from "../components/ProductList";
import Filters from "../components/Filters";
import { useState } from "react";

const Catalog = () => {
  const [isProductListVisible, setProductListVisible] = useState(false);

  const toggleProductListVisibility = () => {
    setProductListVisible(!isProductListVisible);
  };

  return (
    <>
      <Filters onClick={toggleProductListVisibility} />
      {isProductListVisible && <ProductList />}
    </>
  );
};

export default Catalog;
