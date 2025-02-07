import './header.scss';

function Header() {
    return (
        <div>
            <header className="header w-full p-4 lg:flex text-left">
                <h1 className="header__title font-bold text-3xl text-white">Tom's space</h1>
              <nav className="header__menu hidden">
                <li className="header__menu-item"><a href="">Home</a></li>
                <li className="header__menu-item"><a>Skills</a></li>
                <li className="header__menu-item"><a>Projects</a></li>
                <li className="header__menu-item"><a>About</a></li>
                <li className="header__menu-item"><a>Contact</a></li>
              </nav>
            </header>
        </div>

    )
}

export default Header;
