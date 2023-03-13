
import './header.scss';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo-box">
            <a href="index.html" className="header__logo-link">
              <img className="header__logo-img" src="./images/logo.svg" alt="logo" />
              <p className="header__logo-descr">Meme Generator</p>
            </a>
          </div>
          <h2 className="header__text">
            Search your meme
          </h2>
        </div>
      </div>
    </header>
  );
}

export default Header;