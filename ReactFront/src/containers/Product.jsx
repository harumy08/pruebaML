import React from 'react';
import '@styles/ProductDetails.scss';
import BtnShop from '@utilities/BtnShop';

const Product =  ({ item, price }) => {

  //const item = item;

  console.log(item);
  

    return (
      <div className="Product">
       <div className='infoProduct'>
         <img src={item.picture} alt={item.title}/>
        <div className='infoProducttxt'>
         <h1>Descripción del producto</h1>
         <p>{item.description}</p>
        </div>
       </div>
       <div className='costProduct'>
        <div className='tag'>{item.condition} - {item.sold_quantity} vendidos</div>
        <div className='descrip'>{item.title}</div>
        <div className='costo'>${price.amount}.{price.decimals} {price.currency}</div>
        <BtnShop />
       </div>
      </div>
    );
}

export default Product;