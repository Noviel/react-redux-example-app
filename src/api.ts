const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const defaultData = [
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

export const getData = async (query: string) => {
  await delay(500);

  return defaultData;
};

export const sendToUser = async (to: any) => {
  console.log('Sending to ', to);

  await delay(200);

  return { target: to, done: true };
};

export const deleteUsers = async (users: any[]) => {
  await delay(200);

  return { done: true, users };
};

export const API = {
  fetch: getData,
  send: sendToUser,
  delete: deleteUsers,
};
