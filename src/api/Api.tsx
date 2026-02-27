import axios from 'axios';

export const BASE_URL = 'https://dummyjson.com/';

const AXIOS = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
});

const construsctApi = (path: any, method: any, body: string | undefined) => ({
  url: path,
  method: method,
  data: body,
});

const request = {
  get: (path: any) => AXIOS(construsctApi(path, 'get', '')),
  post: (path: any, body: string) => AXIOS(construsctApi(path, 'post', body)),
  put: (path: any, body: string) => AXIOS(construsctApi(path, 'put', body)),
  delete: (path: any) => AXIOS(construsctApi(path, 'delete', '')),
};

const requestPath = {
  users: 'users',
};

const ApiManager = {
    getUsers: () => {
        return request.get(requestPath.users)
    }
}

export default ApiManager