import React, { useEffect, useState } from "react";
import { requestTicketCreate } from "../../Services/RequestTickets";

function AddTicket() {
  const [ticketName, setTicketName] = useState("");
  const [ticketDesc, setTicketDesc] = useState("");
  const [ticketTag, setTicketTag] = useState("");

  const handleChangeTicketName = (e) => {
    setTicketName(e.target.value);
  };

  const handleChangeTicketDesc = (e) => {
    setTicketDesc(e.target.value);
  };

  const handleChangeTicketTag = (e) => {
    setTicketTag(e.target.value);
  };

  const handleSubmit = async () => {
    console.log(ticketName, ticketDesc, ticketTag);
    const result = await requestTicketCreate({
      name: ticketName,
      description: ticketDesc,
      tags: ticketTag,
    });
    console.log(result);
    // if (result.status === 200) {
    //   window.location.reload();
    // }
  };
  return (
    <div>
      <label>Name Ticket</label>
      <input type="text" name="nameTicket" onChange={handleChangeTicketName} />
      <label>Description Ticket</label>
      <input type="text" name="nameTicket" onChange={handleChangeTicketDesc} />
      <label>Tag Ticket</label>
      <input type="text" name="nameTicket" onChange={handleChangeTicketTag} />
      <button onClick={handleSubmit}>Create Ticket</button>
      <input type="text" onClick={handleSubmit} />
    </div>
  );
}

export default AddTicket;
