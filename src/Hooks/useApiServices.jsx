import { useMutation } from "@tanstack/react-query";
import axios from 'axios'
import { apiUrl } from "../constants/constantVariable";




const useCustomUseMutation = ({ handleSuccess = () => { }, url = '', onError = () => { }, userIdKey ='userid', includeUserId = true }) => {
	// here includeUserId => parameter that control whether user id is passed or not \
	// userIdKey => it is bcs my backend sometime need user_id as key some times its user id,to tackle the issue
	return useMutation({
	  mutationFn: async (body) => {
		const requestBody = includeUserId
		  ? { ...body}
		  : body;   // i put ternary bcs some time i don't want  to pass userId
  
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
		  console.log(error, 'aaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb');
		  throw error;
		}
	  },
	  onError: (error) => onError(error),
	});
  };
  
  export { useCustomUseMutation};
  
	
	