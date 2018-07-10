const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const defaultData = [
  {
    status: false,
    email: 'email 1',
    name: 'name 1',
    id: '1',
  },
  {
    status: false,
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

export const sendEmails = (to: [string]) => {
  console.log('Sending to ', to);
};
