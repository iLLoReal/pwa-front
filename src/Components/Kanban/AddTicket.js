import React, { useState } from "react";
import { requestTicketCreate } from "../../Services/RequestTickets";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

function AddTicket() {
  const [ticketName, setTicketName] = useState("");
  const [ticketDesc, setTicketDesc] = useState("");
  const [ticketTag, setTicketTag] = useState("");
  const history = useHistory();

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
    if (result.status === 200) {
      history.push("/kanban");
    }
  };
  return (
    <div style={{ display: "table" }}>
      <div style={{ display: "table-row" }}>
        <label style={{ display: "table-cell" }}>Name Ticket : </label>
        <input
          type="text"
          name="nameTicket"
          style={{ display: "table-cell" }}
          onChange={handleChangeTicketName}
        />
      </div>
      <div style={{ display: "table-row" }}>
        <label style={{ display: "table-cell" }}>Description Ticket : </label>
        <input
          type="text"
          name="nameTicket"
          style={{ display: "table-cell" }}
          onChange={handleChangeTicketDesc}
        />
      </div>
      <div style={{ display: "table-row" }}>
        <label style={{ display: "table-cell" }}>Tag Ticket : </label>
        <input
          type="text"
          name="nameTicket"
          onChange={handleChangeTicketTag}
          style={{ display: "table-cell" }}
        />
      </div>
      <div>
        <Button variant="dark" onClick={handleSubmit}>
          Create Ticket
        </Button>
      </div>
    </div>
  );
}

export default AddTicket;
