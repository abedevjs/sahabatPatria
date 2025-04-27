import { createContext, useContext, useState } from "react";

//1. Create the context
const NavBarContext = createContext();

//2. Set the context value
function NavBarProvider({ children }) {
  const [isHover, setIsHover] = useState(false);

  function toggleIsHover() {
    setIsHover((current) => !current);
  }

  return (
    <NavBarContext.Provider value={{ isHover, toggleIsHover }}>
      {children}
    </NavBarContext.Provider>
  );
}

//3. Wrap the context into a function so it can be easily called
function useNavBar() {
  const context = useContext(NavBarContext);

  if (context === undefined)
    throw new Error("NavBarContext was used outside of DarkModeProvider");

  return context;
}

export { NavBarProvider, useNavBar };
