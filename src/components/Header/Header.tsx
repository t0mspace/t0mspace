import './header.scss';
import { useState } from 'react'
import {data} from '../Common/infos'


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
                  </ul>

                  {data.socialLinks.map((item, index) => (
                    <a key={index} href={item.url} target="_blank"
                       rel="noopener noreferrer"
                       className="cursor-pointer text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-colors
        duration-300 focus:outline-none focus:ring-2 focus:ring-primary-300 dark:focus:ring-primary-600 rounded-full">
                      <img src={item.icon} alt={item.name} className="h-10 w-10" />
                    </a>
                  ))
                  }

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
                {data.socialLinks.map((item, index) => (
                  <a key={index} href={item.url} target="_blank"
                     rel="noopener noreferrer"
                     className="cursor-pointer text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-colors
        duration-300 focus:outline-none focus:ring-2 focus:ring-primary-300 dark:focus:ring-primary-600 rounded-full">
                    <img src={item.icon} alt={item.name} className="h-10 w-10" />
                  </a>
                ))
                }

              </ul>
            </nav>
          </header>
        </div>
    )
}

export default Header;
