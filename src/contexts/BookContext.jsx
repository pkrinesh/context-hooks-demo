import React, { createContext, useState } from 'react';
import { nanoid } from 'nanoid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'The final empire', id: nanoid() },
    { title: 'The name of the wind', id: nanoid() },
    { title: 'The way of Kings', id: nanoid() },
    { title: 'Davinci code', id: nanoid() },
  ]);
  return (
    <BookContext.Provider value={books}>{props.children}</BookContext.Provider>
  );
};

export default BookContextProvider;
