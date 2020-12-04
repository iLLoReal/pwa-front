import React, { useState } from "react";
import { requestTicketCreate } from "../../Services/RequestTickets";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import Webcam from "react-webcam";

function AddTicket() {
  const tags = JSON.parse(window.localStorage.getItem("cards"));
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
    const result = await requestTicketCreate({
      name: ticketName,
      description: ticketDesc,
      tags: ticketTag,
    });
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
        <select
          style={{ display: "table-cell" }}
          onChange={handleChangeTicketTag}
          value={ticketTag}
        >
          {tags.map((v, index) => {
            return (
              <option value={v} key={index}>
                {v}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <Button variant="dark" onClick={handleSubmit}>
          Create Ticket
        </Button>
      </div>
      <div>
        <Webcam audio={false} height={200} width={200} />
      </div>
    </div>
  );
}

export default AddTicket;
