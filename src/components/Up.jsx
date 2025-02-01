import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp} from '@fortawesome/free-solid-svg-icons';

export default function Up() {
  useEffect(() => {
    const linkScroll = () => {
      const link = document.querySelector('.up'); // Находим элемент внутри функции
      if (!link) return;
      if (window.scrollY > 100) {
        link.style.opacity  = "1"
      } else{
        link.style.opacity  = "0"
      }
    };

    // Добавляем обработчик скролла
    window.addEventListener('scroll', linkScroll);

    // Удаляем обработчик, чтобы избежать утечек памяти
    return () => {
      window.removeEventListener('scroll', linkScroll);
    };
  },[]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
        <a className='up' onClick={scrollToTop}>
            <FontAwesomeIcon className='arrow-up' icon={faArrowUp}/>
        </a> 
    </>
  )
}
