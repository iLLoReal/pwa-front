import React, { useState } from "react";
import styles from "./Ticket.module.css";
import { modifyTagTicket } from "../../Services/RequestTickets";

function Ticket(value) {
  const tags = JSON.parse(window.localStorage.getItem("cards"));
  const [tagSelected, setTagSelected] = useState(value.name.tags);
  console.log(value);

  const handleChangeSelect = async (e) => {
    console.log(e.target.value);
    setTagSelected(e.target.value);
    console.log(tagSelected);
    console.log(value.name.tags);
    if (value.name.tags !== e.target.value) {
      const result = await modifyTagTicket(
        { tags: e.target.value },
        value.name._id
      );
      console.log(result);
      window.location.reload();
    }
  };
  return (
    <li className={styles.ticket} draggable="true">
      <h2>{value.name.name}</h2>
      <p>{value.name.description}</p>
      <p>{value.name.tags}</p>
      <select onChange={handleChangeSelect} value={tagSelected}>
        {tags.map((v, index) => {
          return (
            <option value={v} key={index}>
              {v}
            </option>
          );
        })}
      </select>
    </li>
  );
}

export default Ticket;
