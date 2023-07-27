import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import Products from "../../components/ProductCard";
import FeatureCard from "../../components/FeatureCard";
import Gallery from "../../components/Gallery";
import ProductCard from "../../components/ProductCard";
import Categories from "../../components/Categories";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=12"
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Hero />
      <Gallery />
      <Categories />
      <div className="flex flex-col text-center w-full mb-1">
        <h2 className="text-xs text-purple-500 tracking-widest font-medium title-font mb-1">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          MOST POPULAR PRODUCTS
        </h1>
      </div>
      {products.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <div>Loading.....</div>
      )}
      <Products />
    </>
  );
};

export default Home;
