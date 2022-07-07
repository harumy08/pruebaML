import React from 'react';
import '@styles/ProductItem.scss';
import noResult from '@img/NoSearch.png';

const NoProduct = () => {

	return (
		<div className="NoProduct">
		  <img src={noResult}  className="ItemImg" alt="No se encontraron resultados"/>
		  <div className="InfoItem">
		   <div className="info">
		    <h1>No hay publicaciones que coincidan con tu búsqueda.</h1>
		    <p>Revisa la ortografía de la palabra.</p>
            <p>* En el demo solo se incluyó la palabra: celulares.</p>
		   </div>
		  </div>
		</div>
	);
}

export default NoProduct;