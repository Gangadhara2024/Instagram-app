import { createContext, useRef, useState } from "react";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import authAPI from "./Auth/authAPI";
import "./auth-app.scss";
import Navbar from "./Auth/Navbar";
import { useSelector } from "react-redux";
import { Notfound } from "./Auth/Notfound";
import PostApp from "./components/PostApp";

export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState("light");
  const authRef = useRef(authAPI());
  const loginStatus = useSelector((state) => state.auth.isLoggedIn);
  console.log(loginStatus);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const container = "container " + (theme === "dark" ? "dark-container" : "");

  if (!loginStatus) {
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
            <Route path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<PostApp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
