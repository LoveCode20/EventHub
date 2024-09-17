import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white mt-10">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} EventHub. All rights reserved.</p>
        <p className="mt-2">
          Follow us on 
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="ml-2 hover:underline">
            Instagram
          </a>, 
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="ml-2 hover:underline">
            Twitter
          </a>, 
          and 
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="ml-2 hover:underline">
            Facebook
          </a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
