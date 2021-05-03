import ITree from 'types/ITree';

export const BASE_URL = `${
  process.env.REACT_APP_API_HOST || 'http://localhost'
}:${process.env.REACT_APP_API_PORT || 3002}`;

export const getTree = (path: string = ''): Promise<ITree> =>
  path === ''
    ? fetchRequest('tree', 'GET')
    : fetchRequest('tree', 'POST', { path });

const fetchRequest = (url: string, method: string, body?: { path: string }) => {
  if (body) {
    return fetch(`${BASE_URL}/${url}`, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
      .then((res) => res.json())
      .catch((err) => {
        console.log(`${err.message} while fetching /${url}`);
      });
  } else {
    return fetch(`${BASE_URL}/${url}`, {
      method,
    })
      .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
      .then((res) => res.json())
      .catch((err) => {
        console.log(`${err.message} while fetching /${url}`);
      });
  }
};

const ApiClient = {
  getTree,
};

export default ApiClient;
