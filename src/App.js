import { createContext, useRef, useState } from "react";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import authAPI from "./Auth/authAPI";
import "./auth-app.scss";
import Navbar from "./Navbar";

export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState("light");
  const authRef = useRef(authAPI());
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const container = "container " + (theme === "dark" ? "dark-container" : "");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            path="signup"
            element={
              <div className={container}>
                <Signup auth={authRef.current} />
              </div>
            }
          />
          <Route
            path="login"
            element={
              <div className={container}>
                <Login auth={authRef.current} />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
