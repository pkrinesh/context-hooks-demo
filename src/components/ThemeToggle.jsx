import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = ({ toggleDarkMode, toggleAutoDarkMode }) => {
  const toggleDark = () => {
    toggleDarkMode((prevState) => !prevState);
  };
  const toggleAuto = () => {
    toggleAutoDarkMode((prevState) => !prevState);
  };
  return (
    <>
      <button onClick={toggleDark}>Toggle Theme</button>
      <button onClick={toggleAuto}>Toggle Auto Mode</button>
    </>
  );
};

// ? Method 3 using useContext hook in function component

// const ThemeToggle = () => {
//   const { toggleTheme } = useContext(ThemeContext);
//   return <button onClick={toggleTheme}>Toggle Theme</button>;
// };

// ? Method 2 using context consumer

// const ThemeToggle_2 = () => {
//   return (
//     <ThemeContext.Consumer>
//       {(themeContext) => {
//         const { toggleTheme } = themeContext;
//         return <button onClick={toggleTheme}>Toggle Theme</button>;
//       }}
//     </ThemeContext.Consumer>
//   );
// };

// ? Method 1 that works only on class component
// ? Cant use with multiple context

// class ThemeToggle extends React.Component {
//   static contextType = ThemeContext;
//   render() {
//     const { toggleTheme } = this.context;
//     return <button onClick={toggleTheme}>Toggle Theme</button>;
//   }
// }

export default ThemeToggle;
