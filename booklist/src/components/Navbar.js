import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  const booksLength = books.length;
  return (
    <div className="navbar">
      <h1>Ninja Reading List</h1>
      <p>
        Currently you have {booksLength || 'no'} book
        {booksLength !== 1 ? 's' : ''} to get through...
      </p>
    </div>
  );
};

export default Navbar;
