import { useEffect, useState } from "react";
import Product from "../components/Product";

function ProductList() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://kea-alt-del.dk/t7/api/products?limit=50")
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
      });
  }, []);

  return (
    <div id="productList">
      {allProducts.map((product) => (
        <Product key={Math.random()} {...product} />
      ))}
    </div>
  );
}

export default ProductList;
