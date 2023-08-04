import './NavBarItem.css';
import {ImBooks} from 'react-icons/im';
import {FaUserAstronaut, FaUserGraduate, FaUserTie} from 'react-icons/fa';
import {HiHome, HiMail} from 'react-icons/hi';

function NavBarItem() {
  return (
    <section className='navbar'>
      <nav>
        <ul id="navmenu">
            <li><a href="#home" title=""><HiHome className='nav-icon icon-active'/></a></li>
            <li><a href="#aboutme" title=""><FaUserAstronaut className='nav-icon'/></a></li>
            <li><a href="#work-experience" title=""><FaUserTie className='nav-icon'/></a></li>
            <li><a href="#study" title=""><FaUserGraduate className='nav-icon'/></a></li>
            <li><a href="#proyects" title=""><ImBooks className='nav-icon'/></a></li>
            <li><a href="#contact" title=""><HiMail className='nav-icon'/></a></li>
            
        </ul>
      </nav>
    </section>

  );
}

export { NavBarItem };