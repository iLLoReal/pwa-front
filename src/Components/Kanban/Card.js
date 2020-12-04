import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";
import {
  requestTicketGetAll,
  filterDataTag,
} from "../../Services/RequestTickets";
import Ticket from "./Ticket";

const Data = (tagCard) => {
  const [ticketList, setTicketList] = useState([]);
  const fetchData = async () => {
    var tmpList = [];
    const result = await filterDataTag(tagCard.tagCard);
    const resTicket = result;
    for (const [index, value] of Object.entries(resTicket)) {
      tmpList.push(<Ticket key={index} name={value} />);
    }
    setTicketList(tmpList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <ul className={styles.listTicket}>{ticketList}</ul>;
};
function Card(value) {
  return (
    <li className={styles.listwrapper}>
      <h2 className={styles.nameheader}>{value.name}</h2>
      <Data tagCard={value.name} />
    </li>
  );
}

export default Card;
