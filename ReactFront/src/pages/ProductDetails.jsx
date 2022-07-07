import React from 'react';
import { useParams } from "react-router-dom";
import BreadCrumb from '@components/BreadCrumb';
import useGetItem from '@hooks/useGetItem';
import useGetPrice from '@hooks/useGetPrice';
import Product from '@containers/Product';

const ProductDetails = () => {
  const params = useParams();

  console.log(params.id);

  const API = process.env.API_URL + 'items/' + params.id;

    console.log(API);


    const item = useGetItem(API);

	const price = useGetPrice(API);

	console.log(item);

	console.log('price', price);

	return (
		<section className="ProductDetails main-container">
		  <BreadCrumb />
		  <Product  item={item} price={price} key={item.id}  /> 
		</section>
	);
}

export default ProductDetails;