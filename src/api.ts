const apiURL = 'https://hooks.zapier.com/hooks/catch/13092692/bqzcgtx/';
export const hireFormAction = async (reqBody): Promise<any> => {
  if (reqBody && typeof reqBody === 'object') {
    const resp = await fetch(apiURL, { body: JSON.stringify(reqBody), method: 'POST' });
    const data = await resp.json();
    console.log(data);
  }
};
