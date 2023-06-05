import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import useMediaQuery from './useMediaQuery';

const useDarkMode = () => {
  const [preferDarkMode, query] = useMediaQuery(
    ['(prefers-color-scheme: dark)'],
    [true],
    false,
  );

  const [isDark, setIsDark] = useLocalStorage('dark-mode', preferDarkMode);
  const [autoMode, setAutoMode] = useLocalStorage('auto-dark-mode', true);

  useEffect(() => {
    const matcher = query;
    const onChange = ({ matches }) => setIsDark(matches);

    if (autoMode) {
      matcher.addEventListener('change', onChange);
      setIsDark(preferDarkMode);
    }

    return () => {
      matcher.removeEventListener('change', onChange);
    };
  }, [autoMode]);

  //? When you want user to manually change theme and also disable autoDarkMode
  // const setDarkMode = (newState) => {
  //   try {
  //     const newStateVal =
  //       typeof newState === 'function' ? newState(isDark) : newState;
  //     setIsDark(newStateVal);
  //     setAutoMode(false);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return [isDark, setIsDark, setAutoMode];
};

// ? useDarkMode without localStorage
// const useDarkMode = () => {
//   const [isDark, setIsDark] = useState(
//     () =>
//       window.matchMedia &&
//       window.matchMedia('(prefers-color-scheme: dark)').matches
//   );

//   useEffect(() => {
//     const matcher = window.matchMedia('(prefers-color-scheme: dark)');
//     const onChange = ({ matches }) => setIsDark(matches);
//     matcher.addEventListener('change', onChange);

//     return () => {
//       matcher.removeEventListener('change', onChange);
//     };
//   }, []);

//   const setDarkMode = (newState) => {
//     try {
//       const newStateVal =
//         typeof newState === 'function' ? newState(isDark) : newState;
//       setIsDark(newStateVal);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return [isDark, setDarkMode];
// };
export default useDarkMode;
