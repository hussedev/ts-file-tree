import ITree from '../ITree';

const BASE_URL = `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}`;

const ApiClient = {
  getTree: (path: string = ''): Promise<ITree> => {
    return fetchRequest(`tree/${path}`);
  },

  getFile: (path: string) => {
    return fetchRequest(`file/${path}`);
  },
};

const fetchRequest = (url: string) => {
  return fetch(`${BASE_URL}/${url}`)
    .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((err) => {
      console.log(`${err.message} while fetching /${url}`);
    });
};

export default ApiClient;
