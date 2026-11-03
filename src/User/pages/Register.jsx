import "../styles/Register.css";
import { Link } from "react-router-dom";
function Register() {
  return (
   <div className="register-container">
      <div className="register-box">
      <h1>Register Page</h1>

      <input type="text" placeholder="Enter Name" />
      <br /><br />

      <input type="email" placeholder="Enter Email" />
      <br /><br />

      <input type="password" placeholder="Enter Password" />
      <br /><br />

      <button>Register</button>
      <Link to="/login" className="Back-button">Back</Link>
    </div>
    </div>
  );
}

export default Register;