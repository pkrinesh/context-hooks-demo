import React, { useContext } from 'react';
import { nanoid } from 'nanoid';

// import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';
import useStore from '../store/useStore';

// ? Method 3 Using useContext hook in functional component

const BookList = () => {
  const theme = useContext(ThemeContext);
  // const books = useContext(BookContext);
  const [{ books }, setBooks] = useStore();
  // const theme = isLightTheme ? light : dark;

  console.log({ theme });
  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id} style={{ background: theme.ui }}>
              {book.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// ? Method 2 to consume context without hooks using class component
// class BookList extends React.Component {
//   render() {
//     return (
//       <ThemeContext.Consumer>
//         {(context) => {
//           const { isLightTheme, dark, light } = context;
//           const theme = isLightTheme ? light : dark;
//           return (
//             <div
//               className="book-list"
//               style={{ color: theme.syntax, background: theme.bg }}
//             >
//               <ul>
//                 <li style={{ background: theme.ui }}>The way of Kings</li>
//                 <li style={{ background: theme.ui }}>The name of the wind</li>
//                 <li style={{ background: theme.ui }}>The final empire</li>
//               </ul>
//             </div>
//           );
//         }}
//       </ThemeContext.Consumer>
//     );
//   }
// }

export default BookList;
