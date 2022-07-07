import React from 'react';
import { useParams } from "react-router-dom";
import '@styles/ProductList.scss';
import useGetProducts from '@hooks/useGetProducts';
import ProductItem from '@components/ProductItem';

const ProductList = () => {


  const params = useParams();

  const API = process.env.API_URL + 'search?q=' + params.query;


  const products = useGetProducts(API);

  
return (
      <div className="ProductList">
      {products.map(product => (
        <ProductItem product={product} key={product.id} />
       ))}: 

       </div>
    );
}

export default ProductList;