import React, { useState } from 'react';

export const ThemeContext = React.createContext();

const ThemeContextProvider = ({ children, theme }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

// ?
// const ThemeContextProvider = ({ children }) => {
//   const [state, setState] = useState({
//     isLightTheme: true,
//     light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
//     dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
//   });

//   const toggleTheme = () => {
//     setState({ ...state, isLightTheme: !state.isLightTheme });
//   };

//   return (
//     <ThemeContext.Provider value={{ toggleTheme, ...state }}>
//       {console.log(state.isLightTheme)}
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// class ThemeContextProvider extends React.Component {
//   state = {
//     isLightTheme: true,
//     light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
//     dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
//   };
//   toggleTheme = () => {
//     this.setState({ isLightTheme: !this.state.isLightTheme });
//   };

//   render() {
//     return (
//       <ThemeContext.Provider
//         value={{ ...this.state, toggleTheme: this.toggleTheme }}
//       >
//         {this.props.children}
//       </ThemeContext.Provider>
//     );
//   }
// }

export default ThemeContextProvider;
