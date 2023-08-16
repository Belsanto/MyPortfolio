import './NavBarItem.css';
import { ImBooks } from 'react-icons/im';
import { FaUserAstronaut, FaUserGraduate, FaUserTie } from 'react-icons/fa';
import { HiHome, HiMail } from 'react-icons/hi';

function NavBarItem() {
  return (
    <section className='navbar'>
      <nav>
        <ul className='nav-list' id="navmenu">
          <li>
            <a href="#home" title="">
              <HiHome className='nav-icon' />
              <span className="nav-tooltip">Home</span>
            </a>
          </li>
          <li>
            <a href="#aboutme" title="">
              <FaUserAstronaut className='nav-icon' />
              <span className="nav-tooltip">About Me</span>
            </a>
          </li>
          <li>
            <a href="#work-experience" title="">
              <FaUserTie className='nav-icon' />
              <span className="nav-tooltip">Work Experience</span>
            </a>
          </li>
          <li>
            <a className='icon-active' href="#study" title="">
              <FaUserGraduate className='nav-icon' />
              <span className="nav-tooltip">Study</span>
            </a>
          </li>
          <li>
            <a href="#proyects" title="">
              <ImBooks className='nav-icon' />
              <span className="nav-tooltip">Projects</span>
            </a>
          </li>
          <li>
            <a href="#contact" title="">
              <HiMail className='nav-icon' />
              <span className="nav-tooltip">Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export { NavBarItem };
