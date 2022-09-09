import axios from 'axios';
import productJson from '@/assets/products.json';
import { mapActions, mapGetters, mapState } from 'vuex';

export default function () {
	let responseData = null;
	const getJsonData = async function (file) {
		try {
			responseData = await axios.get(file);
			let data = responseData.data;
			console.log('mixins data: ', data);
			return { data };
		} catch (error) {
			console.log(error);
		}
	};

	const retProductJson = productJson;
	return { getJsonData, retProductJson };
}
