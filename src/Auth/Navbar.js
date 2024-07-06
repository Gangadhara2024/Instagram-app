import { useContext } from "react";
import { ThemeContext } from "../App";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`navbar ${theme === "dark" ? "dark-navbar" : ""}`}>
      <button className="theme material-icons" onClick={toggleTheme}>
        dark_mode
      </button>
    </div>
  );
};

export default Navbar;
