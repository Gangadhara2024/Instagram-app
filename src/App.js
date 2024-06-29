import "./auth-app.scss";
import { createContext, useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./Auth/Navbar";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import { Notfound } from "./Auth/Notfound";
import Auth from "./Auth/Auth";
import { useSelector } from "react-redux";
import { PostApp } from "./home/PostApp";

export const Themecontext = createContext();

const App = () => {
  const [theme, setTheme] = useState("light");
  const authref = useRef(new Auth());
  const loginStatus = useSelector((state) => state.auth.isLoggedIn);
  console.log(loginStatus);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const container = "container " + (theme === "dark" ? "dark-container" : "");

  if (!loginStatus) {
    return (
      <Themecontext.Provider value={{ theme, toggleTheme }}>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route
              path="login"
              element={
                <div className={container}>
                  <Login auth={authref.current} />
                </div>
              }
            />
            <Route
              path="signup"
              element={
                <div className={container}>
                  <Signup auth={authref.current} />
                </div>
              }
            />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
      </Themecontext.Provider>
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
