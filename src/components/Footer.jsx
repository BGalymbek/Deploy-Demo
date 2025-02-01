import React from 'react'
import logo from '../assets/logoo-medd.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMessage, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons/faPhoneAlt';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';

export default function Footer() {
  return (
    <footer>
        <div className='footer-wrapper'>
            <div className='footer-logo'>
                <img src={logo} alt="footer-logo" />
            </div>
            <div className='middle-footer'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Doctor</li>
                </ul>
            </div>
            <div className='end-footer'>
                <h3>Контакты</h3>
                <ul className='contact-footer'>
                    <li>
                        <FontAwesomeIcon className='icon-footer' icon={faPhone}/>
                        +7 707 411 3664</li>
                    <li>
                        <FontAwesomeIcon className='icon-footer' icon={faEnvelope}/>
                        lorem.ipsum@gmail.com</li>
                </ul>
            </div>
        </div>
        <div className='footer-corp'>
            <span>© Medical Center 2025</span>
        </div>
    </footer>
  )
}
