import React from 'react';
import { useNavigate } from 'react-router-dom';
import '@styles/ProductItem.scss';
import shoppingCart from '@icons/ic_shipping.png';

const ProductItem = ({ product }) => {

	const navigate = useNavigate();

	 const handleClick = item => {
		console.log(item);
		navigate('/items/'+item)
	}

	return (
		<div className="ProductItem" onClick={() => handleClick(product.id)}>
		  <img src={product.items[0].picture} alt={product.items[0].title} className="ItemImg"/>
		  <div className="InfoItem">
		  <div className="priceCart">
		  <div className="price">${product.items[0].price.amount}.{product.items[0].price.decimals}</div> 
		    <img src={shoppingCart} alt="shoppingCart" className="iconCart" /><br/>
		   </div><br/>
		   <div className="info">
		    <p>{product.items[0].title}</p>
		    <p>{product.items[0].condition}</p>
		   </div>
		  </div>
		  <span className='location'>{product.items[0].location}</span>
		</div>
	);
}

export default ProductItem;