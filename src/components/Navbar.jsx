import React, { useContext, useRef } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';
import useClickOutside from '../hooks/useClickOutside';

const Navbar = () => {
  const navRef = useRef();
  const theme = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  // Method
  const handleClick = () => {
    toggleAuth();
  };

  const clickOutside = () => {
    console.log('Clicked outside');
  };

  useClickOutside(navRef, clickOutside);
  // console.log("isAuthenticated", isAuthenticated);
  // console.log({ theme });

  return (
    <nav style={{ background: theme.ui, color: theme.syntax }} ref={navRef}>
      <h1>Context App</h1>
      <div onClick={handleClick}>
        Hi {isAuthenticated ? 'Krinesh' : 'Guest'}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

// ? Method 3 Using useContext hook in functional component

// const Navbar = () => {
//   const { isLightTheme, light, dark } = useContext(ThemeContext);
//   const { isAuthenticated, toggleAuth } = useContext(AuthContext);
//   const theme = isLightTheme ? light : dark;
//   // Method
//   const handleClick = () => {
//     toggleAuth();
//   };
//   // console.log("isAuthenticated", isAuthenticated);
//   console.log({ isLightTheme });

//   return (
//     <nav style={{ background: theme.ui, color: theme.syntax }}>
//       <h1>Context App</h1>
//       <div onClick={handleClick}>
//         Hi {isAuthenticated ? 'Krinesh' : 'Guest'}
//       </div>
//       <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//     </nav>
//   );
// };

// ? Method 2 using context consumer

// class Navbar extends React.Component {
//   render() {
//     return (
//       <AuthContext.Consumer>
//         {(authContext) => {
//           return (
//             <ThemeContext.Consumer>
//               {(themeContext) => {
//                 console.log(authContext);
//                 const { isAuthenticated, toggleAuth } = authContext;
//                 const { isLightTheme, light, dark } = themeContext;
//                 const theme = isLightTheme ? light : dark;

//                 const handleClick = () => {
//                   toggleAuth();
//                 };

//                 return (
//                   <nav style={{ background: theme.ui, color: theme.syntax }}>
//                     <h1>Context App</h1>
//                     <div onClick={handleClick}>
//                       Hi {isAuthenticated ? "Krinesh" : "Guest"}
//                     </div>
//                     <ul>
//                       <li>Home</li>
//                       <li>About</li>
//                       <li>Contact</li>
//                     </ul>
//                   </nav>
//                 );
//               }}
//             </ThemeContext.Consumer>
//           );
//         }}
//       </AuthContext.Consumer>
//     );
//   }
// }

// ? Method 1 using static contextType
// ? Which not work in case of multiple Context

// class Navbar extends React.Component {
//   static contextType = ThemeContext;
//   render() {
//     // console.log(this.context);
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
//       <nav style={{ background: theme.ui, color: theme.syntax }}>
//         <h1>Context App</h1>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     );
//   }
// }

export default Navbar;
