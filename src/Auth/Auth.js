import axios from "axios";

class Auth {
  async signupUser(signupInfo) {
    try {
      await axios({
        url: "https://node-auth-jwt-w78c.onrender.com/auth/signup",
        method: "POST",
        data: signupInfo,
      });
      return { success: true };
    } catch (error) {
      alert("signup failed");
      return { success: false };
    }
  }

  async loginUser(credentials) {
    try {
      const response = await axios({
        url: "https://node-auth-jwt-w78c.onrender.com/auth/login",
        method: "POST",
        data: credentials,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      return { success: true };
    } catch (error) {
      alert("login failed");
      return { success: false };
    }
  }
}
export default Auth;
