export const useUser = () => ({
  getUser: (setting?: any): any => {
    const userState = useState('user');
    if (!userState.value) {
      userState.value = useFetch(`${setting.DATA_API}/users/1`);
    }
    return userState.value;
  }
});

export const useComments = () => ({
  getComments: (setting?: any): any => {
    const commentsState = useState('comments');
    if (!commentsState.value) {
      commentsState.value = useFetch(`${setting.DATA_API}/comments`);
    }
    return commentsState.value;
  }
});