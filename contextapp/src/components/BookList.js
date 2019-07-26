import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ backgroundColor: theme.bg, color: theme.syntax }}>
      <ul>
        <li style={{ backgroundColor: theme.ui }}>The way of kings</li>
        <li style={{ backgroundColor: theme.ui }}>The name of the wind</li>
        <li style={{ backgroundColor: theme.ui }}>The final empire</li>
      </ul>
    </div>
  );
};

export default BookList;
