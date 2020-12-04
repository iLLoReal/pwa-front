import React, { useState } from "react";
import styles from "./Ticket.module.css";
import { modifyTagTicket } from "../../Services/RequestTickets";

function Ticket(value) {
  const tags = JSON.parse(window.localStorage.getItem("cards"));
  const [tagSelected, setTagSelected] = useState(value.name.tags);

  const handleChangeSelect = async (e) => {
    setTagSelected(e.target.value);
    if (value.name.tags !== e.target.value) {
      const result = await modifyTagTicket(
        { tags: e.target.value },
        value.name._id
      );
      if (result.status === 200) window.location.reload();
    }
  };
  return (
    <li className={styles.ticket} draggable="true">
      <h2>{value.name.name}</h2>
      <p>{value.name.description}</p>
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
