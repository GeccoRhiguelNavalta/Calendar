import React, { useState } from "react";
import { postOne } from "../service/APIrequests";

export default function CreateEvent() {
  const [data, setData] = useState({
    title: "",
    date: "",
    venue: "",
  });

  function onChange(event) {
    const selectedDate = new Date(event.target.value);
    const today = new Date();
    if (selectedDate < today) {
      return;
    }
    setData({ ...data, [event.target.name]: event.target.value });
  }

  function handleSubmit() {
    postOne(data);
  }

  const isDisabled = !data.title || !data.date || !data.venue;

  return (
    <div className="CreateEvent">
      <h2>Create New Event</h2>
      <form onSubmit={handleSubmit}>
        <label>TITLE</label>
        <input
          name="title"
          placeholder="Insert a title..."
          type="text"
          value={data.title}
          onChange={onChange}
        />
        <label>DATE</label>
        <input name="date" type="datetime-local" value={data.date} onChange={onChange} />
        <label>VENUE</label>
        <input
          name="venue"
          placeholder="Insert a venue..."
          type="text"
          value={data.venue}
          onChange={onChange}
        />
        <button type="create" disabled={isDisabled}>
          Create
        </button>
      </form>
    </div>
  );
}
