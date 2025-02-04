import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logoo-medd.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faCircle} from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.nav'); // Находим элемент внутри функции
      if (window.scrollY > 0) {
        element.classList.add("nav-updated")
      } else {
        element.classList.remove("nav-updated")
    }
    };

    // Добавляем обработчик скролла
    window.addEventListener('scroll', handleScroll);

    // Удаляем обработчик, чтобы избежать утечек памяти
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Пустой массив зависимостей → эффект сработает один раз при монтировании

  return (
    <nav className='nav'>
      <Link to='/' className=''>
        <img className='med-logo' src={logo} alt='nav-logo'/>
      </Link>

      <ul className='nav-list'>
        <li><a href="#">Home</a></li>
        <li><a href="#about-us">О нас</a></li>
        <li><a href="#services">Услуги</a></li>
        <li><a href="">Doctor</a></li>
      </ul>

      <div>
        <ul className='call-list'>
          <li className='taulik-boiu'>
            <FontAwesomeIcon className='green-dot' icon={faCircle}/>
            <span>Круглосуточно</span>
          </li>
          <li className='contact'>
            <FontAwesomeIcon className='phoneIcon' icon={faPhoneVolume}/>
            <span>+7 (707) 563 4022</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
