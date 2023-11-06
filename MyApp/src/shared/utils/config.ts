import axios, {AxiosInstance} from 'axios';
import {store} from '@redux';
import {BASE_URL} from '@env';

export const HTTP_CLIENT: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const initialConfig = (dispatch: any) => {
  HTTP_CLIENT.interceptors.request.use(
    (config: any) => {
      const {user} = store.getState().root;
      if (user && user?.authToken && config.headers) {
        config.headers.Authorization = `Bearer ${user?.authToken}`;
      }
      return config;
    },
    (err: any) => {
      Promise.reject(err);
    },
  );
};

// Add this App.tsx in useEffect
// useEffect(() => {
//   initialConfig(store.dispatch);
// }, []);
