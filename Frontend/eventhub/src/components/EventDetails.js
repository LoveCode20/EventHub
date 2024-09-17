import React from 'react';
import { useParams } from 'react-router-dom';

const eventDetails = {
  1: { id: 1, name: 'Music Concert', date: '2024-10-01', location: 'Lagos', description: 'Enjoy a night of amazing music.' },
  2: { id: 2, name: 'Tech Conference', date: '2024-11-05', location: 'Port Harcourt', description: 'A conference for tech enthusiasts.' },
};

const EventDetails = () => {
  const { id } = useParams();
  const event = eventDetails[id];

  if (!event) return <p>Event not found.</p>;

  return (
    <div className="container mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold">{event.name}</h2>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      <p className="mt-4">{event.description}</p>
    </div>
  );
};

export default EventDetails;
