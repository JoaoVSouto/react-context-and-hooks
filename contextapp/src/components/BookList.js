import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ backgroundColor: theme.bg, color: theme.syntax }}>
      <ul>
        {books &&
          books.map(book => (
            <li key={book.id} style={{ backgroundColor: theme.ui }}>
              {book.title}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BookList;
