import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
import whatsapp from '../assets/icons/whatsapp.png'

export default function Whatsapp() {
  return (
    <>
        <a  className='whatsapp-link'
            href='https://wa.me/77075634022?text=Здравствуйте!%20Я%20хочу%20вызвать%20врача%20на%20дом'
            target='_blank'
            rel='noopener noreferrer'>
            <img className='whatsapp-logo' src={whatsapp} alt="whatsapp-logo"/>
        </a> 
    </>
  )
}
