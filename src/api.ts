import axios from 'axios';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const endpointBase = 'https://5b3b45c9e7659e00149694a4.mockapi.io/api/db';

const mockData = [
  {
    status: false,
    email: 'email 1',
    name: 'name 1',
    id: '1',
  },
  {
    status: true,
    email: 'email 2',
    name: 'name 2',
    id: '2',
  },
  {
    status: true,
    email: 'email 3',
    name: 'name 3',
    id: '3',
  },
  {
    status: false,
    email: 'email 4',
    name: 'name 4',
    id: '4',
  },
];

export const getData = (query: string) =>
  axios.get(`${endpointBase}/users`).then(res => res.data);

export const sendToUser = (id: any) =>
  axios
    .put(`${endpointBase}/users/${id}`, { status: true })
    .then(res => ({ target: res.data.id }));

export const createUser = (data: any) =>
  axios.post(`${endpointBase}/users`, data).then(res => res.data);

export const deleteUsers = async (ids: any[]) => {
  const result = await Promise.all(
    ids.map(id => axios.delete(`${endpointBase}/users/${id}`))
  );

  const deletedIds = result.map(e => e.data.id);

  return { ids: deletedIds };
};

export const API = {
  fetch: getData,
  send: sendToUser,
  delete: deleteUsers,
  create: createUser,
};
