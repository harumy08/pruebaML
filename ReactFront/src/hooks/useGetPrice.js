import { useEffect, useState } from "react";
import axios from 'axios';



const useGetPrice = (API) => {
	const [price, setPrice] = useState([]);

	useEffect(() => {
		async function check() {
		  const response = await axios(API);
		  setPrice(response.data.items[0].price);
		}

		check()
	}, []);

	return price;
};

export default useGetPrice;