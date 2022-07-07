import { useEffect, useState } from "react";
import axios from 'axios';



const useGetItem = (API) => {
	const [item, setItem] = useState([]);

	useEffect(() => {
		async function check() {
		  const response = await axios(API);
		  //setItem(response.data);
		  setItem(response.data.items[0]);
		}

		check()
	}, []);

	return item;
};

export default useGetItem;