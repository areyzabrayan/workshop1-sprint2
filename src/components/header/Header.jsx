import React from 'react'
import logo from '../../assets/logo.svg'
import { listLinks } from '../../data/data';

const Header = () => {
  const links= listLinks;
    return (
    
    <Header>
        <figure>
            <img src={logo} alt="img" />
        </figure>
        
    </Header>
    
  )
}

export default Header