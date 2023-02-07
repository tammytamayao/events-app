import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Events from "../components/Events";
import Event from "../components/Event";
import NewEvent from "../components/NewEvent";
import EditEvent from "../components/EditEvent";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:id" element={<Event />} />
      <Route path="/events/new" element={<NewEvent />} />
      <Route path="/events/:id/edit" element={<EditEvent />} />
    </Routes>
  </Router>
);