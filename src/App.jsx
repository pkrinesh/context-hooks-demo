/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import './App.css';

import { useDarkMode } from './hooks';
import {
  AuthContextProvider,
  BookContextProvider,
  ThemeContextProvider,
} from './contexts';
import { BookList, Navbar, ThemeToggle } from './components';

import { StoreProvider } from './store/useStore';

function App() {
  const initialState = {
    books: [
      { title: 'The final empire', id: nanoid() },
      { title: 'The name of the wind', id: nanoid() },
      { title: 'The way of Kings', id: nanoid() },
      { title: 'Davinci code', id: nanoid() },
    ],
  };

  const themeObj = {
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
  };

  const [darkMode, setDarkMode, setAutoDarkMode] = useDarkMode();
  const [theme, setTheme] = useState(darkMode ? themeObj.dark : themeObj.light);

  useEffect(() => {
    darkMode ? setTheme(themeObj.dark) : setTheme(themeObj.light);
  }, [darkMode]);

  return (
    <div className="App">
      <ThemeContextProvider theme={theme}>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <StoreProvider initialState={initialState}>
              <BookList />
            </StoreProvider>
          </BookContextProvider>
          <ThemeToggle
            toggleDarkMode={setDarkMode}
            toggleAutoDarkMode={setAutoDarkMode}
          />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;

// ! Demo Counter app using ueReducer
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { createContext, useContext, useReducer } from "react";

// const initialState = 0;

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       console.log(action);
//       return state + action.step;
//     case "DECREMENT":
//       return state - 1 >= 0 ? state - 1 : 0;
//     default:
//       return state;
//   }
// };

// const CountContext = createContext(null);

// const CountProvider = ({ children }) => (
//   <CountContext.Provider value={useReducer(reducer, initialState)}>
//     {children}
//   </CountContext.Provider>
// );

// const useCount = () => {
//   const value = useContext(CountContext);
//   console.log(value);
//   if (value === null) throw new Error("CountProvider missing");
//   return value;
// };

// const Header = ({ text }) => <h1>{text}</h1>;

// const Button = ({ label, onClick }) => (
//   <button onClick={onClick}>{label}</button>
// );

// const Home = () => {
//   const [state] = useCount();
//   return <Header text={state} />;
// };

// const Controls = () => {
//   const [state, dispatch] = useCount();
//   return (
//     <>
//       <Header text={state} />
//       <Button onClick={() => dispatch({ type: "DECREMENT" })} label="-" />
//       <Button
//         onClick={() => dispatch({ type: "INCREMENT", step: 2 })}
//         label="+"
//       />
//     </>
//   );
// };

// const App = () => {
//   return (
//     <CountProvider>
//       <Router>
//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="/controls">Controls</Link>
//         </nav>
//         <Switch>
//           <Route path="/controls">
//             <Controls />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </Router>
//     </CountProvider>
//   );
// };

// export default App;
