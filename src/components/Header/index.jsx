import airbnbLogo from "/assets/airbnb-logo.svg";
import "./Header.scss";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <a href="/">
          <img src={airbnbLogo} alt="airbnb-logo" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
