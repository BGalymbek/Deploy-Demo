import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

export default function Phone() {
  return (
    <>
        <a className='phone' href="tel:+77075634022">
            <FontAwesomeIcon className='phone-icon' icon={faPhoneVolume}/>
        </a> 
    </>
  )
}
