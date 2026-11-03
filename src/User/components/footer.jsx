
import "../styles/footer.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section: Logo */}
        <div className="footer-about">
          <Link to="/">
            <img
              src={logo}
              alt="TalentGrid Logo"
              className="footer-logo"
            />
          </Link>

          <p>© 2026 TalentGrid. All rights reserved.</p>
        </div>

        {/* Center Section: Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/job">Jobs</Link></li>
            <li><Link to="/terms">Terms & Condition</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
          </ul>
        </div>

        {/* Right Section: For Job Seekers */}
        <div className="footer-links">
          <h3>For Job Seekers</h3>
          <ul>
            <li><Link to="/jobs">Browse Jobs</Link></li>
            <li><Link to="/register">Create Account</Link></li>
            <li><Link to="/login">Sign In</Link></li>
          </ul>
        </div>
        <div className="social-icons">
          <a href="https://facebook.com" aria-label="Facebook">
            <FaFacebook />
          </a>

          <a href="https://instagram.com" aria-label="Instagram">
            <FaInstagram />
          </a>

          <a href="https://linkedin.com" aria-label="LinkedIn">
            <FaLinkedin />
          </a>

          <a href="https://github.com" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
