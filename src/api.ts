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

const getUsers = (query: string) =>
  axios.get(`${endpointBase}/users`).then(res => res.data);

const createUser = (data: any) =>
  axios.post(`${endpointBase}/users`, data).then(res => res.data);

const deleteUsers = async (ids: string[]) => {
  const result = await Promise.all(
    ids.map(id => axios.delete(`${endpointBase}/users/${id}`))
  );

  const deletedIds = result.map(e => e.data.id);

  return { ids: deletedIds };
};

const sendToUser = (id: any) =>
  axios
    .put(`${endpointBase}/users/${id}`, { status: true })
    .then(res => ({ target: res.data.id }));

export const mockAPI = {
  fetch: getUsers,
  create: createUser,
  delete: deleteUsers,
  send: sendToUser,
};

export const API = {
  async fetch(query: string) {
    await delay(250);

    return mockData;
  },

  async create(data: any) {
    await delay(100);

    return data;
  },

  async delete(ids: string[]) {
    await delay(100);

    return { ids };
  },

  async send(id: string) {
    await delay(100);

    return { target: id };
  },
};
