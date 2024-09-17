// src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About EventHub</h1>
        <p className="text-lg text-gray-600 mb-4">
          Welcome to EventHub! We are a leading platform for event planning and organization. Our goal is to simplify 
          the event planning process for individuals, organizations, and businesses by providing a seamless and 
          efficient platform to manage events, venues, and services.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          At EventHub, we understand that organizing events can be stressful. That's why we've created an all-in-one 
          solution that allows you to book venues, invite guests, manage RSVPs, and much more, all in one place.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          Whether it's a small gathering or a large-scale event, EventHub has the tools and expertise to make it a 
          success. Join us today and start planning your next event with ease!
        </p>
      </div>
    </div>
  );
};

export default About;
