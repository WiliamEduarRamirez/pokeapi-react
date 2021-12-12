import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const request = {
  get: <T>(url: string): Promise<T> => axios.get<T>(url).then(responseBody),
  getParams: <T>(url: string, params: URLSearchParams): Promise<T> =>
    axios.get<T>(url, { params }).then(responseBody),
  post: <T>(url: string, body: {}): Promise<T> => axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}): Promise<T> => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string): Promise<T> => axios.delete<T>(url).then(responseBody)
};

export default request;
