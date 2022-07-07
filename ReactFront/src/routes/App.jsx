import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Search from '@pages/Search';
import SearchResult from '@pages/SearchResult';
import ProductDetails from '@pages/ProductDetails'
import NotFound from '@pages/NotFound';
import '@styles/global.scss';



const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route exact path="/" element={<Search />} />
					<Route exact path="/itemSearch:query" element= {<SearchResult/>} />
					<Route exact path="/items/:id" element={<ProductDetails />} />
                    <Route path="*" element={<NotFound />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;