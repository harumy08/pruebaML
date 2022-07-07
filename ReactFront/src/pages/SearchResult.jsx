import React from 'react';
import BreadCrumb from '@components/BreadCrumb';
import ProductList from '@containers/ProductList';

const SearchResult = () => {

	return (

		<section className="SearchResult main-container">
		  <BreadCrumb />
		   <ProductList /> 
		  
		</section>
	);
}

export default SearchResult;