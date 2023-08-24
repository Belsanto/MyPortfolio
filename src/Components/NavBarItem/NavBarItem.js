import './NavBarItem.css';
import { ImBooks } from 'react-icons/im';
import { FaUserAstronaut, FaUserGraduate, FaUserTie } from 'react-icons/fa';
import { HiHome, HiMail } from 'react-icons/hi';
import React from 'react';

const navLinks = [
  {
    id: 'home',
    icon: <HiHome className="nav-icon" />,
    text: 'Home',
    active: false,
  },
  {
    id: 'aboutme',
    icon: <FaUserAstronaut className="nav-icon" />,
    text: 'About Me',
    active: false,
  },
  {
    id: 'work-experience',
    icon: <FaUserTie className="nav-icon" />,
    text: 'Work Experience',
    active: false,
  },
  {
    id: 'study',
    icon: <FaUserGraduate className="nav-icon" />,
    text: 'Study',
    active: true,
  },
  {
    id: 'proyects',
    icon: <ImBooks className="nav-icon" />,
    text: 'Projects',
    active: false,
  },
  {
    id: 'contact',
    icon: <HiMail className="nav-icon" />,
    text: 'Contact',
    active: false,
  },
];

function NavBarItem({ onOpenModal }) {
  return (
    <section className="navbar">
      <nav>
        <ul className="nav-list" id="navmenu">
          {navLinks.map(({ id, icon, text, active }) => (
            <li key={id}>
              <a
                className={active ? 'icon-active' : ''}
                href={`#${id}`}
                title={text}
                onClick={() => id === 'contact' && onOpenModal()}
              >
                {icon}
                <span className="nav-tooltip">{text}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export { NavBarItem };
