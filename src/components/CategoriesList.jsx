import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductsByCategories } from "../utils/api";
import ProductCard from "./ProductCard";

const CategoriesList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [productsListbyCategory, setProductListByCategory] = useState([]);
  const params = useParams();
  const category = params.category;

  useEffect(() => {
    setIsLoading(true);
    fetchProductsByCategories(category)
      .then((products) => {
        console.log(products);
        setProductListByCategory(products);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [category]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h4>Here are the Products in {category}</h4>
      {productsListbyCategory.length === 0 ? (
        <p>No products available in this category.</p>
      ) : (
        <div>
          {productsListbyCategory.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              productsListbyCategory={productsListbyCategory}
              setProductListByCategory={setProductListByCategory}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoriesList;
