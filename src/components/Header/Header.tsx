import './header.scss';
import github from '../../assets/images/skills/icons8-github-24.svg';
import linkedin from '../../assets/images/skills/icons8-linkedin-24.svg';
import { useState } from 'react'


function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <div>
          <header className="flex items-center justify-around p-8">
            <h1 className="header__title font-bold text-3xl text-white">T<span className="o">&#216;</span>m<span className="apostrophe">&#x2019;</span>s space</h1>
            <nav>
              <section className="MOBILE-MENU flex lg:hidden">
                <div
                  className="HAMBURGER-ICON space-y-2"
                  onClick={() => setIsNavOpen((prev) => !prev)}
                >
                  <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                  <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                  <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                </div>

                <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
                  <div
                    className="absolute top-0 right-0 px-8 py-8"
                    onClick={() => setIsNavOpen(false)}
                  >
                    <svg
                      className="h-8 w-8 text-gray-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                  <ul className="flex flex-col items-center justify-between min-h-[250px]">
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <a href="#home">Home</a>
                    </li>
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <a href="#skills">Skills</a>
                    </li>
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <a href="#projects">Projects</a>
                    </li>
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <a href="//medium.com/@thomasx2005">Blog</a>
                    </li>
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <a href="#about">About</a>
                    </li>
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <a href="#contact">Contact</a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/your-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-menu__external-link"
                      >
                        <img className="h-5 w-5" src={github} alt="GitHub Logo" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="//www.linkedin.com/in/thomas-b-a0642642"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-menu__external-link"
                      >
                        <img className="h-5 w-5" src={linkedin} alt="Linkedin Logo" />
                      </a>
                    </li>
                  </ul>

                </div>

              </section>

              <ul className="hidden space-x-8 lg:flex">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="//medium.com/@thomasx2005">Blog</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a
                    href="https://github.com/t0mspace"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-menu__external-link"
                  >
                    <img className="h-5 w-5" src={github} alt="GitHub Logo" />
                  </a>
                </li>
                <li>
                  <a
                    href="//www.linkedin.com/in/thomas-b-a0642642"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-menu__external-link"
                  >
                    <img className="h-5 w-5" src={linkedin} alt="Linkedin Logo" />
                  </a>
                </li>

              </ul>
            </nav>
          </header>
        </div>
    )
}

export default Header;
