import "../styles/Login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login-container">
      <form className="login-box">
       
      <h1>Login Page</h1>

      <label> Email Address:</label>
      <input type="email" placeholder="Enter Email" />
      <br /><br />
      <label>Password:</label>
      <input type="password" placeholder="Enter Password" />
      <br /><br />
       <Link to="/forgot-password">Forgot Password?</Link>
      <button type="submit">Login</button>
      <p className="register-link ">
      Don't have an account? <Link to="/register">Register</Link>
     </p>
    </form>
   </div>
  );
}

export default Login;