const setting = useRuntimeConfig();
const userState = useState('user');

export const useUser = () => userState.value ? userState.value 
  : useFetch(`${setting.DATA_API}/users/1`).then((response) => {
    userState.value = response;
    return response;
  });