import Axios from "axios";

async function requestTicketCreate(data) {
  const url = process.env.REACT_APP_API_URL + "/ticket/create";
  console.log(url);
  const result = await Axios({
    url: url,
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
    }),
    data: data,
  });
  return result;
}

async function requestTicketGetAll() {
  const result = await Axios({
    url: `${process.env.REACT_APP_API_URL}/ticket/`,
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
    }),
  });
  return result;
}

async function filterDataTag(tagCard) {
  const result = await requestTicketGetAll();
  const tickets = result.data.tickets.filter((elem) => {
    return elem.tags === tagCard;
  });
  return tickets;
}

async function modifyTagTicket(newTag, idTicket) {
  const result = await Axios({
    url: `${process.env.REACT_APP_API_URL}/ticket/${idTicket}`,
    method: "PUT",
    headers: new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "*/*",
    }),
    data: newTag,
  });
  return result;
}
export {
  requestTicketCreate,
  requestTicketGetAll,
  filterDataTag,
  modifyTagTicket,
};
