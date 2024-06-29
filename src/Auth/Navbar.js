import { useContext } from "react";
import { Themecontext } from "../App";

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(Themecontext);

  return (
    <div className={`navbar ${theme === "dark" ? "dark-navbar" : ""}`}>
      <button className="theme material-icons" onClick={toggleTheme}>
        dark_mode
      </button>
    </div>
    
  );
};