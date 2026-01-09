import "../styles/nav.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo" onClick={() => navigate("/")}>
          BOUNTIES
        </div>
        <ul className="nav-links">
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/about")}>About</li>
          <li onClick={() => navigate("/products")}>Shop</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
