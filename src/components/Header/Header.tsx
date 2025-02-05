import './header.scss';

function Header() {
    return (
        <div>
            <header className="header w-full p-2 lg:flex items-center justify-around">
                <h1 className="header__title font-bold text-3xl text-white">Tom<span>'</span>space</h1>
              <nav className="header__menu hidden lg:flex flex-row flex-nowrap text-3xl">
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
