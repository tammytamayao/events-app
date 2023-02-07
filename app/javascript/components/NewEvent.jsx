import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NewEvent = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [event_time, setEvent_time] = useState("");

  const onChange = (event, setFunction) => {
    setFunction(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const url = "/api/v1/events/create";

    if (name.length == 0 || event_time == null)
      return;

    const body = {
      name,
      event_time
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => navigate(`/events/${response.id}`))
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-lg-6 offset-lg-3">
          <h1 className="font-weight-normal mb-5">Add New Event</h1>

          <form onSubmit={onSubmit}>

            <div className="form-group">
              <label htmlFor="recipeName">Event Name</label>
              <input
                type="text"
                name="name"
                id="recipeName"
                className="form-control"
                required
                onChange={(event) => onChange(event, setName)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="recipeIngredients">Event Time</label>
              <input
                type="datetime-local"
                name="ingredients"
                id="recipeIngredients"
                className="form-control"
                required
                onChange={(event) => onChange(event, setEvent_time)}
              />
            </div>

            <button type="submit" className="btn custom-button mt-3">Create Event</button>
            <Link to="/events" className="btn btn-link mt-3">Back to events list</Link>

          </form>
        </div>
      </div>
    </div>
  );
};

export default NewEvent;