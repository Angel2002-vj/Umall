import { useMutation } from "@tanstack/react-query";
import axios from 'axios'
import { apiUrl } from "../constants/constantVariable";




const useCustomUseMutation = ({ handleSuccess = () => { }, url = '', onError = () => { }, userIdKey ='userid', includeUserId = true }) => {

	return useMutation({
	  mutationFn: async (body) => {
		const requestBody = includeUserId
		  ? { ...body}
		  : body;   
  
		return await axios.post(`${apiUrl}${url}`, requestBody);
	  },
	  onSuccess: (data) => {
		console.log('if 200', data);
		try {
		  if (data.data.sts === '00') {
			throw data?.data;
		  } else {
			handleSuccess(data);
		  }
		} catch (error) {
		  console.log(error, 'aaaaaaaabbbbbbbbbbbbbb');
		  throw error;
		}
	  },
	  onError: (error) => onError(error),
	});
  };
  
  export { useCustomUseMutation};
  
	
	