import Axios from "axios";

async function requestLogin(data) {
  const result = await Axios({
    url: "http://https://api-pwa-project.herokuapp.com/users/login",
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
    }),
    data: data,
  });
  return result;
}

export { requestLogin };
