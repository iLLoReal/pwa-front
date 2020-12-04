import Axios from "axios";

async function requestLogin(data) {
  const result = await Axios({
    url: `${process.env.REACT_APP_API_URL}/users/login`,
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
    }),
    data: data,
  });
  return result;
}

async function requestCreateUser(data) {
  const result = await Axios({
    url: `${process.env.REACT_APP_API_URL}/users/register`,
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
    }),
    data: data,
  });
  return result;
}
export { requestLogin, requestCreateUser };
