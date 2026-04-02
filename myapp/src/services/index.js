const BASE_URL = "https://api.freeapi.app/api/v1/public";

export const API = async ({ endpoint }) => {
  const URL = BASE_URL + endpoint;
  const res = await fetch(URL);
  if (res.status >= 200 && res.status < 300) {
    const resData = await res.json();

    return resData;
  }
  throw res;
};
