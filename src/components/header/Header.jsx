import React from 'react'
import logo from '../../assets/logo.svg'
import { listLinks } from '../../data/data';
import './header.scss'


const Header = () => {
  const links= listLinks;
    return (
    
    <header className='header'>
        <div className='header__div'>
        <figure className='header__figure'>
            <img className='header__figure:img' src={logo} alt="img" />
        </figure>
        <nav className='header__links'>
        {
            links.map((titulo, index)=>(
                <span className='header__span' key={index}>{titulo.title}</span>
            ))
        }
        </nav>
        </div>
        
        <h1 className='header__title'>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
    </header>
    
  )
}

export default Header